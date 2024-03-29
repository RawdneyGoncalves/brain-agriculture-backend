import express, { Request, Response } from "express";
import {
  createProducerController,
  deleteProducerController,
  getProducerByIdController,
  getProducersController,
  updateProducerController,
} from "../controllers/producerController";
import { producerValidation } from "../utils/validation";

import { specs, swaggerUi } from "../../swagger";
import { getDashboardDataController } from "../controllers/dashboardController";
import { calculateTotalAgriculturalArea } from "../services/producerService";

const router = express.Router();

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs));

/**
 * @swagger
 * /producers:
 *   get:
 *     summary: Lista todos os produtores
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/", getProducersController);

/**
 * @swagger
 * /producers/{id}:
 *   get:
 *     summary: Obtém um produtor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produtor
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/:id", getProducerByIdController);

/**
 * @swagger
 * /producers:
 *   post:
 *     summary: Cria um novo produtor
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: number
 *     responses:
 *       201:
 *         description: Criado
 */
router.post("/", async (req: Request, res: Response) => {
  try {
    const validatedData = await producerValidation.validateAsync(req.body);
    const totalAgriculturalArea = calculateTotalAgriculturalArea(
      validatedData.areaAgricultavel,
      validatedData.areaVegetacao
    );

    if (totalAgriculturalArea > validatedData.areaTotal) {
      return res.status(400).json({
        error:
          "A soma de área agrícola e vegetação não pode ser maior que a área total da fazenda",
      });
    }

    const producer = await createProducerController(req, res);
    res.status(201).json(producer);
  } catch (error) {
    console.error("Erro ao criar produtor:", error);
    res.status(500).json({ error: "Erro ao criar produtor" });
  }
});

/**
 * @swagger
 * /producers/{id}:
 *   put:
 *     summary: Atualiza um produtor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produtor
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: number
 *     responses:
 *       200:
 *         description: OK
 */
router.put("/:id", updateProducerController);

/**
 * @swagger
 * /producers/{id}:
 *   delete:
 *     summary: Exclui um produtor por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do produtor
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 */
router.delete("/:id", deleteProducerController);

/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Obtém dados do dashboard
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             example:
 *               message: "Dados do dashboard obtidos com sucesso"
 */
router.get("/dashboard", async (_req: Request, res: Response) => {
  try {
    const dashboardData = await getDashboardDataController(_req, res);
    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Erro ao obter dados do dashboard:", error);
    res.status(500).json({ error: "Erro ao obter dados do dashboard" });
  }
});

export default router;

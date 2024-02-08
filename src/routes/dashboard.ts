import express, { Request, Response } from "express";
import { getDashboardDataController } from "../controllers/dashboardController";

const router = express.Router();

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
router.get("/", getDashboardDataController) 
export default router;

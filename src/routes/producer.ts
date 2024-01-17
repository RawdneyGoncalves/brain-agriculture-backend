import express, { Request, Response } from "express";
import {
  createProducerController,
  deleteProducerController,
  getProducerByIdController,
  getProducersController,
  updateProducerController,
} from "../controllers/producerController"; // Corrigir a importação aqui
import { producerValidation } from "../utils/validation";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const validatedData = await producerValidation.validateAsync(req.body);
    const producer = await createProducerController(req, res);
    res.status(201).json(producer);
  } catch (error) {
    console.error("Erro ao criar produtor:", error);
    res.status(500).json({ error: "Erro ao criar produtor" });
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const producers = await getProducersController(_req, res);
    res.status(200).json(producers);
  } catch (error) {
    console.error("Erro ao obter produtores:", error);
    res.status(500).json({ error: "Erro ao obter produtores" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const producer = await getProducerByIdController(req, res);
    if (!producer) {
      return res.status(404).json({ error: "Produtor não encontrado" });
    }
    res.status(200).json(producer);
  } catch (error) {
    console.error("Erro ao obter produtor por ID:", error);
    res.status(500).json({ error: "Erro ao obter produtor por ID" });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const validatedData = await producerValidation.validateAsync(req.body);
    const updatedProducer = await updateProducerController(req, res);
    if (!updatedProducer) {
      return res.status(404).json({ error: "Produtor não encontrado" });
    }
    res.status(200).json(updatedProducer);
  } catch (error) {
    console.error("Erro ao atualizar produtor:", error);
    res.status(500).json({ error: "Erro ao atualizar produtor" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedProducer = await deleteProducerController(req, res);
    if (!deletedProducer) {
      return res.status(404).json({ error: "Produtor não encontrado" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao excluir produtor:", error);
    res.status(500).json({ error: "Erro ao excluir produtor" });
  }
});

export default router;

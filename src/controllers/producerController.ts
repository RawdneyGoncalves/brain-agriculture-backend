import { Request, Response } from "express";
import {
  calculateTotalAgriculturalArea,
  createProducer,
  deleteProducer,
  getDashboardData,
  getProducerById,
  getProducers,
  updateProducer,
} from "../services/producerService";

import producerValidation from "../utils/validation";

export const createProducerController = async (req: Request, res: Response) => {
  try {
    const { error, value } = producerValidation.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return res.status(400).json({ error: errorMessage });
    }

    const totalAgriculturalArea = calculateTotalAgriculturalArea(
      value.areaAgricultavel,
      value.areaVegetacao
    );

    if (totalAgriculturalArea > value.areaTotal) {
      return res.status(400).json({
        error:
          "A soma de área agrícola e vegetação não pode ser maior que a área total da fazenda",
      });
    }

    const producer = await createProducer(value);
    res.status(201).json(producer);
  } catch (error: any) {
    console.error("Erro ao criar produtor:", error);
    res.status(500).json({ error: `Erro ao criar produtor ${error.message}` });
  }
};

export const getProducersController = async (_req: Request, res: Response) => {
  try {
    const producers = await getProducers();
    res.status(200).json(producers);
  } catch (error) {
    console.error("Erro ao obter produtores:", error);
    res.status(500).json({ error: "Erro ao obter produtores" });
  }
};

export const getProducerByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const producer = await getProducerById(req.params.id);
    if (!producer) {
      return res.status(404).json({ error: "Produtor não encontrado" });
    }

    res.status(200).json(producer);
  } catch (error) {
    console.error("Erro ao obter produtor por ID:", error);
    res.status(500).json({ error: "Erro ao obter produtor por ID" });
  }
};

export const updateProducerController = async (req: Request, res: Response) => {
  try {
    const { error } = producerValidation.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const totalAgriculturalArea = calculateTotalAgriculturalArea(
      req.body.areaAgricultavel,
      req.body.areaVegetacao
    );

    if (totalAgriculturalArea > req.body.areaTotal) {
      return res.status(400).json({
        error:
          "A soma de área agrícola e vegetação não pode ser maior que a área total da fazenda",
      });
    }

    const updatedProducer = await updateProducer(req.params.id, req.body);
    if (!updatedProducer) {
      return res.status(404).json({ error: "Produtor não encontrado" });
    }
    return res.status(200).json(updatedProducer);
  } catch (error) {
    console.error("Erro ao atualizar produtor:", error);
    return res.status(500).json({ error: "Erro ao atualizar produtor" });
  }
};

export const deleteProducerController = async (req: Request, res: Response) => {
  try {
    const deletedProducer = await deleteProducer(req.params.id);
    if (!deletedProducer) {
      return res.status(404).json({ error: "Produtor não encontrado" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Erro ao excluir produtor:", error);
    res.status(500).json({ error: "Erro ao excluir produtor" });
  }
};

export const getDashboardDataController = async (
  _req: Request,
  res: Response
) => {
  try {
    const dashboardData = await getDashboardData();
    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Erro ao obter dados do dashboard:", error);
    res.status(500).json({ error: "Erro ao obter dados do dashboard" });
  }
};

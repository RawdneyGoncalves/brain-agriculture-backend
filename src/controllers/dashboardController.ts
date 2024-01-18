import { Request, Response } from "express";
import { getDashboardData } from "../services/producerService";

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

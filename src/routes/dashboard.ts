import express, { Request, Response } from "express";
import { getDashboardDataController } from "../controllers/dashboardController";

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const dashboardData = await getDashboardDataController(_req, res);
    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Erro ao obter dados do dashboard:", error);
    res.status(500).json({ error: "Erro ao obter dados do dashboard" });
  }
});

export default router;

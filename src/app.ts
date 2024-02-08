import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import errorHandler from "./middleware/errorHandler";
import dashboardRoutes from "./routes/dashboard";
import producerRoutes from "./routes/producer";
import logger from "./utils/logger";
import { specs, swaggerUi } from "../swagger";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use("/producers/docs", swaggerUi.serve);
app.get("/producers/docs", swaggerUi.setup(specs));

(async () => {
  app.use("/producers", producerRoutes);
  app.use("/dashboard", dashboardRoutes);

  app.use(errorHandler);

  try {
    app.listen(PORT, () => {
      logger.info(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

export default app;

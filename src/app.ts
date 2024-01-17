import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import errorHandler from "./middleware/errorHandler";
import producerRoutes from "./routes/producer";
import logger from "./utils/logger";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

(async () => {
  app.use("/producers", producerRoutes);

  app.use(errorHandler);

  try {
    app.listen(PORT, () => {
      logger.info(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
})();

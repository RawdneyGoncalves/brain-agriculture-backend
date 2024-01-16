import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { createConnection } from "typeorm";
import errorHandler from "./middleware/errorHandler";
import producerRoutes from "./routes/producer";
import logger from "./utils/logger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

(async () => {
  try {
    await createConnection();
    logger.info("Conexão com o banco de dados estabelecida com sucesso");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }

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

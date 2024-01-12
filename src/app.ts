import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import sequelize from './config/config';
import producerRoutes from './routes/producer';
import errorHandler from './middleware/errorHandler';
import logger from './utils/logger';
import config from './config/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

(async () => {
  try {
    await sequelize.sync();
    logger.info('Conexão com o banco de dados estabelecida com sucesso');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }

  app.use('/producers', producerRoutes);

  app.use(errorHandler);

  try {
    app.listen(PORT, () => {
      logger.info(`Servidor iniciado na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
})();

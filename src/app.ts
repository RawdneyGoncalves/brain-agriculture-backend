// ./app.ts

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import sequelize from './config/config'; 
import producerRoutes from './routes/producer';
import errorHandler from './middleware/errorHandler';
import logger from './utils/logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

sequelize.sync();

app.use('/producers', producerRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  logger.info(`Servidor iniciado na porta ${PORT}`);
});

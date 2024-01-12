import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(`Erro: ${err.message}`);
  res.status(500).json({ error: 'Erro interno no servidor' });
};

export default errorHandler;

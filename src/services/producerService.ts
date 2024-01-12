import Producer from '../models/producer';
import logger from '../utils/logger';

export const createProducer = async (data: any) => {
  try {
    return await Producer.create(data);
  } catch (error) {
    logger.error(error.message);
    throw new Error('Erro ao criar produtor');
  }
};
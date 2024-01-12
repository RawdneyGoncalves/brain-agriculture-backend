import Producer from '../models/producer';
import logger from '../utils/logger';
import { producerValidation } from '../utils/validation';

export const createProducer = async (data: any) => {
    try {
      return await Producer.create(data);
    } catch (error: any) {
      logger.error(error.message);
      throw new Error('Erro ao criar produtor');
    }
  };

  export const getProducers = async () => {
    try {
      return await Producer.findAll();
    } catch (error: any) {
      logger.error(error.message);
      throw new Error('Erro ao obter produtores');
    }
  };

  export const getProducerById = async (id: string) => {
    try {
      return await Producer.findByPk(id);
    } catch (error: any) {
      logger.error(error.message);
      throw new Error('Erro ao obter produtor por ID');
    }
  };

  
export const updateProducer = async (id: string, data: any) => {
    try {
      const [rowsUpdated, [updatedProducer]] = await Producer.update(data, {
        where: { id },
        returning: true,
      });
  
      if (rowsUpdated === 0) {
        return null;
      }
  
      return updatedProducer;
    } catch (error: any) {
      logger.error(error.message);
      throw new Error('Erro ao atualizar produtor');
    }
  };
  
  export const deleteProducer = async (id: string) => {
    try {
      const rowsDeleted = await Producer.destroy({ where: { id } });
  
      if (rowsDeleted === 0) {
        return null;
      }
  
      return { id };
    } catch (error: any) {
      logger.error(error.message);
      throw new Error('Erro ao excluir produtor');
    }
  };
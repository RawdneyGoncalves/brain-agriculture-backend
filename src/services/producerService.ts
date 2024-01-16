import { DeleteResult, getRepository } from "typeorm";
import Producer from "../models/producer";
import logger from "../utils/logger";

export const createProducer = async (data: any) => {
  try {
    const producerRepository = getRepository(Producer);
    const producer = producerRepository.create(data);
    return await producerRepository.save(producer);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao criar produtor");
  }
};

export const getProducers = async () => {
  try {
    const producerRepository = getRepository(Producer);
    return await producerRepository.find();
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao obter produtores");
  }
};

export const getProducerById = async (id: string) => {
  try {
    const producerRepository = getRepository(Producer);
    return await producerRepository.findOne({
      where: { id: parseInt(id, 10) }, // Converta id para número, se necessário
    });
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao obter produtor por ID");
  }
};

export const updateProducer = async (id: string, data: any) => {
  try {
    const producerRepository = getRepository(Producer);
    const existingProducer = await producerRepository.findOne({
      where: { id: parseInt(id, 10) },
    });

    if (!existingProducer) {
      return null;
    }

    producerRepository.merge(existingProducer, data);
    return await producerRepository.save(existingProducer);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao atualizar produtor");
  }
};
export const deleteProducer = async (
  id: string
): Promise<DeleteResult | null> => {
  try {
    const producerRepository = getRepository(Producer);
    const existingProducer = await producerRepository.findOne({
      where: { id: parseInt(id, 10) },
    });

    if (!existingProducer) {
      return null;
    }

    return await producerRepository.delete(existingProducer.id);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao excluir produtor");
  }
};

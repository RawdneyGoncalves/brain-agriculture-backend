import PostgresDataSource from "../../config";
import Producer from "../models/producer";
import logger from "../utils/logger";

export const createProducer = async (data: any) => {
  const manager = PostgresDataSource.manager;

  const existsProducerCpfOrCnpj = await manager.findOneBy(Producer, {
    cpfCnpj: data.cpfCnpj.replace(/\D/g, ""),
  });

  if (existsProducerCpfOrCnpj) {
    throw new Error("Produtor já existente");
  }

  const producer = await manager.create(Producer, data);

  await manager.save(producer);

  return producer;
};

export const getProducers = async () => {
  try {
    const manager = PostgresDataSource.manager;
    return await manager.find(Producer);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao obter produtores");
  }
};

export const getProducerById = async (id: string) => {
  try {
    const manager = PostgresDataSource.manager;
    return await manager.findOne(Producer, {
      where: { id: parseInt(id, 10) },
    });
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao obter produtor por ID");
  }
};

export const updateProducer = async (id: string, data: any) => {
  try {
    const manager = PostgresDataSource.manager;
    const existingProducer = await manager.findOne(Producer, {
      where: { id: parseInt(id, 10) },
    });

    if (!existingProducer) {
      return null;
    }

    manager.merge(Producer, existingProducer, data);
    return await manager.save(Producer, existingProducer);
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao atualizar produtor");
  }
};

export const deleteProducer = async (id: string): Promise<any> => {
  try {
    const manager = PostgresDataSource.manager;
    const existingProducer = await manager.findOne(Producer, {
      where: { id: parseInt(id, 10) },
    });

    if (!existingProducer) {
      return null;
    }

    manager.delete(Producer, existingProducer.id);

    await manager.save(Producer, existingProducer);

    return existingProducer;
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao excluir produtor");
  }
};

export const calculateTotalAgriculturalArea = (
  areaAgricultavel: number,
  areaVegetacao: number
): number => {
  return areaAgricultavel + areaVegetacao;
};

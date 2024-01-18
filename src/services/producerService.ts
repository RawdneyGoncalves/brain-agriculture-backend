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

export const getDashboardData = async () => {
  try {
    const manager = PostgresDataSource.manager;

    // Total de fazendas em quantidade
    const totalFazendas = await manager.count(Producer);

    // // // Total de fazendas em hectares (área total)
    const totalHectares = await manager.sum(Producer, "areaTotal");

    // // // Gráfico de pizza por estado
    const fazendasPorEstado = await manager.query(
      'SELECT estado, COUNT(id) as quantidade FROM "Producer" GROUP BY estado' // Ajuste aqui
    );

    // // // Gráfico de pizza por cultura
    const producers = await manager.find(Producer);

    let totalCulturasPlantadas = 0;

    producers.forEach((producer) => {
      const culturasPlantadas = producer.culturasPlantadas.length;
      totalCulturasPlantadas += culturasPlantadas;
    });

    // // // Gráfico de pizza por uso de solo (Área agricultável e vegetação)
    const areaAgricultavel = await manager.sum(Producer, "areaAgricultavel");
    const areaVegetacao = await manager.sum(Producer, "areaVegetacao");

    return {
      totalFazendas,
      totalHectares: totalHectares ?? 0,
      fazendasPorEstado: fazendasPorEstado ?? [],
      culturasPlantadas: totalCulturasPlantadas,
      areaAgricultavel: areaAgricultavel ?? 0,
      areaVegetacao: areaVegetacao ?? 0,
    };
  } catch (error: any) {
    logger.error(error.message);
    throw new Error("Erro ao obter dados do dashboard");
  }
};

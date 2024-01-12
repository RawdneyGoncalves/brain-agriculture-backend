import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class Producer extends Model {
  public id!: number;
  public cpfCnpj!: string;
  public nomeProdutor!: string;
  public nomeFazenda!: string;
  public cidade!: string;
  public estado!: string;
  public areaTotal!: number;
  public areaAgricultavel!: number;
  public areaVegetacao!: number;
  public culturasPlantadas!: string[];
}

Producer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cpfCnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nomeProdutor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomeFazenda: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    areaTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    areaAgricultavel: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    areaVegetacao: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    culturasPlantadas: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Producer',
    tableName: 'producers',
  }
);

export default Producer;

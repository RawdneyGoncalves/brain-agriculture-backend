import { DataTypes } from 'sequelize';
import sequelize from './config';

const Producer = sequelize.define('Producer', {
  cpfCnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  farmName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  totalArea: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  cultivableArea: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  vegetationArea: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  crops: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Producer;

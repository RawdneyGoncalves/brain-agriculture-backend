'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('producers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cpfCnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      nomeProdutor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nomeFazenda: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      areaTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      areaAgricultavel: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      areaVegetacao: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      culturasPlantadas: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('producers');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Products', 'imagePublicId', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Products', 'imagePublicId');
  }
};

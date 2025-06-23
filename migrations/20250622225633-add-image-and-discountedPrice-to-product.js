export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('Products', 'image', {
    type: Sequelize.STRING,
  });
  await queryInterface.addColumn('Products', 'discountedPrice', {
    type: Sequelize.DECIMAL,
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('Products', 'image');
  await queryInterface.removeColumn('Products', 'discountedPrice');
}

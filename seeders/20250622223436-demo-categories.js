
export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('Categories', [
    { name: 'Electronics', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Clothing', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Books', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Home & Kitchen', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Sports', createdAt: new Date(), updatedAt: new Date() },
  ]);
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Categories', null, {});
}

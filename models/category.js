export default (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  Category.associate = models => {
    Category.hasMany(models.Product, {
      foreignKey: 'categoryId',
      as: 'products',
    });
  };

  return Category;
};

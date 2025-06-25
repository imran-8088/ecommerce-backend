export default (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    discountedPrice: DataTypes.DECIMAL,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    imagePublicId: DataTypes.STRING, 
    categoryId: DataTypes.INTEGER,
  });

  Product.associate = models => {
    Product.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };

  return Product;
};

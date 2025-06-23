export default (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    address: DataTypes.STRING,
  });

  Order.associate = models => {
    Order.hasMany(models.OrderItem, {
      foreignKey: 'orderId',
      as: 'items',
    });
  };

  return Order;
};

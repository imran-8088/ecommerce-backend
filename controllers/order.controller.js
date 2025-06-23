import db from '../models/index.js';
const { Order, OrderItem, Product } = db;

export const placeOrder = async (req, res) => {
  const t = await db.sequelize.transaction();
  try {
    const { fullName, email, mobile, address, items } = req.body;

    const order = await Order.create({ fullName, email, mobile, address }, { transaction: t });

    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (!product) throw new Error(`Product ID ${item.productId} not found`);

      await OrderItem.create({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: product.discountedPrice || product.price,
      }, { transaction: t });
    }

    await t.commit();
    res.status(201).json({ message: 'Order placed successfully', orderId: order.id });
  } catch (error) {
    await t.rollback();
    res.status(500).json({ error: error.message });
  }
};

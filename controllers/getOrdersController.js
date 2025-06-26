import db from '../models/index.js';

const { Order, OrderItem, Product } = db;

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: {
        model: OrderItem,
        as: 'items',
        include: {
          model: Product,
          as: 'product',
          attributes: ['id', 'name', 'price', 'discountedPrice', 'image']
        }
      },
      order: [['createdAt', 'DESC']]
    });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

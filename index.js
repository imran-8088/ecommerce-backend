// index.js
import express from 'express';
import db from './models/index.js';
import productRoutes from './routes/product.routes.js';
import orderRoutes from './routes/order.routes.js';

const app = express();
const PORT = 5000;
app.use(express.json());
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

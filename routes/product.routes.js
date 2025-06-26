import express from 'express';
import {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';
import upload from '../uploads/middlewares/upload.js';



const router = express.Router();

router.post('/', upload.single('image'), addProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', upload.single('image'), updateProduct);
router.delete('/:id', deleteProduct);

export default router;

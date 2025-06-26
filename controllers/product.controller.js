import db from '../models/index.js';
import { cloudinary } from '../utils/cloudinary.js'; 

const { Product, Category } = db;

export const addProduct = async (req, res) => {
  try {
    const { name, price, discountedPrice, description, categoryId } = req.body;

    const image = req.file?.path;
    const imagePublicId = req.file?.filename;

    const product = await Product.create({
      name,
      price,
      discountedPrice,
      description,
      categoryId,
      image,
      imagePublicId,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ include: ['category'], order: [['createdAt', 'DESC']] });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: ['category'],
    });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const { name, price, discountedPrice, description, categoryId } = req.body;

    let image = product.image;
    let imagePublicId = product.imagePublicId;

    if (req.file) {
      if (imagePublicId) {
        await cloudinary.uploader.destroy(imagePublicId);
      }

      image = req.file.path;
      imagePublicId = req.file.filename;
    }

    await product.update({
      name: name ?? product.name,
      price: price ?? product.price,
      discountedPrice: discountedPrice ?? product.discountedPrice,
      description: description ?? product.description,
      categoryId: categoryId ?? product.categoryId,
      image,
      imagePublicId,
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (product.imagePublicId) {
      await cloudinary.uploader.destroy(product.imagePublicId);
    }

    await product.destroy();

    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



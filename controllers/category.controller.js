import db from '../models/index.js';
const { Category } = db;

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

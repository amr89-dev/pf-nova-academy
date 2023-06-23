const { Category } = require("../models");

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = await Category.create({ name, description });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating category" });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving categories" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving category" });
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    category.name = name;
    category.description = description;
    await category.save();
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating category" });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }
    await category.destroy();
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting category" });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};

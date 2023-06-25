const {Router} = require('express');
const {createCategory, getCategories, getCategoryById, updateCategoryById, deleteCategoryById} = require ("../controllers/category.controller.js");
const categoryRoutes = Router();

categoryRoutes.get("/", getCategories)
categoryRoutes.get("/:categoryId", getCategoryById)
categoryRoutes.post("/", createCategory)
categoryRoutes.put("/:categoryId", updateCategoryById)
categoryRoutes.delete("/:categoryId", deleteCategoryById)

module.exports = categoryRoutes;
const {Router} = require('express');
const {createModule, getModules, getModuleById, updateModuleById, deleteModuleById} = require ("../controllers/module.controller.js");
const moduleRoutes = Router();


moduleRoutes.get("/", getModules)
moduleRoutes.get("/:moduleId", getModuleById)
moduleRoutes.post("/", createModule)
moduleRoutes.put("/:moduleId", updateModuleById)
moduleRoutes.delete("/:moduleId", deleteModuleById)

module.exports = moduleRoutes;
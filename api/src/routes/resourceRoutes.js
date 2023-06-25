const {Router} = require('express');
const {createResource, getResources, getResourceById, updateResourceById, deleteResourceById} = require ("../controllers/resource.controller");
const resourceRoutes = Router();


resourceRoutes.get("/", getResources)
resourceRoutes.get("/:resourceId", getResourceById)
resourceRoutes.post("/", createResource)
resourceRoutes.put("/:resourceId", updateResourceById)
resourceRoutes.delete("/:resourceId", deleteResourceById)

module.exports = resourceRoutes;
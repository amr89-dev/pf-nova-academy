const {Router} = require('express');
const {createUser, getUsers, getUserById, updateUserById, deleteUserById} = require ("../controllers/user.controller.js");
const userRoutes = Router();


userRoutes.get("/", getUsers)
userRoutes.get("/:userId", getUserById)
userRoutes.post("/", createUser)
userRoutes.put("/:userId", updateUserById)
userRoutes.delete("/userId", deleteUserById)

module.exports = userRoutes;
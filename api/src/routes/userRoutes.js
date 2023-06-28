const { Router } = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getLoginUser,
} = require("../controllers/user.controller.js");
const {validateCreateuser,validateLoginUser} = require("../validators/user.js");
const VerifyAuthorization = require("../middleware/auth.js");
const userRoutes = Router();
userRoutes.delete("/deleteUser/:userId",deleteUserById);
userRoutes.get("/userId/:userId",getUserById);
userRoutes.put("/updateUser/:userId",updateUserById);
userRoutes.get("/login",validateLoginUser,getLoginUser);
userRoutes.post("/singup",validateCreateuser, createUser);
userRoutes.get("/",VerifyAuthorization,getUsers);

module.exports = userRoutes;

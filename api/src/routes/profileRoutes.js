const { Router } = require("express");
const { getProfile,postAddProfileCourse } = require("../controllers/profile.controller");
const VerifyAuthorization = require("../middleware/auth");
const {verificarRole} = require("../middleware/authRole");
const profileRoutes = Router()

profileRoutes.get('/',VerifyAuthorization,verificarRole('admin'),getProfile)
profileRoutes.post('/profile/addCourse',VerifyAuthorization,verificarRole('user'),postAddProfileCourse)
module.exports =profileRoutes
const { Router } = require("express");
const { getProfile } = require("../controllers/profile.controller");
const VerifyAuthorization = require("../middleware/auth");
const {verificarRole} = require("../middleware/authRole");
const profileRoutes = Router()

profileRoutes.get('/',VerifyAuthorization,verificarRole('user'),getProfile)
module.exports =profileRoutes
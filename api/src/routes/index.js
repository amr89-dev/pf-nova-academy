const { Router } = require('express');
// Importar todos los routers;
const coursesRoute = require("./courseRoutes.js")

const router = Router();

router.use("/courses", coursesRoute);
router.use("/");
router.use("/");
router.use("/");
router.use("/");

module.exports = router;

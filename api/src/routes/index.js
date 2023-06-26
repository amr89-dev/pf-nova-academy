const { Router } = require('express');
// Importar todos los routers;
const courseRoutes = require("./courseRoutes.js")
const categoryRoutes = require("./categoryRoutes.js")
const certificateRoutes = require("./certificateRoutes.js")
const enrollmentRoutes = require("./enrollmentRoutes.js")
const lessonRoutes = require("./lessonRoutes.js")
const mercadoPagoRoutes = require("./mercadoPagoRoutes.js")
const moduleRoutes = require("./moduleRoutes.js")
const paymentRoutes = require("./paymentRoutes.js")
const progressLessonRoutes = require("./progressLessonRoutes.js")
const resourceRoutes = require("./resourceRoutes.js")
const reviewRoutes = require('./reviewRoutes.js');
const userRoutes = require('./userRoutes.js');

const router = Router();

router.use("/courses", courseRoutes);
router.use("/category", categoryRoutes);
router.use("/certificate", certificateRoutes);
router.use("/enrollment", enrollmentRoutes);
router.use("/lesson", lessonRoutes);
router.use("/mercadopago", mercadoPagoRoutes);
router.use("/module", moduleRoutes);
router.use("/payment", paymentRoutes);
router.use("/progresslesson", progressLessonRoutes);
router.use("/resource", resourceRoutes);
router.use("/review", reviewRoutes);
router.use("/user", userRoutes);

module.exports = router;

const { Router } = require('express');
// Importar todos los routers;
const coursesRoute = require("./courseRoutes.js")
const categoryRoute = require("./categoryRoutes.js")
const certificateRoute = require("./certificateRoutes.js")
const enrollmentRoute = require("./enrollmentRoutes.js")
const lessonRoute = require("./lessonRoutes.js")
const moduleRoute = require("./moduleRoutes.js")
const paymentRoute = require("./paymentRoutes.js")
const progressLessonRoute = require("./progressLessonRoutes.js")
const resourceRoute = require("./resourceRoutes.js")
const courseRoute = require("./courseRoutes.js");
const reviewRoute = require('./reviewRoutes.js');
const userRoute = require('./userRoutes.js');

const router = Router();

router.use("/courses", courseRoute);
router.use("/category", categoryRoute);
router.use("/certificate", certificateRoute);
router.use("/enrollment", enrollmentRoute);
router.use("/lesson", lessonRoute);
router.use("/module", moduleRoute);
router.use("/payment", paymentRoute);
router.use("/progresslesson", progressLessonRoute);
router.use("/resource", resourceRoute);
router.use("/review", reviewRoute);
router.use("/user", userRoute);

module.exports = router;

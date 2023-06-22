const { Router } = require('express');
// Importar todos los routers;
const coursesCtrl = require("../controllers/courses.controller")

const router = Router();

router.post("/courses", coursesCtrl.createCourse)
router.get("/courses", coursesCtrl.getCourses)
router.get("/courses:courseId", coursesCtrl.getCoursById)
router.put("/courses:courseId", coursesCtrl.updateCourseById)
router.delete("/courses:cousesId", coursesCtrl.deleteCourseById)

module.exports = router;

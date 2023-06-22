const {Router} = require('express');
const {createCourse, getCourses, getCoursById, updateCourseById, deleteCourseById} = require ("../controllers/courses.controller.js");
const courseRoutes = Router();



courseRoutes.post("/", createCourse)
courseRoutes.get("/", getCourses)
courseRoutes.get("/:courseId", getCoursById)
courseRoutes.put("/:courseId", updateCourseById)
courseRoutes.delete("/:cousesId", deleteCourseById)

module.exports = courseRoutes;
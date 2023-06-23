const {Router} = require('express');
const {createCourse, getCourses, getCourseById, updateCourseById, deleteCourseById} = require ("../controllers/courses.controller.js");
const courseRoutes = Router();


courseRoutes.get("/", getCourses)
courseRoutes.get("/:courseId", getCourseById)
courseRoutes.post("/", createCourse)
courseRoutes.put("/:courseId", updateCourseById)
courseRoutes.delete("/:courseId", deleteCourseById)

module.exports = courseRoutes;
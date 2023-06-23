const {Router} = require('express');
const {createCourse, getCourses, getCoursById, updateCourseById, deleteCourseById} = require ("../controllers/courses.controller.js");
const courseRoutes = Router();


courseRoutes.get("/", getCourses)
courseRoutes.get("/:courseId", getCoursById)
courseRoutes.post("/", createCourse)
courseRoutes.put("/:courseId", updateCourseById)
courseRoutes.delete("/:couseId", deleteCourseById)

module.exports = courseRoutes;
const {Router} = require('express');
const {createLesson, getLessons, getLessonById, updateLessonById, deleteLessonById} = require ("../controllers/lesson.controller");
const lessonRoutes = Router();


lessonRoutes.get("/", getLessons)
lessonRoutes.get("/:lessonId", getLessonById)
lessonRoutes.post("/", createLesson)
lessonRoutes.put("/:lessonId", updateLessonById)
lessonRoutes.delete("/:lessonId", deleteLessonById)

module.exports = lessonRoutes;
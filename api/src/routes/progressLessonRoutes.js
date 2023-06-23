const {Router} = require('express');
const {createProgressLesson, getProgressLessons, getProgressLessonById, updateProgressLessonById, deleteProgressLessonById} = require ("../controllers/progressLesson.controller");
const progressLessonRoutes = Router();


progressLessonRoutes.get("/", getProgressLessons)
progressLessonRoutes.get("/:progressLessonId", getProgressLessonById)
progressLessonRoutes.post("/", createProgressLesson)
progressLessonRoutes.put("/:progressLessonId", updateProgressLessonById)
progressLessonRoutes.delete("/:progressLessonId", deleteProgressLessonById)

module.exports = progressLessonRoutes;
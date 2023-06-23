const {Router} = require('express');
const {createEnrollment, getEnrollments, getEnrollmentById, updateEnrollmentById, deleteEnrollmentById} = require ("../controllers/enrollment.controller");
const enrollmentRoutes = Router();


enrollmentRoutes.get("/", getEnrollments)
enrollmentRoutes.get("/:enrollmentId", getEnrollmentById)
enrollmentRoutes.post("/", createEnrollment)
enrollmentRoutes.put("/:enrollmentId", updateEnrollmentById)
enrollmentRoutes.delete("/:enrollmentId", deleteEnrollmentById)

module.exports = enrollmentRoutes;
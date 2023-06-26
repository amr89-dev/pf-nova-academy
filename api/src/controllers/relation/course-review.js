const {Course} = require("../../db");
const {Review} = require("../../db");

// Controlador para obtener todos los cursos con sus reseñas
const getAllCoursesWithReviews = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [Review],
    });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los cursos" });
  }
};

// Controlador para obtener las reseñas de un curso específico
const getCourseReviews = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const course = await Course.findByPk(courseId, {
      include: [Review],
    });
    if (!course) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    res.json(course.Reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las reseñas del curso" });
  }
};

// Controlador para crear una nueva reseña para un curso
const createCourseReview = async (req, res) => {
  const courseId = req.params.courseId;
  const { content } = req.body;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    const review = await Review.create({ content, courseId });
    res.status(201).json(review);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la reseña del curso" });
  }
};

module.exports = {
  getAllCoursesWithReviews,
  getCourseReviews,
  createCourseReview,
};

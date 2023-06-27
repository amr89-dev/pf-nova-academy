const {Course} = require("../../db");
const {Module} = require("../../db");

// Controlador para obtener todos los cursos con sus módulos
const getAllCoursesWithModules = async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [Module],
    });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los cursos" });
  }
};

// Controlador para obtener los módulos de un curso específico
const getCourseModules = async (req, res) => {
  const courseId = req.params.courseId;
  try {
    const course = await Course.findByPk(courseId, {
      include: [Module],
    });
    if (!course) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    res.json(course.Modules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los módulos del curso" });
  }
};

// Controlador para crear un nuevo módulo para un curso
const createCourseModule = async (req, res) => {
  const courseId = req.params.courseId;
  const { name, description, order } = req.body;
  try {
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ message: "Curso no encontrado" });
    }
    const module = await Module.create({ name, description, order, courseId });
    res.status(201).json(module);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el módulo del curso" });
  }
};

module.exports = {
  getAllCoursesWithModules,
  getCourseModules,
  createCourseModule,
};

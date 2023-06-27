const Module = require("../../db");
const Lesson = require("../../db");

// Controlador para obtener el módulo con sus lecciones
const getModuleWithLessons = async (req, res) => {
  const moduleId = req.params.moduleId;
  try {
    const module = await Module.findByPk(moduleId, {
      include: [Lesson],
    });
    if (!module) {
      return res.status(404).json({ message: "Módulo no encontrado" });
    }
    res.json(module);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener el módulo con las lecciones" });
  }
};

// Controlador para crear una nueva lección para un módulo
const createLessonForModule = async (req, res) => {
  const moduleId = req.params.moduleId;
  const { title, content } = req.body;
  try {
    const module = await Module.findByPk(moduleId);
    if (!module) {
      return res.status(404).json({ message: "Módulo no encontrado" });
    }
    const lesson = await Lesson.create({ title, content, moduleId });
    res.status(201).json(lesson);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al crear la lección para el módulo" });
  }
};

// Obtener todas las lecciones de un módulo
const getAllLessonsForModule = async (req, res) => {
  const moduleId = req.params.moduleId;
  try {
    const module = await Module.findByPk(moduleId);
    if (!module) {
      return res.status(404).json({ message: "Módulo no encontrado" });
    }
    const lessons = await Lesson.findAll({ where: { moduleId } });
    res.json(lessons);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener las lecciones del módulo" });
  }
};

// Actualizar una lección de un módulo
const updateLessonForModule = async (req, res) => {
  const lessonId = req.params.lessonId;
  const { title, content } = req.body;
  try {
    const lesson = await Lesson.findByPk(lessonId);
    if (!lesson) {
      return res.status(404).json({ message: "Lección no encontrada" });
    }
    lesson.title = title;
    lesson.content = content;
    await lesson.save();
    res.json(lesson);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al actualizar la lección del módulo" });
  }
};

module.exports = {
  getModuleWithLessons,
  createLessonForModule,
  getAllLessonsForModule,
  updateLessonForModule
};

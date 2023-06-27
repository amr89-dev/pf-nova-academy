const { Lesson } = require("../../db");
const { Resource } = require("../../db");

// Crear una lección con su recurso correspondiente:
const createLessonWithResource = async (req, res) => {
  const { title, content, resourceName, resourceType, resourceLink } = req.body;

  try {
    // Crear la lección
    const lesson = await Lesson.create({ title, content });

    // Crear el recurso asociado a la lección
    const resource = await Resource.create({
      name: resourceName,
      type: resourceType,
      link: resourceLink,
      lessonId: lesson.id,
    });

    res.json({ lesson, resource });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la lección y el recurso" });
  }
};

// Obtener una lección con su recurso:
const getLessonWithResource = async (req, res) => {
  const lessonId = req.params.lessonId;

  try {
    // Obtener la lección con su recurso asociado
    const lesson = await Lesson.findByPk(lessonId, { include: Resource });

    if (!lesson) {
      return res.status(404).json({ message: "Lección no encontrada" });
    }

    res.json(lesson);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener la lección y el recurso" });
  }
};

// Obtener todos los recursos de una lección
const getResourcesByLesson = async (req, res) => {
  const lessonId = req.params.lessonId;

  try {
    // Obtener la lección con todos sus recursos
    const lesson = await Lesson.findByPk(lessonId, { include: Resource });

    if (!lesson) {
      return res.status(404).json({ message: "Lección no encontrada" });
    }

    const resources = lesson.Resources;
    res.json(resources);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los recursos de la lección" });
  }
};

// Actualizar un recurso de una lección
const updateResource = async (req, res) => {
  const resourceId = req.params.resourceId;
  const { name, type, link } = req.body;

  try {
    // Verificar si el recurso existe
    const resource = await Resource.findByPk(resourceId);

    if (!resource) {
      return res.status(404).json({ message: "Recurso no encontrado" });
    }

    // Actualizar los datos del recurso
    resource.name = name;
    resource.type = type;
    resource.link = link;
    await resource.save();

    res.json(resource);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el recurso" });
  }
};

module.exports = {
  createLessonWithResource,
  getLessonWithResource,
  getResourcesByLesson,
  updateResource,
};

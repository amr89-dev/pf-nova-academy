// Obtener todos los cursos de un usuario:
const getUserCourses = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, { include: Course });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const courses = user.Courses;
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving user courses" });
  }
};

// Obtener el progreso de un usuario en un curso:
const getUserCourseProgress = async (req, res) => {
  try {
    const { userId, courseId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const progress = await ProgressLesson.findAll({
      where: { userId, courseId },
      include: Lesson,
    });
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving user course progress" });
  }
};

// Obtener todos los certificados de un usuario:
const getUserCertificates = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, { include: Certificate });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const certificates = user.Certificates;
    res.json(certificates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving user certificates" });
  }
};

// Obtener todas las lecciones de un módulo:
const getModuleLessons = async (req, res) => {
  try {
    const { moduleId } = req.params;
    const module = await Module.findByPk(moduleId, { include: Lesson });
    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }
    const lessons = module.Lessons;
    res.json(lessons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving module lessons" });
  }
};

// Obtener todas las reseñas de una lección:
const getLessonReviews = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const lesson = await Lesson.findByPk(lessonId, { include: Review });
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }
    const reviews = lesson.Reviews;
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving lesson reviews" });
  }
};

// Obtener todos los recursos de una lección:
const getLessonResources = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const lesson = await Lesson.findByPk(lessonId, { include: Resource });
    if (!lesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }
    const resources = lesson.Resources;
    res.json(resources);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving lesson resources" });
  }
};

// Obtener todos los módulos de un curso:
const getCourseModules = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findByPk(courseId, { include: Module });
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    const modules = course.Modules;
    res.json(modules);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving course modules" });
  }
};

// Obtener todos los usuarios inscritos en un curso:
const getCourseEnrolledUsers = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findByPk(courseId, { include: User });
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    const users = course.Users;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving course enrolled users" });
  }
};

module.exports = {
  getUserCourses,
  getUserCourseProgress,
  getUserCertificates,
  getModuleLessons,
  getLessonReviews,
  getLessonResources,
  getCourseModules,
  getCourseEnrolledUsers,
};

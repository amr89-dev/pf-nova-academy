const { Course } = require("../db");

const createCourse = async (req, res) => {
  try {
    const { name, category, duration, price} = req.body;
    const course = await Course.create({ name, category, duration, price });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating course" });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving courses" });
  }
};

const getCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving course" });
  }
};

const updateCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { name, category, duration, price } = req.body;
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    await course.update({ name, category, duration, price });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating course" });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findByPk(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    await course.destroy();
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting course" });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  updateCourseById,
  deleteCourseById,
};

const { Enrollment } = require("../models/enrollment");

const createEnrollment = async (req, res) => {
  try {
    const { start_date, end_date, course_score } = req.body;
    const enrollment = await Enrollment.create({
      start_date,
      end_date,
      course_score,
    });
    res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating enrollment" });
  }
};

const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.json(enrollments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving enrollments" });
  }
};

const getEnrollmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({ error: "Enrollment not found" });
    }
    res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving enrollment" });
  }
};

const updateEnrollmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const { start_date, end_date, course_score } = req.body;
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({ error: "Enrollment not found" });
    }
    enrollment.start_date = start_date;
    enrollment.end_date = end_date;
    enrollment.course_score = course_score;
    await enrollment.save();
    res.json(enrollment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating enrollment" });
  }
};

const deleteEnrollmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const enrollment = await Enrollment.findByPk(id);
    if (!enrollment) {
      return res.status(404).json({ error: "Enrollment not found" });
    }
    await enrollment.destroy();
    res.json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting enrollment" });
  }
};

module.exports = {
  createEnrollment,
  getEnrollments,
  getEnrollmentById,
  updateEnrollmentById,
  deleteEnrollmentById,
};

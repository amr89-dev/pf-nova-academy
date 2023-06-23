const { ProgressLesson } = require("../db");

const createProgressLesson = async (req, res) => {
  try {
    const { completed, played_time } = req.body;
    const progressLesson = await ProgressLesson.create({
      completed,
      played_time,
    });
    res.json(progressLesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating progress lesson" });
  }
};

const getProgressLessons = async (req, res) => {
  try {
    const progressLessons = await ProgressLesson.findAll();
    res.json(progressLessons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving progress lessons" });
  }
};

const getProgressLessonById = async (req, res) => {
  try {
    const { progressLessonId } = req.params;
    const progressLesson = await ProgressLesson.findByPk(progressLessonId);
    if (!progressLesson) {
      return res.status(404).json({ error: "Progress lesson not found" });
    }
    res.json(progressLesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving progress lesson" });
  }
};

const updateProgressLessonById = async (req, res) => {
  try {
    const { progressLessonId } = req.params;
    const { completed, played_time } = req.body;
    const progressLesson = await ProgressLesson.findByPk(progressLessonId);
    if (!progressLesson) {
      return res.status(404).json({ error: "Progress lesson not found" });
    }
    progressLesson.completed = completed;
    progressLesson.played_time = played_time;
    await progressLesson.save();
    res.json(progressLesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating progress lesson" });
  }
};

const deleteProgressLessonById = async (req, res) => {
  try {
    const { progressLessonId } = req.params;
    const progressLesson = await ProgressLesson.findByPk(progressLessonId);
    if (!progressLesson) {
      return res.status(404).json({ error: "Progress lesson not found" });
    }
    await progressLesson.destroy();
    res.json({ message: "Progress lesson deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting progress lesson" });
  }
};

module.exports = {
  createProgressLesson,
  getProgressLessons,
  getProgressLessonById,
  updateProgressLessonById,
  deleteProgressLessonById,
};

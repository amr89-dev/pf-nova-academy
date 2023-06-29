const { CourseForSale, Profile, User } = require("../db");
const getUserToken = require("../helpers/getUsertoken");
const {cursos,category} = require("../constants/data");

const postCreateCourseForSale = async (req, res) => {
  try {
    const { name, category, duration, description, images, price } = req.body;
    const user = await getUserToken(req);
    const newCourse = await CourseForSale.create({
      name,
      category,
      duration,
      description,
      images,
      price,
      idProfile: user.idUser,
    });    
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  /* try {
    
    token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjEsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjg3OTk0MjI2LCJleHAiOjE2ODgwMDE0MjZ9.6Dg-N6sUFOZ3Ek8L8xL8MosNVc5AtNkVgTUItYj2hVU

    const user = await getUserToken(req);
    const dataCourse = cursos.map((course) => {
      return {
        name: course.name,
        category: course.category,
        duration: course.duration,
        price: course.price,
        idProfile: user.idUser,
      };
    });
    const newCourse = await CourseForSale.bulkCreate(dataCourse);
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } */
};

const getCourseForSale = async (req, res) => {
  try {
    /*   const user = await getUserToken(req); */

    const courseAll = await CourseForSale.findAll({
      include: {
        model: Profile,
        attributes: { exclude: ["photo"] },
      },
    });
    const courseCount = await CourseForSale.count();
    res.send({courseCount,courseAll});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateCourseForSale = async (req,res) => {
  try {
    const courseId = req.params.courseId;
    const updateCourse = req.body;
    const user = await getUserToken(req);
    const updatedCourse = await CourseForSale.update(updateCourse, {
      where: {
        idCourseForSale: courseId,
        idProfile: user.idUser,
      },
    });
    if (updatedCourse[0] === 0) {
      res
        .status(400)
        .json({ error: "Course not found for the current user profile" });
    }
    else{
        res.send('update course successfully');
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
const deleteCourseForSale = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const user = await getUserToken(req);
    const courseDelete = await CourseForSale.destroy({
      where: { idCourseForSale: courseId, idProfile: user.idUser },
    });
    if (courseDelete === 0) {
      return res
        .status(404)
        .json({ error: "Course not found for the current user profile" });
    } else {
      res.send("courses deleted");
    }
    res.json(courseDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  postCreateCourseForSale,
  getCourseForSale,
  deleteCourseForSale,
  updateCourseForSale,
};

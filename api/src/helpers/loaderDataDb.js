const { category, users,cursos, generateCourseObjects, generatedCourses } = require("../constants/data");
const { conn } = require("../db");
const { Op } = require('sequelize');
const { Category, User ,Profile,CourseForSale} = require("../db");
const { encrypt } = require("./handleBcrypt");
const loaderCategory = async () => {
  const categoriesCount = await Category.count();
  if (categoriesCount === 0) {
    await Category.bulkCreate(category);
  }
};


const loaderUsers = async () => {
  let transaction;

  try {
    const usersCount = await User.count();
    if (usersCount === 0) {
      transaction = await conn.transaction();
      const userP = await Promise.all(users.map(async (user) => {
        const encryptedPassword = await encrypt(user.password);
        return { name: user.name, email: user.email, password: encryptedPassword };
      }));
      
      const createdUsers = await User.bulkCreate(userP, { transaction });

      const profilesData = createdUsers.map(user => ({
        userId: user.userId,
        name: user.name
      }));

      await Profile.bulkCreate(profilesData, { transaction });

      await transaction.commit();
    }
  } catch (error) {
    if (transaction) await transaction.rollback();
    console.error("Error loading users:", error);
  }
};

const loaderCourseForSale = async () => {
    const profileIds = await Profile.findAll({ attributes: ['profileId'] });
    const objGnerated= generateCourseObjects(cursos,20)
    const coursesToAdd = profileIds.flatMap(profile => {
      return objGnerated.map(cur => {
        
        return {
          name: cur.name,
          category: cur.category,
          duration: cur.duration,
          description: cur.description,
          images: cur.images,
          price: cur.price,
          idProfile: profile.profileId,
        };
      });
    });
  
    const courseCreate = await CourseForSale.bulkCreate(coursesToAdd, { returning: true });
  
    for (const course of courseCreate) {
      const categories = await Category.findAll({
        where: { name: course.category },
      });
  
      await course.addCategory(categories);
    }
  };
  

module.exports = {loaderCategory,loaderUsers,loaderCourseForSale};

const { Profile, User, CourseForSale,Course } = require("../db");
const getUserToken = require("../helpers/getUsertoken");
const data = require("../constants/data");
const getProfile = async (req, res) => {
  try {
    const user = await getUserToken(req);
    const userProfile = await Profile.findOne({
      where: { userId: user.idUser },
      include: {
        model: User,
        attributes: { exclude: ["password", "userId", "role"] },
      },
    });
    if (!userProfile) throw Error("User profile not found");
    res.send(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProfile };

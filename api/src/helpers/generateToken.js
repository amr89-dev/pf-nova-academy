const jwt = require("jsonwebtoken");


const { JWT_SECRET } = process.env;
const createtoken = async (user) => {
  return jwt.sign(
    {
      idUser: user.userId,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );
};
const verifyToken = async (token) => {
  try {
    return jwt.verify(token,JWT_SECRET);
  } catch (error) {
    throw Error(error.message)
  }
};
module.exports = { createtoken, verifyToken };

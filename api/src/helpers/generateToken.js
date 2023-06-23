const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const createtoken = async (user) => {
  return jwt.sign(
    {
      idUser: user.id,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "24h" }
  );
};
const verifyToken = async (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};
module.exports = { createtoken, verifyToken };

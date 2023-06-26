const { verifyToken } = require("../helpers/generateToken");
const { User } = require("../db");
const verificarRole = (role) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    const userData = await User.findByPk(tokenData.idUser);
    if (userData && [role].includes(userData.role)) next();
    else throw Error("User not authorized");
  } catch (error) {
    console.error("error", error);
    res.status(401).json({ error: error.message });
  }
};
module.exports = { verificarRole };

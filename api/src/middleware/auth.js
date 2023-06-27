const { verifyToken } = require("../helpers/generateToken");

const VerifyAuthorization = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const tokenData = await verifyToken(token);
    if (tokenData.idUser) next();
    else throw Error("token invalid");
  } catch (error) {
    res.status(403).json({ error: error.message });
  }
};
module.exports = VerifyAuthorization;

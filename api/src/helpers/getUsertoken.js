const { verifyToken } = require("./generateToken");

 const getUserToken= async(req)=>{
    const token = req.headers.authorization.split(" ").pop();
    const user = await verifyToken(token);
    return user
 }
 module.exports=getUserToken
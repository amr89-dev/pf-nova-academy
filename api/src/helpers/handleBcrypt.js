const bcrypt = require('bcryptjs')

//ENCRIPTAMOS
const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain, 10)
    return hash
}
//COMPARAMOS
const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword)
}
module.exports={encrypt,compare}
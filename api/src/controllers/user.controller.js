const { User,Profile } = require("../db");
const { createtoken } = require("../helpers/generateToken");
const { compare, encrypt } = require("../helpers/handleBcrypt");


const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const { name, email, password, role } = req.body;
    console.log(role)
    const user = await User.create({
      name,
      email,
      password: await encrypt(password),
      role,
    });
    
    const newPerfil = await Profile.create({
      userId: user.userId, // ID del usuario se guarda en la columna 'userId' de la tabla 'Perfil'
      name: user.name,
    });
    res.send('user created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
  }
};

const getLoginUser = async (req, res) => {
  const { email, password } = req.body; // Se extraen el correo electrónico y la contraseña del cuerpo de la solicitud
  try {
    console.log('-->',email)
    const user = await User.findOne({ where: { email: email } }); // Se busca en la base de datos un usuario con el correo electrónico proporcionado
    if (!user) throw Error("User not found"); // Si no se encuentra ningún usuario, se lanza un error
    const checkPassword = await compare(password, user.password); // Se compara la contraseña proporcionada con la contraseña almacenada en la base de datos
    const tokenSession = await createtoken(user); // Si la contraseña coincide, se crea un token de sesión
    if (checkPassword)
      res
        .status(200)
        .json(
          tokenSession
        ); // Se devuelve el token de sesión como respuesta con un estado 200
    else throw Error("Invalid password"); // Si la contraseña no coincide, se lanza un error
  } catch (error) {
  console.log(error.message)
    res.status(500).json({ error: error.message }); // Si ocurre algún error durante el proceso, se devuelve un estado 500 con un mensaje de error
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving users" });
  }
};

const getUserById = async (req, res) => {
  try {
    console.log("estoy aqui")
    const { userId } = req.params;
    console.log(userId);
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log('esty aqui dentro de  getUserByid');
    res.status(500).json({ error: "Error retrieving user" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const { name, email, password, role } = req.body;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.update({ name, email, password, role });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting user" });
  }
};

module.exports = {
  createUser,
  getLoginUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

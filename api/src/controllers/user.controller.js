const { encrypt } = require("../helpers/handleBcrypt");
const { User } = require("../models/user");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const user = await User.create({
      firstName,
      lastName,
      email,
      password:await encrypt(password),
      role,
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating user" });
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
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving user" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, password, role } = req.body;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.update({ firstName, lastName, email, password, role });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
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
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

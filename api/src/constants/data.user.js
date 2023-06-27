const { User } = require("../db"); // Asegúrate de importar el modelo de User

const user = [
  {
    userId: "1",
    name: "Juan Topo",
    email: "juantopo@hotmail.com",
    password: "juantoP0",
    role: "admin",
  },
  {
    userId: "2",
    name: "Daniel Paz",
    email: "danielpaz2233@gmail.com",
    password: "danielp4z",
    role: "admin",
  },
  {
    userId: "3",
    name: "Neider Bolivar",
    email: "neiderbolivar@gmail.com",
    password: "ne1derBolivar",
    role: "admin",
  },
  {
    userId: "4",
    name: "Oscar Lopez",
    email: "oscarlopez@gmail.com",
    password: "0sCarlopez",
    role: "user",
  },
  {
    userId: "5",
    name: "Lucas Sanchez",
    email: "sanchezlucas@yahoo.com",
    password: "lucas5ancheZ",
    role: "user",
  },
  {
    userId: "6",
    name: "María Rodríguez",
    email: "mariarodriguez@hotmail.com",
    password: "m@ria123",
    role: "user",
  },
  {
    userId: "7",
    name: "Carlos Ramirez",
    email: "carlosramirez@gmail.com",
    password: "ramirezC456",
    role: "user",
  },
  {
    userId: "8",
    name: "Ana Martinez",
    email: "anamartinez@yahoo.com",
    password: "anita2000",
    role: "user",
  },
  {
    userId: "9",
    name: "Juan Lopez",
    email: "juanlopez@gmail.com",
    password: "ju@n2021",
    role: "user",
  },
  {
    userId: "10",
    name: "Luisa Garcia",
    email: "luisagarcia@gmail.com",
    password: "garciaL123",
    role: "user",
  },
  {
    userId: "11",
    name: "Andrés Perez",
    email: "andresperez@yahoo.com",
    password: "perezA456",
    role: "user",
  },
  {
    userId: "12",
    name: "Laura Torres",
    email: "lauratorres@gmail.com",
    password: "l@ura123",
    role: "user",
  },
  {
    userId: "13",
    name: "Roberto Sanchez",
    email: "robertosanchez@yahoo.com",
    password: "sanchezR456",
    role: "user",
  },
  {
    userId: "14",
    name: "Sofia Gomez",
    email: "sofiagomez@gmail.com",
    password: "gomezS123",
    role: "user",
  },
];

// Función para crear usuarios en la base de datos
async function createUsers() {
  try {
    // Recorrer el arreglo de usuarios y crear cada uno en la base de datos
    user.forEach(async (userData) => {
      const { userId, name, email, password, role } = userData;
      await User.create({
        userId,
        name,
        email,
        password,
        role,
      });
    });

    console.log("Usuarios creados exitosamente en la base de datos.");
  } catch (error) {
    console.error("Error al crear los usuarios:", error);
  }
}

module.exports = createUsers
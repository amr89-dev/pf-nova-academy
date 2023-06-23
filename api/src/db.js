require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Category,
  Certificate,
  Course,
  Enrollment,
  Lesson,
  Module,
  Payment,
  ProgressLesson,
  Resource,
  Review,
  User,
} = sequelize.models;

// Relación entre Usuario y Curso (muchos a muchos)
User.belongsToMany(Course, { through: "userCourse", foreignKey: "userId" });
Course.belongsToMany(User, { through: "userCourse", foreignKey: "courseId" });
// relacion entre  progresslesson  y user de uno a  muchos
User.hasMany(ProgressLesson, { foreignKey: "userId" });
ProgressLesson.belongsTo(User, { foreignKey: "userId" });
// relacion entre curso y progressLesson uno a muchos
Course.hasMany(ProgressLesson, { foreignKey: "courseId" });
ProgressLesson.belongsTo(Course, { foreignKey: "courseId" });
// falta comentar
Lesson.hasMany(ProgressLesson, { foreignKey: "lessonId" });
ProgressLesson.belongsTo(Lesson, { foreignKey: "lessonId" });
//falta comentar
User.hasMany(Certificate, { foreignKey: "userId" });
Certificate.belongsTo(User, { foreignKey: "userId" });
//falta comentar
Lesson.hasMany(Review, { foreignKey: "lessonId" });
Review.belongsTo(Lesson, { foreignKey: "lessonId" });
//falta comentar
Course.hasMany(Module, { foreignKey: "courseId" });
Module.belongsTo(Course, { foreignKey: "courseId" });
//falta comentar
User.hasMany(Enrollment, { foreignKey: "userId" });
Enrollment.belongsTo(User, { foreignKey: "userId" });
//falta comentar
Course.hasMany(Enrollment, { foreignKey: "courseId" });
Enrollment.belongsTo(Course, { foreignKey: "courseId" });
//falta comentar
User.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(User, { foreignKey: "userId" });
//falta comentar
Course.hasMany(Payment, { foreignKey: "courseId" });
Payment.belongsTo(Course, { foreignKey: "courseId" });
//falta comentar
Module.hasMany(Lesson, { foreignKey: "moduleId" });
Lesson.belongsTo(Module, { foreignKey: "moduleId" });
//falta comentar
Lesson.belongsTo(Resource, { foreignKey: "resourceId" });
Resource.hasOne(Lesson, { foreignKey: "resourceId" });
//falta comentar
Course.hasMany(Category, { foreignKey: "courseId" });
Category.belongsTo(Course, { foreignKey: "courseId" });
// Relación entre Curso y Módulo (uno a muchos)

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

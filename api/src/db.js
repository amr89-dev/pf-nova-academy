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
  Lesson,
  Module,
  Payment,
  ProgressCourse,
  Resource,
  Review,
  User,
  Profile
} = sequelize.models;

// Relacion entre Usurio y Perfil (Uno a Uno)
User.hasOne(Profile , {foreignKey: 'userId', onDelete: 'CASCADE'});
Profile.belongsTo(User,{foreignKey: 'userId'});
// Relación entre Usuario y Curso (muchos a muchos)
Profile.belongsToMany(Course, { through: "profile_Course", foreignKey: "profileId" });
Course.belongsToMany(Profile, { through: "profile_Course", foreignKey: "courseId" });
// relacion entre  progresslesson  y Profile de uno a  muchos
Profile.hasMany(ProgressCourse, { foreignKey: "profileId" });
ProgressCourse.belongsTo(Profile, { foreignKey: "profileId" });
//falta comentar
Profile.hasMany(Certificate, { foreignKey: "profileId" });
Certificate.belongsTo(Profile, { foreignKey: "profileId" });
//falta comentar
Course.hasMany(Review, { foreignKey: "lessonId" });
Review.belongsTo(Course, { foreignKey: "lessonId" });
//falta comentar
Course.hasMany(Module, { foreignKey: "courseId"});
Module.belongsTo(Course, { foreignKey: "courseId" });
//falta comentar
Profile.hasMany(Payment, { foreignKey: "profileId" });
Payment.belongsTo(Profile, { foreignKey: "profileId" });
//falta comentar
Module.hasMany(Lesson, { foreignKey: "moduleId" });
Lesson.belongsTo(Module, { foreignKey: "moduleId" });
//falta comentar
Lesson.belongsTo(Resource, { foreignKey: "resourceId" });
Resource.hasOne(Lesson, { foreignKey: "resourceId" });
//falta comentar
Category.belongsToMany(Course, { through: "course_category", foreignKey: "courseId" });
Course.belongsToMany(Category, { through: "course_category", foreignKey: "categoryId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};

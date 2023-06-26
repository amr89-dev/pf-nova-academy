const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("courseBought", {
    idCourseBought: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

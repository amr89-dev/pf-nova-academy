const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Resource",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pdf: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      movies: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      exams: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "resource",
      timestamps: false,
    }
  );
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Enrollment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      start_date: {
        type: DataTypes.DATE,
      },
      end_date: {
        type: DataTypes.DATE,
      },
      course_score: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "Enrollment",
      timestamps: false,
    }
  );
};

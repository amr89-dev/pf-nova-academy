const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ProgressLesson",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      played_time: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "ProgressLesson",
      timestamps: false,
    }
  );
};

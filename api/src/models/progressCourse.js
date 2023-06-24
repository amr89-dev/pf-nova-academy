const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ProgressCourse",
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
      
      timestamps: false,
    }
  );
};

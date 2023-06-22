const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Module",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
      },
      description: {
        type: DataTypes.TEXT,
      },
      order: {
        type: DataTypes.INTEGER,
      },
    },
    {
 
      timestamps: false,
    }
  );
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Module",
    {
      id_module: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_course: {
        type: DataTypes.INTEGER,
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
      tableName: "Module",
      timestamps: false,
    }
  );
};

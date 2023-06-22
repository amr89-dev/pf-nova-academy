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
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
    
      timestamps: false,
    }
  );
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Module",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      orderDisplay: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

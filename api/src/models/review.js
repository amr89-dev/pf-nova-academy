const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      datePublication: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
};

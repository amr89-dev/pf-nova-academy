const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Enrollment",
    {
      dateResgistration: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      progress: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    { timestamps: false }
  );
};

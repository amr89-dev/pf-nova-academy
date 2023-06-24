const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Profile",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      }
    }, {
      tableName: 'Profile',
      timestamps: false
    }
  );
};
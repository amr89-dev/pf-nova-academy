const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Certificate",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      issuance_date: {
        type: DataTypes.DATE,
      },
    },
    {
     
      timestamps: false,
    }
  );
};

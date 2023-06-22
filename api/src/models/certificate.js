const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Certificate",
    {
      id_certificate: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      issuance_date: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Certificate",
      timestamps: false,
    }
  );
};

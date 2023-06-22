const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Payment",
    {
      id_payment: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
      },
      id_course: {
        type: DataTypes.INTEGER,
      },
      payment_date: {
        type: DataTypes.DATE,
      },
      payment_amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
      tableName: "Payment",
      timestamps: false,
    }
  );
};

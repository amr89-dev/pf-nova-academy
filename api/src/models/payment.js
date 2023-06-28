const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Payment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      payment_date: {
        type: DataTypes.DATE,
      },
      payment_amount: {
        type: DataTypes.DECIMAL(10, 2),
      },
    },
    {
  
      timestamps: false,
    }
  );
};

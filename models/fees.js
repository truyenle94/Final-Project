'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fees = sequelize.define('Fees', {
    name: DataTypes.STRING,
    fee: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
    paid: DataTypes.BOOLEAN
  }, {});
  Fees.associate = function(models) {
    // associations can be defined here
  };
  return Fees;
};
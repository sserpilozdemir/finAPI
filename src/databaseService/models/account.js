const { Sequelize } = require("sequelize");
const { sequelize } = require("../../utils/databaseConfig.js");

class Account extends Sequelize.Model {}

Account.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    accountOpening: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    accountId: {
      type: Sequelize.DECIMAL(11, 0),
      allowNull: false,
    },
    balance: {
      type: Sequelize.DECIMAL(15, 2),
      defaultValue: 10,
    },
    lastTransactionDate: {
      type: Sequelize.DATE,
    },
    type: {
      type: Sequelize.ENUM("client", "consultant"),
    },
  },
  {
    sequelize,
    modelName: "Account",
    freezeTableName: true,
    timeStamp: false,
  }
);

module.exports = {
  Account,
};

const { Sequelize } = require("sequelize");
const { sequelize } = require("../../utils/databaseConfig.js");

class History extends Sequelize.Model {}
History.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
      defaultValue: "bank charge",
    },
    entityType: {
      type: Sequelize.ENUM("deposit", "witdraw", "buy fund", "sell fund"),
      allowNull: false,
    },
    transactionDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "History",
    freezeTableName: true,
    timeStamp: false,
  }
);

module.exports = {
  History,
};

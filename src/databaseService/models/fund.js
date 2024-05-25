const { Sequelize } = require("sequelize");
const { sequelize } = require("../../utils/databaseConfig.js");

class Fund extends Sequelize.Model {}

Fund.init(
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    entitySym: {
      type: Sequelize.TEXT,
      defaultValue: "TBA",
    },
    lastValue: {
      type: Sequelize.DECIMAL(15, 2),
      allowNull: false,
    },
    tradingType: {
      type: Sequelize.TEXT,
      defaultValue: "Domestic Stock Market",
    },
  },
  {
    sequelize,
    modelName: "Fund",
    freezeTableName: true,
    timeStamp: false,
  }
);

module.exports = {
  Fund,
};

const { sequelize } = require("../utils/databaseConfig.js");
const { Account } = require("./models/account.js");
const { Fund } = require("./models/fund.js");
const { History } = require("./models/history.js");

Account.hasMany(Fund, { as: "Consultant", foreignKey: "ConsultantId" });
Fund.belongsTo(Account, { as: "Consultant" });

Account.hasMany(Fund, { as: "Client", foreignKey: "ClientId" });
Fund.belongsTo(Account, { as: "Client" });

Fund.hasMany(History);
History.belongsTo(Fund);

module.exports = {
  sequelize,
  Account,
  Fund,
  History,
};

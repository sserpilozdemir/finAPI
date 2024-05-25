// db queries for fetching updating data

const { Account, Fund, History } = require("../databaseService/index.js");

const fetchAllAccounts = async () => {
  const accounts = await Account.findAll({
    raw: true,
  });
  console.log("aa", accounts);
  return accounts;
};

const fetchAllFunds = async () => {
  const fetchAllFunds = await Fund.findAll({
    raw: true,
  });
  return fetchAllFunds;
};

const fetchAllHistory = async () => {
  const fetchHistory = await History.findAll({
    raw: true,
  });
  return fetchHistory;
};

module.exports = {
  fetchAllAccounts,
  fetchAllFunds,
  fetchAllHistory,
};

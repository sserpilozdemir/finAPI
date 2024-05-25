const { History } = require("../databaseService/index.js");
const fetchAllHistory = async () => {
  const fetchHistory = await History.findAll({
    raw: true,
  });
  return fetchHistory;
};

module.exports = {
  fetchAllHistory,
};

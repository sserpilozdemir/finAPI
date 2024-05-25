const { Fund } = require("../databaseService/index.js");

const getAllFunds = async (req) => {
  try {
    const fetchAllFunds = await Fund.findAll({
      raw: true,
    });
    return fetchAllFunds;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllFunds,
};

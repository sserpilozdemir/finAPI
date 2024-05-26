// const { Fund } = require("../databaseService/index.js");
const { getUuidByNumericId } = require("../utils/redisService.js");

const getAllFunds = async (req) => {

  const {Fund} = req.app.get('models');
  try {
    const fetchAllFunds = await Fund.findAll({
      raw: true,
    });
    return fetchAllFunds;
  } catch (err) {
    console.log(err);
  }
};

const fetchFundById = async (req) => {
  try{
    const {Fund} = req.app.get('models');
    const id = req.params.id;
    const uuid = await getUuidByNumericId(parseInt(id));
    
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllFunds,
  fetchFundById
};

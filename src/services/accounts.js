const { Account } = require("../databaseService/index.js");
const { getUuidByNumericId } = require("../utils/redisService.js");

const fetchUsersAccount = async () => {
  try {
    const allAccounts = await Account.findAll({
      raw: true,
    });
    return allAccounts;
  } catch (error) {
    throw error;
  }
};

const fetchUserById = async (req) => {
  try {
    const id = req.params.id;
    const uuid = await getUuidByNumericId(parseInt(id));
    const userById = await Account.findOne({
      where: { id: uuid },
    });
    return userById;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  fetchUsersAccount,
  fetchUserById,
};

const { Account } = require("../databaseService/index.js");

const getUsersAccount = async () => {
  try {
    console.log("I AM HREE111")
    const allAccounts = await Account.findAll({
      raw: true,
    });
    console.log("I ALSOO AM HREE111")

    console.log("acc", allAccounts);
    return allAccounts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUsersAccount,
};

const { AppError } = require("../AppError.js");
const { INVALID_DATA } = require("../constants/errorCodes.js");
const { getUsersAccount } = require("../services/accounts.js");
const { tryCatch } = require("../utils/tryCatch.js");

const getUsers = tryCatch(async (req, res) => {
  const users = await getUsersAccount();
  if (!users) {
    throw new AppError(INVALID_DATA, "There is no data", 400);
  }
  return res.status(200).json(users);
});

module.exports = {
  getUsers,
};

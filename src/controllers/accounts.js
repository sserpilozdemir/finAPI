const { AppError } = require("../AppError.js");
const { INVALID_DATA } = require("../constants/errorCodes.js");
const { fetchUsersAccount, fetchUserById } = require("../services/accounts.js");
const { tryCatch } = require("../utils/tryCatch.js");

const getUsers = tryCatch(async (req, res) => {
  const users = await fetchUsersAccount();
  if (!users) {
    throw new AppError(INVALID_DATA, "There is no data", 400);
  }
  return res.status(200).json(users);
});


const getUserById = tryCatch(async (req, res) => {
  const user = await fetchUserById(req);
  if (!user) {
    throw new AppError(INVALID_DATA, "There is no data", 400);
  }
  return res.status(200).json(user);
});

module.exports = {
  getUsers,
  getUserById,
};

const { getAllFunds } = require("../services/funds.js");

const { AppError } = require("../AppError.js");
const { INVALID_DATA } = require("../constants/errorCodes.js");
const { tryCatch } = require("../utils/tryCatch.js");


const getFunds = tryCatch(async (req, res) => {
  const funds = await getAllFunds();
  if (!funds) {
    throw new AppError(INVALID_DATA, "There is no data", 400);
  }
  return res.status(200).json(funds);
});
module.exports = {
  getFunds,
};

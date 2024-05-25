const { AppError } = require("../AppError.js");
const { fetchAllHistory } = require("../services/history.js");
const { tryCatch } = require("../utils/tryCatch.js");
const { ACCOUNT_LOCKED } = require("../constants/errorCodes.js");

const getAllHistory = tryCatch(async (req, res) => {
  const allHistoryRecord = await fetchAllHistory();
  if (!allHistoryRecord) {
    throw new AppError(ACCOUNT_LOCKED, "There is no records here!", 400);
  }
  return res.status(200).json(allHistoryRecord);
});

module.exports = {
  getAllHistory,
};

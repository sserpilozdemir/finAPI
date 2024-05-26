const Redis = require("ioredis");
const redis = new Redis();
const { fetchUsersAccount } = require("../services/accounts.js");

const setNumericIdToUuid = (numericId, uuid) => {
  return redis.set(`numeric_id:${numericId}`, uuid);
};

const getUuidByNumericId = async (numericId) => {
  console.log("ASDFGHJ")
  return await redis.get(numericId);
};

const importData = async () => {
  try {
    const accounts = await fetchUsersAccount();
    let x = 1;
    for (const item of accounts) {
      await redis.set(x, item.id);
      x = x + 1;
    }
    console.log("Data imported successfully to Redis.");
  } catch (error) {
    console.error("Failed to import data:", error);
  }
};

module.exports = {
  importData,
  setNumericIdToUuid,
  getUuidByNumericId,
};

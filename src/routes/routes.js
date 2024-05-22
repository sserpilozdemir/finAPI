const express = require("express");
const router = express.Router();

const { getUsers } = require("../controllers/accounts.js");
const { getFunds } = require("../controllers/funds.js");

const { getAllHistory } = require("../controllers/history.js");

router.get("/funds", getFunds);
router.get("/accounts", getUsers);
router.get("/history/records", getAllHistory);
router.get("/serpil", (req, res) => {
  res.send("hihihihihi");
});

module.exports = {
  router,
};

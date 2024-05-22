require("dotenv").config();
const { errorHandler } = require("./src/middleware/errorHandler.js");

const express = require("express");
const cors = require("cors");
const { sequelize } = require("./src/databaseService/index.js");
const app = express();
const { router } = require("./src/routes/routes.js");
const { logger } = require("./src/utils/logger.js");
const environment = process.env || "development";

app.set("sequelize", sequelize);
app.set("models", sequelize.models);

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(errorHandler);

const port = process.env.PORT || 9119;
app.listen(port, () => {
  logger.info(`NAMESPACE:  ${environment.NAMESPACE} started on port ${port} in ${environment.NODE_ENV} mode log level: ${environment.LOG_TYPE}`);
});

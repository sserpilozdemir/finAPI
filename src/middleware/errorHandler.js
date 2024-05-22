const { AppError } = require("../AppError");

const errorHandler = (error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong";

  if (error instanceof AppError) {
    return res.status(status).json({
      error: {
        message,
        status,
        errorCode: error.errorCode,
      },
    });
  }
  res.status(status).json({
    error: {
      message,
      status,
      ...error(
        process.env.NODE_ENV === "development" ? error.stack : undefined
      ),
    },
  });
};

module.exports = {
  errorHandler,
};

const errorMiddleware = (error, req, res, next) => {
  console.error(error);
  const errorMessage = error.message || "Backend error";
  const status = error.status || 500;
  const extraDetails = error.extraDetails || null;
  res.status(status).json({ message: errorMessage, extraDetails });
};

module.exports = { errorMiddleware };

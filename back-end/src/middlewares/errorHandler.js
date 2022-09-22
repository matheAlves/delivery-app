const httpStatus = {
  'Invalid email or password': 404,
};

const errorHandler = (error, _req, res, _next) => {
  const { message } = error;

  const errorStatus = httpStatus[message];

  if (!errorStatus) {
    return res.status(500).json({ message });
  }
  return res.status(errorStatus).json({ message });
};

module.exports = errorHandler;

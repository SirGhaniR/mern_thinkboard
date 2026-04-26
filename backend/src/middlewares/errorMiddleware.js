const errorMiddleware = (err, req, res, next) => {
  try {
    console.error(err);

    const success = false;
    let statusCode = err.statusCode || 500;

    let message = err.message || "Internal server error";

    res.status(statusCode).json({
      error: {
        success,
        message,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;

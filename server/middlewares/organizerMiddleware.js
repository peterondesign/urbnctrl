const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
require("dotenv").config();
const AppError = require("../utilis/AppError");
const db = require("../models");

const organizerMiddleware = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError("Authentication token missing.", 401);
  }

  const token = authHeader.split(" ")[1];

  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.JWT_KEY);
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new AppError("Token expired", 401);
    } else if (error.name === "JsonWebTokenError") {
      throw new AppError("Invalid token", 401);
    } else {
      throw new AppError("Authentication failed", 401);
    }
  }

  const organizer = await db.Events.findOne({
    where: { password: decodedToken.code },
  });

  if (!organizer) {
    throw new AppError("Event not found", 403);
  }
  req.organizer = { code: decodedToken.code };

  next();
});

module.exports = organizerMiddleware;

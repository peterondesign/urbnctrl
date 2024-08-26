const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
require("dotenv").config();
const AppError = require("../utilis/AppError");
const db = require("../models");

const adminMiddleware = (allowedRoles = []) => {
  return asyncHandler(async (req, res, next) => {
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

    const admin = await db.Admins.findOne({
      where: { id: decodedToken.id },
    });

    if (!admin) {
      throw new AppError("Admin not found", 403);
    }

    const hasRole =
      allowedRoles.length === 0 ||
      allowedRoles.includes(admin.role.toLowerCase());

    if (!hasRole) {
      throw new AppError("Forbidden: Insufficient permissions", 403);
    }

    req.admin = admin;
    next();
  });
};

module.exports = adminMiddleware;

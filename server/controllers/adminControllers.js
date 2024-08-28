const db = require("../models");
const asyncHandler = require("express-async-handler");
const AppError = require("../utilis/AppError");
const { checkPassword, hashPassword } = require("../utilis/hashPassword");
const { generateToken } = require("../utilis/tokenGen");
const paginateSearch = require("../utilis/paginateSearch");
const { Op } = require("sequelize");

exports.Login = asyncHandler(async (req, res) => {
  const data = req.data;
  const { email, password } = data;

  const admin = await db.Admins.findOne({ where: { email } });
  if (!admin) {
    throw new AppError("Admin not found.", 404);
  }

  if (!(await checkPassword(password, admin.password))) {
    throw new AppError("Incorrect password.", 401);
  }
  const token = generateToken({ id: admin.id, email });

  res.status(200).send({
    status: "success",
    message: "Login was successful",
    token,
  });
});

exports.setup = asyncHandler(async (req, res) => {
  const data = req.data;
  const superAdminExists = await db.Admins.findOne({
    where: { role: "super" },
  });

  if (superAdminExists) {
    throw new AppError("You can not perform this action.", 400);
  }

  data.password = await hashPassword(data.password);

  await db.sequelize.transaction(async (t) => {
    await db.Admins.create(
      { ...data, role: "super", name: "Owner" },
      { transaction: t }
    );
    res.status(200).send({
      status: "success",
      message: "Super Admin was created.",
    });
  });
});

exports.createAdmin = asyncHandler(async (req, res) => {
  const data = req.data;

  if (data.role === "super") {
    const superAdminExists = await db.Admins.findOne({
      where: { role: "super" },
    });
    if (superAdminExists) {
      throw new AppError("You can only have one super admin.", 400);
    }
  }

  const admin = await db.Admins.findOne({
    where: { email: data.email },
  });

  if (admin) {
    throw new AppError("Admin already exist.", 400);
  }

  data.password = await hashPassword(data.password);

  await db.sequelize.transaction(async (t) => {
    await db.Admins.create(data, { transaction: t });
    res.status(200).send({
      status: "success",
      message: "Admin was created.",
    });
  });
});

exports.updateAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = req.data;

  const admin = await db.Admins.findOne({ where: { id } });
  if (!admin) {
    throw new AppError("Admin not found.", 404);
  }
  if (data.password) {
    data.password = await hashPassword(data.password);
  } else {
    data.password = undefined;
  }

  await db.sequelize.transaction(async (t) => {
    await db.Admins.update(data, {
      where: {
        id,
      },
      transaction: t,
    });
    res.status(200).send({
      status: "success",
      message: "Admin was updated.",
    });
  });
});

exports.deleteAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const admin = await db.Admins.findOne({ where: { id } });
  if (!admin) {
    throw new AppError("Admin not found.", 404);
  }

  await db.sequelize.transaction(async (t) => {
    await db.Admins.destroy({
      where: {
        id,
      },
      transaction: t,
    });
    res.status(200).send({
      status: "success",
      message: "Admin was deleted.",
    });
  });
});

exports.getAllAdmins = asyncHandler(async (req, res) => {
  const results = await paginateSearch(
    db.Admins,
    ["paginate"],
    {
      [Op.or]: [{ role: "events" }, { role: "blog" }],
    },
    {
      exclude: ["password"],
    },
    req.query
  );

  res.status(200).send({
    status: "success",
    results,
  });
});

exports.getAdmin = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const admin = await db.Admins.findOne({
    where: { id },
    attributes: { exclude: ["password"] },
  });

  if (!admin || admin.role === "super") {
    throw new AppError("Admin not found.", 404);
  }
  res.status(200).send({
    status: "success",
    results: admin,
  });
});

exports.getMe = asyncHandler(async (req, res) => {
  const { id } = req.admin;
  const admin = await db.Admins.findOne({
    attributes: {
      exclude: ["password"],
    },
    where: { id },
  });
  if (!admin) {
    throw new AppError("Admin not found.", 404);
  }
  res.status(200).send({
    status: "success",
    results: admin,
  });
});

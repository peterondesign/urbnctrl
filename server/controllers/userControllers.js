const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Users } = require("../models");

const signup = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json("please input missing field(s)");
  }
  const userExist = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (userExist) {
    res.status(400).json("email already in use");
  }
  //hashing password

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const saved = await Users.create({ email: email, password: hashPassword });
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const login = async (req, res) => {
  const { password, email } = req.body;
  if (!email || !password) {
    res.status(400).json("please input missing field(s)");
  }
  const existingUser = await Users.findOne({
    where: {
      email: email,
    },
  });

  if (!existingUser) {
    res.status(400).json("incorrect email or password");
  }
  //COMPARE PASSWORD
  try {
    const correct = await bcrypt.compare(
      req.body.password,
      existingUser.password,
    );
    const { email, id, isAdmin, ...others } = existingUser;

    const userInfo = {
      isAdmin: existingUser.isAdmin,
      email: existingUser.email,
    };
    correct
      ? res
          .status(200)
          .json({ email, id, isAdmin, token: generateTRoken(userInfo) })
      : res.status(400).json("incorrect password");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const generateTRoken = (uservalue) => {
  return jwt.sign(
    { email: uservalue.email, isAdmin: uservalue.isAdmin },
    process.env.JWT_KEY,
    { expiresIn: "3d" },
  );
};

module.exports = {
  login,
  signup,
};

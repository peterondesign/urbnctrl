const Joi = require("joi");
const AppError = require("../utilis/AppError");

const options = {
  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format.",
    "string.empty": "Email is required.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
  }),
  unpassowrd: Joi.string(),
  name: Joi.string().required().messages({
    "string.empty": "Name is required.",
  }),
  role: Joi.string()
    .required()
    .valid("events", "blog")
    .messages({
      "any.only": `Role must be one of ${["events", "blog"].join(", ")}.`,
      "any.required": "Role is required.",
    }),
  code: Joi.string().required().messages({
    "any.required": "Code is required.",
  }),
  ticketCode: Joi.string().required().messages({
    "any.required": "ticket code is required.",
  }),
};

const handler = (data, req, next) => {
  if (data) {
    const schema = Joi.object(data);
    const { body } = req;
    const { error, value } = schema.validate(body);

    if (error) {
      throw new AppError(error.details[0].message, 400);
    }

    req.data = value;
    next();
  }
};

exports.emailPassword = (req, res, next) => {
  handler(
    {
      email: options.email,
      password: options.password,
    },
    req,
    next
  );
};

exports.adminBody = (req, res, next) => {
  handler(
    {
      email: options.email,
      password: options.password,
      name: options.name,
      role: options.role,
    },
    req,
    next
  );
};

exports.adminBodyUnPassword = (req, res, next) => {
  handler(
    {
      email: options.email,
      password: options.unpassowrd,
      name: options.name,
      role: options.role,
    },
    req,
    next
  );
};

exports.code = (req, res, next) => {
  handler(
    {
      code: options.code,
    },
    req,
    next
  );
};

exports.ticketCode = (req, res, next) => {
  handler(
    {
      ticketCode: options.ticketCode,
    },
    req,
    next
  );
};

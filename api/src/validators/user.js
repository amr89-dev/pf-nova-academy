const { check } = require("express-validator");
const validateResult = require("../helpers/validateResult");
const validateCreateuser = [
  check("name").exists().not().isEmpty().withMessage("the name is required"),
  check("email")
    .exists()
    .not()
    .isEmpty()
    .withMessage("the email is required")
    .isEmail(),
  check("password")
    .exists()
    .not()
    .isEmpty()
    .withMessage("the password is required")
    .isLength({ min: 8 })
    .withMessage("the password must have at least 8 characters")
    .matches(/\d/)
    .withMessage("the password must contain at least one number")
    .matches(/[A-Z]/)
    .withMessage("the password must contain at least one uppercase letter"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateLoginUser = [
  check("email")
    .exists()
    .not()
    .isEmpty()
    .withMessage("the email is required")
    .isEmail(),
  check("password")
    .exists()
    .not()
    .isEmpty()
    .withMessage("the password is required")
    .isLength({ min: 8 })
    .withMessage("the password must have at least 8 characters")
    .matches(/\d/)
    .withMessage("the password must contain at least one number")
    .matches(/[A-Z]/)
    .withMessage("the password must contain at least one uppercase letter"),
    (req, res, next) => {
      validateResult(req, res, next);
    },
];

module.exports = {validateCreateuser,validateLoginUser};

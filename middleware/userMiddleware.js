const { errorResponseBadRequest } = require("../helpers/apiResponse");

const simpleMiddleware = (req, res, next) => {
  console.log("Im middleware");
  next();
};

const isValidInputs = (req, res, next) => {
  try {
    const { firstName, lastName, email, password, mobile } = req.body;
    const parseString = JSON.stringify(req.body);
    const parsedData = JSON.parse(parseString);
    if (
      (!firstName ||
        firstName.length == 0 ||
        !lastName ||
        lastName.length == 0 ||
        !email ||
        email.length == 0 ||
        !password ||
        password.length == 0,
      !mobile || mobile.length === 0)
    ) {
      return errorResponseBadRequest(res, "Missing one or more parameter");
    }
    return next();
  } catch (error) {
    throw error;
  }
};
module.exports = {
  simpleMiddleware,
  isValidInputs,
};

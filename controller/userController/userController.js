const fs = require("fs");

const {
  errorResponseBadRequest,
  errorResponseNoData,
  successResponseNoData,
} = require("../../helpers/apiResponse");
const User = require("../../schema/userSchema");
const { createUser } = require("../../model/UserModel");

async function signUpController(req, res, next) {
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
      errorResponseBadRequest(res, "Missing one or more parameter");
    }
    const user = await createUser({
      ...parsedData,
      profileImage: req?.file ? req?.file?.filename : "",
    });
    return successResponseNoData(res, "User created successfully");
  } catch (error) {
    // Handle file cleanup if req.file exists
    if (req.file && req.file.path) {
      // remove the file path from local if any error occurs while user creation
      fs.unlinkSync(req.file.path);
    }
    return errorResponseNoData(res, error?.message);
  }
}
const loginController = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("user", user);
    if (!user) {
      return errorResponseNoData(res, "User not found");
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return errorResponseNoData(res, "Please check email or password");
    }
    return successResponseNoData(res, "Success");
  } catch (error) {
    return errorResponseNoData(res, error?.message);
  }
};
module.exports = {
  signUpController,
  loginController,
};

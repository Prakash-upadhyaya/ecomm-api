import express from "express";
import fs from "fs";
import upload from "../../middleware/fileUpload.js";
import {
  errorResponseBadRequest,
  errorResponseNoData,
  successResponseNoData,
} from "../../helpers/apiResponse.js";
import User from "../../schema/userSchema.js";

const userRouter = express.Router();

userRouter.post("/signup", upload.single("file"), async (req, res, next) => {
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
    await User.create({
      firstName: parsedData?.firstName,
      lastName: parsedData?.lastName,
      email: parsedData?.email,
      password: parsedData?.password,
      profileImage: req?.file.filename,
      mobile: parsedData?.mobile,
    });
    return successResponseNoData(res, "User created successfully");
  } catch (error) {
    fs.unlinkSync(req?.file.path); // remove the file path from local if any error occurs while user creation
    return errorResponseNoData(res, error?.message);
  }
});

userRouter.post("/login", async (req, res) => {
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
});

export default userRouter;

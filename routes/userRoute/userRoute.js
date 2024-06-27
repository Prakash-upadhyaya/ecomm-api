const express = require("express");
const upload = require("../../middleware/fileUpload.js");
const {
  signUpController,
  loginController,
} = require("../../controller/userController/userController.js");
const {
  isValidInputs,
  simpleMiddleware,
} = require("../../middleware/userMiddleware.js");

const userRouter = express.Router();

userRouter.post(
  "/signup",
  isValidInputs,
  upload.single("file"),
  signUpController
);

userRouter.post("/login", simpleMiddleware, loginController);

module.exports = userRouter;

const express = require("express");
const upload = require("../../middleware/fileUpload.js");
const {
  signUpController,
  loginController,
} = require("../../controller/userController/userController.js");
const { simpleMiddleware } = require("../../middleware/userCheck.js");

const userRouter = express.Router();

userRouter.post("/signup", upload.single("file"), signUpController);

userRouter.post("/login", simpleMiddleware, loginController);

module.exports = userRouter;

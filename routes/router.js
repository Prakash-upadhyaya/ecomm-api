const express = require("express");

const userRouter = require("./userRoute/userRoute.js");
const router = express();

router.use("/user", userRouter);

module.exports = router;

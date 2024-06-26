import express from "express";
import userRouter from "./userRoute/userRoute.js";
const router = express();

router.use("/user", userRouter);

export default router;

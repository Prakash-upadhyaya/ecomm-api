import express from "express";
import router from "./routes/router.js";
import connectToDB from "./db/config.js";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8080;
connectToDB();

app.use(express.json());
app.use("/images", express.static("temp/profile"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(
    `********************* SERVER RUNNING on PORT ${PORT}*******************`
  );
});

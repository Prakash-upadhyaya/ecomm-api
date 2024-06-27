const express = require("express");
const router = require("./routes/router.js");
const connectToDB = require("./db/config.js");
require("dotenv/config");

const app = express();
const PORT = process.env.PORT || 8080;
connectToDB();

app.use(express.json());
app.use("/images/profile", express.static("temp/profile"));
app.use("/", router);

app.listen(PORT, () => {
  console.log(
    `********************* SERVER RUNNING on PORT ${PORT}*******************`
  );
});

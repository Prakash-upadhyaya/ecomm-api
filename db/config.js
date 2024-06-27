const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Connected"))
      .catch((err) => console.log("Error while connect to db", err?.message));
  } catch (error) {
    console.log("Error while connect to db", error?.message);
  }
};

module.exports = connectToDB;

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const mainRoute = require("./routes/index.js");
const port = 5000;

dotenv.config();

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Couldn't connect to MongoDB");
  }
};

app.use("/api", mainRoute);

app.listen(port, () => {
  connectDatabase();
  console.log(`Server listening on ${port}`);
});

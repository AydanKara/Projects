const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("../routes/index.js");

dotenv.config();

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Couldn't connect to MongoDB", error);
    throw new Error("Couldn't connect to MongoDB");
  }
};

const app = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api", mainRoute);

connectDatabase();

module.exports = app;
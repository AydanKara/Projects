const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories.js");
const productsRoute = require("./products.js");
const authRoute = require("./auth.js");

router.use("/categories", categoryRoute);
router.use("/products", productsRoute);
router.use("/auth", authRoute);

module.exports = router;

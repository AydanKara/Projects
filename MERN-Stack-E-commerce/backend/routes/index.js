const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories.js");
const productsRoute = require("./products.js");

router.use("/categories", categoryRoute);
router.use("/products", productsRoute);

module.exports = router;

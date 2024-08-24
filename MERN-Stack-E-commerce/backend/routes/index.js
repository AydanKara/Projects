const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories.js");
const productsRoute = require("./products.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupons.js");

router.use("/categories", categoryRoute);
router.use("/products", productsRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);

module.exports = router;

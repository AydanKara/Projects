const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories.js");
const productsRoute = require("./products.js");
const authRoute = require("./auth.js");
const couponRoute = require("./coupons.js");
const userRoute = require("./users.js");
const paymentRoute = require("./payment.js");

router.use("/categories", categoryRoute);
router.use("/products", productsRoute);
router.use("/auth", authRoute);
router.use("/coupons", couponRoute);
router.use("/users", userRoute);
router.use("/payment", paymentRoute);

module.exports = router;

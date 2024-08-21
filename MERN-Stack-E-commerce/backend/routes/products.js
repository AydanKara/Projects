const express = require("express");
const router = express.Router();

// Read - All
router.get("", async (req, res) => {
  res.send("Get All Products");
});

module.exports = router;

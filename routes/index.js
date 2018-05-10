const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  res.json({
    msg: "Will be used for authentication later."
  });
});

module.exports = router;
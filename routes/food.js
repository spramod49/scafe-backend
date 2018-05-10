const express = require("express");
const router = express.Router();
const Food = require("../models/food");

router.get("/", async (req, res) => {
  let foodList = await Food.find({});
  res.json(foodList);
});

router.post("/", async (req, res) => {
  let {
    body
  } = req;
  let newFood = new Food(body);
  try {
    let createdFood = await newFood.save();
    res.json(createdFood);
  } catch (err) {
    res.send(400, "Internal error")
  }
});

router.put("/:id", async (req, res) => {
  let {
    body
  } = req;
  let updatedFood = await Food.findByIdAndUpdate(req.params.id, body);
  res.json(updatedFood);
})
module.exports = router;
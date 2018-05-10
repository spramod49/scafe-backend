const express = require("express");
const router = express.Router();
const Rating = require("../models/rating");
const Food = require("../models/food");
//food id
router.get("/:id", async (req, res) => {
  let foodRatings = await Rating.find({
    food: req.params.id
  });
  res.json(foodRatings);
});

//pass id of user for now. Later the end point will be changed to only /user
router.get("/user/:id", async (req, res) => {
  let userRatings = await Rating.find({
    user: req.params.id
  });
  res.json(userRatings);
});

//pass the id of the user, pass food ID in the body. Later we will pass only food id in end point directly.
router.post("/:id", async (req, res) => {
  let {
    body
  } = req;
  body.user = req.params.id;
  let newRating = new Rating(body);
  try {
    let createdRating = await newRating.save();
    let updatedFood = await Food.findByIdAndUpdate(body.food, {
      $push: {
        customerRatings: createdRating._id
      }
    });
    res.json(createdRating);
  } catch (err) {
    res.send(400, 'Internal error');
  }
});

//pass rating id to be modified.
router.put("/:id", async (req, res) => {
  let {
    body
  } = req;
  try {
    let updatedFood = await Food.findByIdAndUpdate(req.params.id, body);
    res.json(updatedFood);
  } catch (err) {
    res.send(400, 'Internal error');
  }
});

module.exports = router;
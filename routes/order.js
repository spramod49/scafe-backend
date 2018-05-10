const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Food = require("../models/food");
const mongoose = require("mongoose");
router.get("/", async (req, res) => {
  let orders = await Order.find({});
  res.json(orders);
});

router.get("/:id", async (req, res) => {
  let userOrder = await Order.find({
    user: req.params.id
  });
  res.json(userOrder);
});


//user id
router.post("/:id", async (req, res) => {
  let {
    body
  } = req;
  let cost = 0;
  body.user = req.params.id;
  body.orderRating = 5;
  body.approvalStatus = "PENDING";
  body.orderPending = true;
  let foodItems = [];
  body.food.forEach(foodItem => {
    foodItems.push(mongoose.Types.ObjectId(foodItem));
  });
  try {
    foodItems = await Food.find({
      '_id': {
        $in: foodItems
      }
    });
  } catch (err) {
    res.send(400, "Internal error")
  }

  foodItems.forEach(foodItem => {
    cost += foodItem.cost;
  })

  body.cost = cost;

  let newOrder = new Order(body);
  try {
    let createdOrder = await newOrder.save();
    res.json(createdOrder);
  } catch (err) {
    res.send(400, "Internal error")
  }

});

//order id
router.put("/:id", async (req, res) => {
  let {
    body
  } = req;
  let updatedOrder = await Order.findByIdAndUpdate(req.params.id, body);
  res.json(updatedOrder);
});

module.exports = router;
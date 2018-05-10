const mongoose = require("mongoose");

const RatingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  food: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food"
  },
  value: Number
});

module.exports = mongoose.model("Rating", RatingSchema);
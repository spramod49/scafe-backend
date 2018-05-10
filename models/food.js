const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: String,
  cost: Number,
  customerRatings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating"
  }]
}, {
  collection: 'food'
});

module.exports = mongoose.model("Food", foodSchema);
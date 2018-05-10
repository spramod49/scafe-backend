const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  food: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food"
  }],
  cost: Number,
  approvalStatus: String,
  orderRating: Number,
  orderPending: Boolean
});

module.exports = mongoose.model("Order", orderSchema);
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index");
const orderRoutes = require("./routes/order");
const ratingRoutes = require("./routes/rating");
const foodRoutes = require("./routes/food");
const methodOverride = require("method-override");
const app = express();

mongoose.connect("mongodb://localhost/scafe");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use("/", indexRoutes);
app.use("/order", orderRoutes);
app.use("/rating", ratingRoutes);
app.use("/food", foodRoutes);

app.listen(3000, () => console.log("scafe app listening on port 3000!"));
const mongoose = require("mongoose");
const Food = require("./models/food");
const Order = require("./models/order");
const Rating = require("./models/rating");

let orderData = [{
    "user": "5af33971de89971d6834461e",
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "approvalStatus": false,
    "pendingOrder": false,
    "orderCost": 35
  },
  {
    "user": "5af33971de89971d6834461e",
    "food": ["5af33bb9de89971d68344626", "5af33b5ede89971d68344622"],
    "approvalStatus": true,
    "pendingOrder": true,
    "orderCost": 55
  },
  {
    "user": "5af33971de89971d6834461e",
    "food": ["5af33b5ede89971d68344622", "5af33bddde89971d68344627"],
    "approvalStatus": true,
    "pendingOrder": true,
    "orderCost": 50
  },
  {
    "user": "5af33971de89971d6834461e",
    "food": ["5af33b5ede89971d68344622", "5af33c0bde89971d68344628"],
    "approvalStatus": true,
    "pendingOrder": true,
    "orderCost": 60
  },
  {
    "user": "5af33971de89971d6834461e",
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "approvalStatus": true,
    "pendingOrder": false,
    "orderCost": 35
  },
  {
    "user": "5af33a5ade89971d6834461f",
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "approvalStatus": true,
    "pendingOrder": false,
    "orderCost": 35
  },
  {
    "user": "5af33a5ade89971d6834461f",
    "food": ["5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "approvalStatus": true,
    "pendingOrder": false,
    "orderCost": 40
  },
  {
    "user": "5af33a5ade89971d6834461f",
    "food": ["5af33bb9de89971d68344626", "5af33c0bde89971d68344628"],
    "approvalStatus": false,
    "pendingOrder": false,
    "orderCost": 45
  },
  {
    "user": "5af33a5ade89971d6834461f",
    "food": ["5af33bb9de89971d68344626", "5af33c0bde89971d68344628"],
    "approvalStatus": true,
    "pendingOrder": false,
    "orderCost": 45
  },
  {
    "user": "5af33a5ade89971d6834461f",
    "food": ["5af33bb9de89971d68344626", "5af33b5ede89971d68344622"],
    "approvalStatus": true,
    "pendingOrder": true,
    "orderCost": 55
  },
  {
    "user": "5af33a89de89971d68344620",
    "food": ["5af33b5ede89971d68344622", "5af33bddde89971d68344627"],
    "approvalStatus": true,
    "pendingOrder": false,
    "orderCost": 50
  },
  {
    "user": "5af33a89de89971d68344620",
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "approvalStatus": true,
    "pendingOrder": false,
    "orderCost": 35
  }
];

let ratingData = [{

    "user": "5af33971de89971d6834461e",
    "food": "5af33bb9de89971d68344626",
    "value": 5
  }, {

    "user": "5af33971de89971d6834461e",
    "food": "5af33b5ede89971d68344622",
    "value": 4
  }, {

    "user": "5af33971de89971d6834461e",
    "food": "5af33bddde89971d68344627",
    "value": 5
  }, {

    "user": "5af33971de89971d6834461e",
    "food": "5af33c0bde89971d68344628",
    "value": 2
  }, {

    "user": "5af33971de89971d6834461e",
    "food": "5af33b5ede89971d68344622",
    "value": 5
  }, {

    "user": "5af33a5ade89971d6834461f",
    "food": "5af33b5ede89971d68344622",
    "value": 1
  }, {

    "user": "5af33a5ade89971d6834461f",
    "food": "5af33bddde89971d68344627",
    "value": 5
  }, {

    "user": "5af33a5ade89971d6834461f",
    "food": "5af33c0bde89971d68344628",
    "value": 3
  },
  {

    "user": "5af33a5ade89971d6834461f",
    "food": "5af33bb9de89971d68344626",
    "value": 5
  },
  {

    "user": "5af33a5ade89971d6834461f",
    "food": "5af33b5ede89971d68344622",
    "value": 4
  },
  {

    "user": "5af33a89de89971d68344620",
    "food": "5af33bb9de89971d68344626",
    "value": 5
  },
  {

    "user": "5af33a89de89971d68344620",
    "food": "5af33c0bde89971d68344628",
    "value": 2
  },
  {

    "user": "5af33a89de89971d68344620",
    "food": "5af33bddde89971d68344627",
    "value": 1
  },
  {

    "user": "5af33a89de89971d68344620",
    "food": "5af33b5ede89971d68344622",
    "value": 5
  },
  {

    "user": "5af33a89de89971d68344620",
    "food": "5af33b5ede89971d68344622",
    "value": 4
  },
  {

    "user": "5af33971de89971d6834461e",
    "food": "5af33b5ede89971d68344622",
    "value": 5
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33bb9de89971d68344626",
    "value": 3
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33b5ede89971d68344622",
    "value": 5
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33b5ede89971d68344622",
    "value": 1
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33bddde89971d68344627",
    "value": 5
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33b5ede89971d68344622",
    "value": 5
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33b5ede89971d68344622",
    "value": 4
  },
  {

    "user": "5af33ad0de89971d68344621",
    "food": "5af33b5ede89971d68344622",
    "value": 5
  },
  {

    "user": "5af33a89de89971d68344620",
    "food": "5af33b5ede89971d68344622",
    "value": 4
  }
];


mongoose.connect("mongodb://localhost/scafe");

Order.insertMany(orderData)
  .then(docs => console.log(docs))
  .catch(err => console.log(err));

Rating.insertMany(ratingData)
  .then(docs => console.log(docs))
  .catch(err => console.log(err));
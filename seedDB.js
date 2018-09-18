const mongoose = require("mongoose");
const Food = require("./models/food");
const Order = require("./models/order");
const Rating = require("./models/rating");
const User = require("./models/user");



let orderData = [{
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33971de89971d6834461e",
    "cost": 60,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },
  {
    "food": ["5af33b5ede89971d68344622", "5af33bddde89971d68344627", "5af44d1448bac621d816f39b "],
    "user": "5af33ad0de89971d68344621",
    "cost": 75,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },
  {
    "food": ["5af44d1448bac621d816f39b ", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33971de89971d6834461e",
    "cost": 65,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 3
  },
  {
    "food": ["5af33bb9de89971d68344627", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33ad0de89971d68344621",
    "cost": 55,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },

  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344626", "5af33b5ede89971d68344622"],
    "user": "5af33a89de89971d68344620",
    "cost": 75,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 3
  },
  {
    "food": ["5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 40,
    "approvalStatus": "PENDING",
    "orderPending": true,
    "orderRating": 5
  },
  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "user": "5af33971de89971d6834461e",
    "cost": 35,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 1
  },
  {
    "food": ["5af33bb9de89971d68344626"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 20,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 2
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "user": "5af33ad0de89971d68344621",
    "cost": 15,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 2
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "user": "5af33971de89971d6834461e",
    "cost": 25,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 5
  },
  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 60,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },
  {
    "food": ["5af33b5ede89971d68344622", "5af33bddde89971d68344627", "5af44d1448bac621d816f39b "],
    "user": "5af33971de89971d6834461e",
    "cost": 75,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 2
  },
  {
    "food": ["5af44d1448bac621d816f39b ", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33ad0de89971d68344621",
    "cost": 65,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },
  {
    "food": ["5af33bb9de89971d68344627", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 55,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 1
  },

  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344626", "5af33b5ede89971d68344622"],
    "user": "5af33971de89971d6834461e",
    "cost": 75,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 5
  },
  {
    "food": ["5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33ad0de89971d68344621",
    "cost": 40,
    "approvalStatus": "PENDING",
    "orderPending": true,
    "orderRating": 5
  },
  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "user": "5af33a89de89971d68344620",
    "cost": 35,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 1
  },
  {
    "food": ["5af33bb9de89971d68344626"],
    "user": "5af33971de89971d6834461e",
    "cost": 20,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 2
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "user": "5af33971de89971d6834461e",
    "cost": 15,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 3
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 25,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 5
  },
  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 60,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 3
  },
  {
    "food": ["5af33b5ede89971d68344622", "5af33bddde89971d68344627", "5af44d1448bac621d816f39b "],
    "user": "5af33971de89971d6834461e",
    "cost": 75,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },
  {
    "food": ["5af44d1448bac621d816f39b ", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33ad0de89971d68344621",
    "cost": 65,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 2
  },
  {
    "food": ["5af33bb9de89971d68344627", "5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33a5ade89971d6834461f",
    "cost": 55,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },

  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344626", "5af33b5ede89971d68344622"],
    "user": "5af33971de89971d6834461e",
    "cost": 75,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 3
  },
  {
    "food": ["5af33bddde89971d68344627", "5af33c0bde89971d68344628"],
    "user": "5af33971de89971d6834461e",
    "cost": 40,
    "approvalStatus": "PENDING",
    "orderPending": true,
    "orderRating": 5
  },
  {
    "food": ["5af33bb9de89971d68344626", "5af33bddde89971d68344627"],
    "user": "5af33a89de89971d68344620",
    "cost": 35,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 1
  },
  {
    "food": ["5af33bb9de89971d68344626"],
    "user": "5af33971de89971d6834461e",
    "cost": 20,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 2
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "user": "5af33971de89971d6834461e",
    "cost": 15,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 4
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "user": "5af33971de89971d6834461e",
    "cost": 25,
    "approvalStatus": "APPROVED",
    "orderPending": false,
    "orderRating": 5
  }
];

let ratingData = [{
    "food": ["5af33bb9de89971d68344626"],
    "value": 4,
    "user": "5af33a89de89971d68344620"
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "value": 5,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "value": 1,
    "user": "5af33971de89971d6834461e"
  },
  {
    "food": ["5af33b5ede89971d68344622"],
    "value": 5,
    "user": "5af33a5ade89971d6834461f"
  },
  {
    "food": ["5af44d1448bac621d816f39b"],
    "value": 1,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bb9de89971d68344626"],
    "value": 2,
    "user": "5af33a89de89971d68344620"
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "value": 4,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "value": 3,
    "user": "5af33971de89971d6834461e"
  },
  {
    "food": ["5af33b5ede89971d68344622"],
    "value": 1,
    "user": "5af33a5ade89971d6834461f"
  },
  {
    "food": ["5af44d1448bac621d816f39b"],
    "value": 3,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bb9de89971d68344626"],
    "value": 5,
    "user": "5af33a5ade89971d6834461f"
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "value": 5,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "value": 3,
    "user": "5af33a89de89971d68344620"
  },
  {
    "food": ["5af33b5ede89971d68344622"],
    "value": 2,
    "user": "5af33a5ade89971d6834461f"
  },
  {
    "food": ["5af44d1448bac621d816f39b"],
    "value": 2,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bb9de89971d68344626"],
    "value": 5,
    "user": "5af33a5ade89971d6834461f"
  },
  {
    "food": ["5af33bddde89971d68344627"],
    "value": 4,
    "user": "5af33ad0de89971d68344621"
  },
  {
    "food": ["5af33bddde89971d68344628"],
    "value": 5,
    "user": "5af33971de89971d6834461e"
  },
  {
    "food": ["5af33b5ede89971d68344622"],
    "value": 3,
    "user": "5af33a5ade89971d6834461f"
  },
  {
    "food": ["5af44d1448bac621d816f39b"],
    "value": 5,
    "user": "5af33ad0de89971d68344621"
  }
];

let userData = [{
    "username": "pramodrao",
    "password": "pramod123",
    "phone": "9611540004",
    "email": "pramod@google.com"
  },
  {
    "username": "nikhil",
    "password": "nikhil123",
    "phone": "123456789",
    "email": "nikhil@apple.com"
  },
  {
    "username": "anusha",
    "password": "anusha123",
    "phone": "9898989891",
    "email": "anusha@facebook.com"
  },
  {
    "username": "desai",
    "password": "desai123",
    "phone": "5656565656",
    "email": "desai@microsoft.com"
  }
]

let foodData = [{
    "name": "Dosa",
    "cost": 35,
    "customerRatings": ["5af34010de89971d68344633", "5af34076de89971d68344636"]
  },
  {
    "name": "Idly",
    "cost": 20,
    "customerRatings": ["5af49ba3e79a223a802b5c69"]
  },
  {
    "name": "Vada",
    "cost": 15,
    "customerRatings": []
  },
  {
    "name": "Kesari bath",
    "cost": 25,
    "customerRatings": []
  },
  {
    "customerRatings": [],
    "name": "Khara bath",
    "cost": 25
  }
];

mongoose.connect("mongodb://localhost/scafe");

// User.insertMany(userData)
//   .then(docs => console.log(docs))
//   .catch(err => console.log(err));

// Food.insertMany()

Order.insertMany(orderData)
  .then(docs => console.log(docs))
  .catch(err => console.log(err));

// Rating.insertMany(ratingData)
//   .then(docs => console.log(docs))
//   .catch(err => console.log(err));
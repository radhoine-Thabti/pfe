const { Order } = require("../models/orders");


const router = require("express").Router();

//CREATE

// createOrder is fired by stripe webhook
// example endpoint

router.post("/", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = router;
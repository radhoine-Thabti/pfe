const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    products: [],
    total: { type: Number },
    delivery_status: { type: String },
    payment_status: { type: String },
  },
  { timestamps: true }
);

const Order = mongoose.model("orders", orderSchema);

exports.Order = Order;
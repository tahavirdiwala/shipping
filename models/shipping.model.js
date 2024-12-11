const mongoose = require("mongoose");

const ShippingMethodsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    shipping_provider: {
      type: String,
      required: true,
      index: true,
    },
    charges: {
      type: Number,
      min: 0,
    },
    shipping_services: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "InActive"],
      message: "{VALUE} is not supported",
      default: "Active",
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const ShippingMethod = mongoose.model("ShippingMethods", ShippingMethodsSchema);
module.exports = ShippingMethod;

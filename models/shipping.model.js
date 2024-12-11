const mongoose = require("mongoose");

const ShippingMethodsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shipping_provider: {
      type: String,
      required: true,
    },
    charges: {
      type: Number,
      validate: {
        validator: (value) => value >= 0,
        message: "{VALUE} must be greater than or equal to zero",
      },
    },
    shipping_services: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "InActive"],
      message: "{VALUE} is not supported",
    },
  },
  {
    timestamps: true,
  }
);

const ShippingMethod = mongoose.model("ShippingMethods", ShippingMethodsSchema);
module.exports = ShippingMethod;

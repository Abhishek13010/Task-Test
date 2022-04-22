const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    active: Bolean,
    modifiedOn: Date,
    product: [
      {
        qunantity: String,
        name: String,
        price: number
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
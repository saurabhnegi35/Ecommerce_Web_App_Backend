const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
    },
    //   wishlist: [
    //     {
    //       type: ObjectId,
    //       ref: "Product",
    //     },
    //   ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

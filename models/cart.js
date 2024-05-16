import { Schema, model, models } from "mongoose";

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  jewelries: [
    {
      jewelry: {
        type: Schema.Types.ObjectId,
        ref: "Jewelry",
      },
      quantity: Number,
    },
  ],
  subTotal: {
    type: Number,
    default: 0,
  },
});

export default models.Cart || model("Cart", cartSchema);

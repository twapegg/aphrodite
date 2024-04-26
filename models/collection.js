import { Schema, model, models } from "mongoose";

const collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

export default models.Collections || model("Collections", collectionSchema);

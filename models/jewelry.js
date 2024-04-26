import { Schema, model, models } from "mongoose";

const jewelrySchema = new Schema({
    collection: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    imgs: {
        type: [String], 
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

export default models.Jewelry || model("Jewelry", jewelrySchema);
import mongoose, { Schema } from "mongoose";

const amenitiesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    hours: {
        type: String,
        required: true
    },
});

export const AmenitiesModel = mongoose.models.amenities ?? mongoose.model("amenities", amenitiesSchema);
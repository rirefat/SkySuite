import mongoose, {Schema} from "mongoose";
import { ObjectId } from "mongodb";

const ratingSchema = new Schema({
    hotelId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

export const RatingsModel = mongoose.models.ratings ?? mongoose.model("ratings", ratingSchema);
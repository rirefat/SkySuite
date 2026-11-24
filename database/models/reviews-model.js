import mongoose, { Schema } from "mongoose";
import { ObjectId } from "mongodb";

const reviewSchema = new Schema({
  hotelId: {
    required: true,
    type: ObjectId
  },
  userId: {
    required: true,
    type: ObjectId
  },
  userName: {
    type: String,
    required: false,
    default: "Guest"
  },
  review: {
    required: true,
    type: String
  },
  rating: {
    type: Number,
    required: false,
    default: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const ReviewModel = mongoose.models.reviews ?? mongoose.model("reviews", reviewSchema);

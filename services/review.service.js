import { connectDB } from "@/database/service/mongo";
import { ReviewModel } from "@/database/models/reviews-model";
import { RatingsModel } from "@/database/models/ratings-model";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import mongoose from "mongoose";

/**
 * Service for reviews and ratings aggregations and persistence.
 */
export const getHotelRatings = async (hotelId) => {
    await connectDB();
    if (!hotelId) return [];

    const ratings = await RatingsModel.find({
        hotelId: new mongoose.Types.ObjectId(hotelId.toString())
    }).lean();

    return replaceMongoIdInArray(ratings);
};

export const getHotelReviews = async (hotelId) => {
    await connectDB();
    if (!hotelId) return [];

    const reviews = await ReviewModel.find({
        hotelId: new mongoose.Types.ObjectId(hotelId.toString())
    }).sort({ createdAt: -1 }).lean();

    return replaceMongoIdInArray(reviews);
};

export const getReviewsRatingsSummary = async (hotelId) => {
    const ratings = await getHotelRatings(hotelId);
    const reviews = await getHotelReviews(hotelId);

    let avgRating = 0;
    let ratingDescription = "No Ratings";

    if (ratings.length > 0) {
        const sum = ratings.reduce((acc, r) => acc + (r.rating || 0), 0);
        avgRating = sum / ratings.length;
    } else if (reviews.length > 0) {
        // Fallback to review ratings if specific ratings collection is empty
        const sum = reviews.reduce((acc, r) => acc + (r.rating || 5), 0);
        avgRating = sum / reviews.length;
    }

    if (avgRating === 0) {
        ratingDescription = "No Ratings";
    } else if (avgRating <= 2) {
        ratingDescription = "Poor";
    } else if (avgRating <= 3) {
        ratingDescription = "Average";
    } else if (avgRating <= 4) {
        ratingDescription = "Good";
    } else {
        ratingDescription = "Very Good";
    }

    return {
        avgRating,
        ratingDescription,
        reviews
    };
};

export const createHotelReview = async ({ hotelId, userId, userName, review, rating }) => {
    await connectDB();

    if (!hotelId || !userId || !review) {
        throw new Error("Missing required review fields.");
    }

    const created = await ReviewModel.create({
        hotelId: new mongoose.Types.ObjectId(hotelId.toString()),
        userId: new mongoose.Types.ObjectId(userId.toString()),
        userName: userName || "Verified Guest",
        review,
        rating: Number(rating) || 5,
        createdAt: new Date()
    });

    // Also record in RatingsModel
    await RatingsModel.create({
        hotelId: new mongoose.Types.ObjectId(hotelId.toString()),
        userId: new mongoose.Types.ObjectId(userId.toString()),
        rating: Number(rating) || 5
    });

    return replaceMongoIdInObject(created.toObject());
};

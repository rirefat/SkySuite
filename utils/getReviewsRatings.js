import { getHotelRatings, getHotelReviews } from "@/database/queries";

export const getReviewsRatings = async (id) => {
    const ratings = await getHotelRatings(id) || [];
    const reviews = await getHotelReviews(id) || [];

    let avgRating = 0;
    let ratingDescription = "";

    if (ratings.length === 1) {
        avgRating = ratings[0]?.rating;
    } else if (ratings.length > 1) {
        avgRating = ratings.reduce((sum, current) => (sum + current.rating), 0) / ratings.length;
    }


    if (avgRating === 0) {
        ratingDescription = "No Ratings";
    } else if (avgRating > 0 && avgRating <= 2) {
        ratingDescription = "Poor";
    } else if (avgRating > 2 && avgRating <= 3) {
        ratingDescription = "Average";
    } else if (avgRating > 3 && avgRating <= 4) {
        ratingDescription = "Good";
    } else if (avgRating > 4) {
        ratingDescription = "Very Good";
    }

    return {
        avgRating,
        ratingDescription,
        reviews
    }
}
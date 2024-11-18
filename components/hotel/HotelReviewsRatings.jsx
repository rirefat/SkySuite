import { getHotelRatings, getHotelReviews } from "@/database/queries/queries";
import Link from "next/link";

const HotelReviewsRatings = async ({ id }) => {
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

    return (
        <div className="flex gap-2 items-center my-4">
            <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                {avgRating.toFixed(1)}
            </div>
            <span className="font-medium text-sm md:text-base">{ratingDescription} ● </span>
            {
                reviews.length === 0 ?
                    <Link
                        href={`/hotels/${id}#reviews`}
                        className="text-xs md:text-sm text-gray-500 hover:text-blue-500 hover:underline"
                    >Be the first one to review</Link> :
                    reviews.length === 1 ?
                        <span className="text-xs md:text-sm text-gray-500">{reviews.length} Review</span> :
                        <span className="text-xs md:text-sm text-gray-500">{reviews.length} Reviews</span>
            }
        </div>
    );
};

export default HotelReviewsRatings;
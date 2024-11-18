import { getReviewsRatings } from "@/utils/getReviewsRatings";
import Link from "next/link";

const HotelReviewsRatings = async ({ id }) => {
    const { avgRating, ratingDescription, reviews } = await getReviewsRatings(id);
    
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
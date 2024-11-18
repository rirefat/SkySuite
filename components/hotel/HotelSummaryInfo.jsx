import { getHotelRatings, getHotelReviews, getSingleHotel } from "@/database/queries";

const HotelSummaryInfo = async ({ id }) => {
    const hotelInfo = await getSingleHotel(id);

    const ratings = await getHotelRatings(id) || [];
    const reviews = await getHotelReviews(id) || [];

    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;

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
        <>
            <div className="flex-1 container">
                <h2 className="font-bold text-2xl">{hotelInfo?.name}</h2>
                <p>📍 {hotelInfo?.city}</p>
                <div className="flex gap-2 items-center my-4">
                    <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                        {avgRating.toFixed(1)}
                    </div>
                    <span className="font-medium">{ratingDescription}</span>
                    <span>{reviews.length} Reviews</span>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">${perNightCost}/night</h2>
                <p className=" text-right">Per Night for 4 Rooms</p>
                <button className="btn-primary ">Book Now</button>
            </div>
        </>
    );
};

export default HotelSummaryInfo;
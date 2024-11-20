import { getSingleHotel } from "@/database/queries";
import { getReviewsRatings } from "@/utils/getReviewsRatings";

const HotelSummaryInfo = async ({ id, destination, checkIn, checkOut }) => {
    const hotelInfo = await getSingleHotel(id, checkIn, checkOut);
    const { avgRating, ratingDescription, reviews } = await getReviewsRatings(id);
    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;

    console.log(hotelInfo?.isBooked);
    return (
        <>
            <div className="flex-1 container">
                <div className="flex gap-4">
                    <h2 className="font-bold text-2xl">{hotelInfo?.name}</h2>
                    {
                        hotelInfo?.isBooked &&
                        <span className="rounded-full border border-red-300 text-xs md:text-sm font-semibold text-red-500 px-3 py-1">
                            Reserved ‼️
                        </span>
                    }
                </div>
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
                <button disabled={hotelInfo?.isBooked} className="btn-primary ">{hotelInfo?.isBooked ? "No Vacancies" : "Book Now"}</button>
            </div>
        </>
    );
};

export default HotelSummaryInfo;
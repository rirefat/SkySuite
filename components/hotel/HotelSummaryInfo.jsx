import { auth } from "@/auth";
import { getSingleHotel } from "@/services/hotel.service";
import { getReviewsRatingsSummary } from "@/services/review.service";
import Link from "next/link";

const HotelSummaryInfo = async ({ id, destination, checkIn, checkOut }) => {
    const session = await auth();
    const hotelInfo = await getSingleHotel(id, checkIn, checkOut);
    const { avgRating, ratingDescription, reviews } = await getReviewsRatingsSummary(id);
    const perNightCost = ((hotelInfo?.highRate || 0) + (hotelInfo?.lowRate || 0)) / 2;

    const queryParams = new URLSearchParams();
    if (checkIn) queryParams.set("checkIn", checkIn);
    if (checkOut) queryParams.set("checkOut", checkOut);
    const paymentQuery = queryParams.toString() ? `?${queryParams.toString()}` : "";

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
            <div className="flex-1">
                <div className="flex items-center gap-3">
                    <h2 className="font-bold text-2xl md:text-3xl text-gray-800">{hotelInfo?.name}</h2>
                    {
                        hotelInfo?.isBooked &&
                        <span className="rounded-full bg-red-50 border border-red-300 text-xs md:text-sm font-semibold text-red-600 px-3 py-1">
                            Reserved ‼️
                        </span>
                    }
                </div>
                <p className="text-gray-600 mt-1">📍 {hotelInfo?.city}</p>
                <div className="flex gap-2 items-center my-4">
                    <div className="bg-primary w-[35px] h-[35px] rounded-md text-white grid place-items-center font-bold text-sm">
                        {avgRating.toFixed(1)}
                    </div>
                    <span className="font-medium text-gray-700">{ratingDescription}</span>
                    <span className="text-gray-400">•</span>
                    <a href="#reviews" className="text-primary hover:underline text-sm">{reviews.length} Reviews</a>
                </div>
            </div>

            <div className="flex flex-col gap-2 items-start md:items-end justify-center">
                <h2 className="text-2xl font-bold text-gray-900">${perNightCost}/night</h2>
                <p className="text-sm text-gray-500">Per Night for 4 Rooms</p>
                {
                    session ?
                        <Link
                            href={hotelInfo?.isBooked ? "#" : `/hotels/${id}/payment${paymentQuery}`}
                            className={hotelInfo?.isBooked ? "btn-disabled" : "btn-primary"}
                        >
                            {hotelInfo?.isBooked ? "No Vacancies" : "Book Now"}
                        </Link> :
                        <Link href={`/login?callbackUrl=/hotels/${id}`} className="btn-primary" >
                            Login to Book
                        </Link>
                }
            </div>
        </div>
    );
};

export default HotelSummaryInfo;

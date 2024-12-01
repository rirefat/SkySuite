import { auth } from "@/auth";
import { getSingleHotel } from "@/database/queries";
import { getReviewsRatings } from "@/utils/getReviewsRatings";
import Link from "next/link";

const HotelSummaryInfo = async ({ id, destination, checkIn, checkOut }) => {
    const session = await auth();
    const hotelInfo = await getSingleHotel(id, checkIn, checkOut);
    const { avgRating, ratingDescription, reviews } = await getReviewsRatings(id);
    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;

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
                    <Link href="#reviews">{reviews.length} Reviews</Link>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">${perNightCost}/night</h2>
                <p className=" text-right">Per Night for 4 Rooms</p>
                {
                    session ?
                        <Link
                            href={hotelInfo?.isBooked ? "#" : `/hotels/${id}/payment?checkIn=${checkIn}&checkOut=${checkOut}`}
                            className={hotelInfo?.isBooked ? "btn-disabled" : "btn-primary"}
                        >
                            {hotelInfo?.isBooked ? "No Vacancies" : "Book Now"}
                        </Link> :
                        <Link href={'/login'} className="btn-primary" >Login to Book</Link>
                }
            </div>
        </>
    );
};

export default HotelSummaryInfo;
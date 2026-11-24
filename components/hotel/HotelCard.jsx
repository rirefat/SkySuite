import Image from "next/image";
import Link from "next/link";
import HotelReviewsRatings from "./HotelReviewsRatings";

const HotelCard = ({ hotelInfo, destination, checkIn, checkOut }) => {
    const perNightCost = ((hotelInfo?.highRate || 0) + (hotelInfo?.lowRate || 0)) / 2;
    const queryParams = new URLSearchParams();

    if (destination && destination !== "all") queryParams.set("destination", destination);
    if (checkIn) queryParams.set("checkIn", checkIn);
    if (checkOut) queryParams.set("checkOut", checkOut);

    const queryString = queryParams.toString() ? `?${queryParams.toString()}` : "";

    return (
        <div className="flex flex-col md:flex-row gap-6 border border-gray-200 p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
            {/* Hotel Thumbnail */}
            <div className="relative w-full md:w-[240px] h-[162px] flex-shrink-0 overflow-hidden rounded bg-gray-100">
                <Image
                    src={hotelInfo?.thumbNailUrl || "/hero-bg.jpg"}
                    className="w-full h-full object-cover"
                    alt={`${hotelInfo?.name || "Hotel"} thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                />
            </div>

            {/* Hotel Information */}
            <div className="flex-1">
                <Link
                    href={`/hotels/${hotelInfo?.id}${queryString}`}
                    className="font-bold text-lg md:text-xl text-gray-800 hover:text-primary hover:underline underline-offset-2"
                >
                    {hotelInfo?.name}
                </Link>
                <p className="text-sm text-gray-600 mt-1">📍 {hotelInfo?.city}</p>

                <HotelReviewsRatings id={hotelInfo?.id} />

                <div className="flex flex-wrap items-center gap-2 mt-2">
                    <span className="border border-gray-300 text-xs md:text-sm font-semibold text-slate-600 px-2 py-1 rounded">
                        ⭐ {hotelInfo?.propertyCategory || 3} Star Category
                    </span>

                    {hotelInfo?.isBooked && (
                        <span className="rounded-full bg-red-50 border border-red-300 text-xs md:text-sm font-semibold text-red-600 px-3 py-0.5">
                            Reserved ‼️
                        </span>
                    )}
                </div>
            </div>

            {/* Pricing and Action */}
            <div className="flex flex-col gap-2 items-start md:items-end justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-right">${perNightCost}/night</h2>
                <p className="text-sm text-gray-500 text-right">Per Night for 4 Rooms</p>
                <Link
                    href={`/hotels/${hotelInfo?.id}${queryString}`}
                    className="btn-primary text-sm md:text-base px-4 py-2 mt-2"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;

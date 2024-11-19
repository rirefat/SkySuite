import Image from "next/image";
import Link from "next/link";
import HotelReviewsRatings from "./HotelReviewsRatings";

const HotelCard = ({ hotelInfo, destination, checkIn, checkOut }) => {
    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
    let params = '';

    if (checkIn && checkOut) {
        params = `?checkIn=${checkIn}&checkOut=${checkOut}`;
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 border border-gray/20 p-4 rounded-md shadow">
            {/* Hotel Thumbnail */}
            <Image
                src={hotelInfo?.thumbNailUrl}
                className="w-full md:max-h-[162px] md:max-w-[240px] rounded object-cover"
                alt={`${hotelInfo?.name} thumbnail`}
                width={240}
                height={162}
            />

            {/* Hotel Information */}
            <div className="flex-1">
                <Link href={`/hotels/${hotelInfo?.id}`} className="font-bold text-lg md:text-xl hover:underline underline-offset-1">{hotelInfo?.name}</Link>
                <p className="text-sm text-gray-600">📍 {hotelInfo?.city}</p>

                <HotelReviewsRatings id={hotelInfo?.id} />

                <span className=" mr-2border border-gray-300 text-xs md:text-sm font-semibold text-slate-500 p-2 rounded">
                    ⭐ {hotelInfo?.propertyCategory} Star Category Hotel
                </span>

                {
                    hotelInfo?.isBooked &&
                    <span className="rounded-full border border-red-300 text-xs md:text-sm font-semibold text-red-500 px-3 py-1">
                        Reserved ‼️
                    </span>
                }
            </div>

            {/* Pricing and Action */}
            <div className="flex flex-col gap-2 items-start md:items-end justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-right">${perNightCost}/night</h2>
                <p className="text-sm text-gray-500 text-right">Per Night for 4 Rooms</p>
                <Link
                    href={`/hotels/${hotelInfo?.id}${params}`}
                    className="btn-primary text-sm md:text-base px-4 py-2 mt-2"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;

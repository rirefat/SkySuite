import Image from "next/image";
import Link from "next/link";

const HotelCard = ({ hotelInfo }) => {
    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;

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

                <div className="flex gap-2 items-center my-4">
                    <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                        5.3
                    </div>
                    <span className="font-medium text-sm md:text-base">Very Good</span>
                    <span className="text-xs md:text-sm text-gray-500">232 Reviews</span>
                </div>

                <span className="border border-gray-300 text-xs md:text-sm font-semibold text-slate-500 p-2 rounded">
                    ⭐ {hotelInfo?.propertyCategory} Star Category Hotel
                </span>
            </div>

            {/* Pricing and Action */}
            <div className="flex flex-col gap-2 items-start md:items-end justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-right">${perNightCost}/night</h2>
                <p className="text-sm text-gray-500 text-right">Per Night for 4 Rooms</p>
                <Link
                    href={`/hotels/${hotelInfo?.id}`}
                    className="btn-primary text-sm md:text-base px-4 py-2 mt-2"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default HotelCard;

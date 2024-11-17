import Image from "next/image";
import Link from "next/link";

const HotelCard = ({ hotelInfo }) => {
    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
    return (
        <div className="flex gap-6 border border-gray/20 p-4 rounded-md shadow">
            <Image src={hotelInfo?.thumbNailUrl} className="max-h-[162px] max-w-[240px]" alt="" width={240} height={50} />
            <div className="flex-1">
                <h2 className="font-bold text-lg">{hotelInfo?.name}</h2>
                <p>📍 {hotelInfo?.city}</p>
                <div className="flex gap-2 items-center my-4">
                    <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                        5.3
                    </div>
                    <span className="font-medium">Very Good</span>
                    <span>232 Reviews</span>
                </div>
                <span className="border border-gray-300 text-xs font-semibold text-slate-500 p-2 rounded">⭐ {hotelInfo?.propertyCategory} Star Category Hotel</span>
            </div>

            <div className="flex flex-col gap-2 items-end justify-center">
                <h2 className="text-2xl font-bold text-right">${perNightCost}/night</h2>
                <p className=" text-right">Per Night for 4 Rooms</p>
                <Link href={`/hotels/${hotelInfo?.id}`} className="btn-primary">Details</Link>
            </div>
        </div>
    );
};

export default HotelCard;
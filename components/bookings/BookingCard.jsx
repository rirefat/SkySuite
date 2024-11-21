import { getSingleHotel } from "@/database/queries";
import { getDayDifferences } from "@/utils";

const BookingCard = async ({ booking, bgColor }) => {
    const hotelInfo = await getSingleHotel(booking?.hotelId.toString());
    const perNightCost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
    const totalDays = getDayDifferences(booking?.checkIn, booking?.checkOut);
    const totalCost = totalDays * perNightCost;


    console.log(hotelInfo)
    return (
        <div className="bg-[#f0dbf1] p-4 rounded-md shadow">
            <div className="flex justify-between items-center ">
                <div>
                    <h3 className="text-xl font-semibold">{hotelInfo?.name}</h3>
                    <p>📍 {hotelInfo?.city}</p>
                    <div className="text-sm text-gray-600 my-4">
                        <p>Check In: <span title="YYYY-MM-DD">{booking.checkIn}</span></p>
                        <p>Check Out: <span title="YYYY-MM-DD">{booking.checkOut}</span></p>
                    </div>
                </div>

                {/* Total Cost  */}
                <div>
                    <h3 className="text-xl font-semibold text-right">${totalCost}</h3>
                    <p className="text-sm text-gray-600">${perNightCost} per night x {totalDays} days</p>
                </div>
            </div>

        </div>
    );
};

export default BookingCard;
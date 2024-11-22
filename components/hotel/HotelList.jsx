import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";

const HotelList = async ({ destination, checkIn, checkOut, category }) => {
    const allHotels = await getAllHotels(destination, checkIn, checkOut, category);

    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {/* Hotel card */}
                {
                    allHotels.map(hotel => (
                        <HotelCard
                            key={hotel.id}
                            hotelInfo={hotel}
                            destination={destination}
                            checkIn={checkIn}
                            checkOut={checkOut}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default HotelList;
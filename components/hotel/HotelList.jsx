import { getAllHotels } from "@/database/queries";
import HotelCard from "./HotelCard";
import NoHotels from "../NoHotels";

const HotelList = async ({ destination, checkIn, checkOut, category, sort, amenities }) => {
    const allHotels = await getAllHotels(destination, checkIn, checkOut, category, sort, amenities);

    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {/* Hotel card */}
                {
                    allHotels.length > 0 ?
                        allHotels.map(hotel => (
                            <HotelCard
                                key={hotel.id}
                                hotelInfo={hotel}
                                destination={destination}
                                checkIn={checkIn}
                                checkOut={checkOut}
                            />
                        )) : (<NoHotels />)
                }
            </div>
        </div>
    );
};

export default HotelList;
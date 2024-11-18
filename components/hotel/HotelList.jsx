import HotelCard from "./HotelCard";

const HotelList = ({ allHotels }) => {

    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {/* Hotel card */}
                {
                    allHotels.map(hotel => (
                        <HotelCard key={hotel.id} hotelInfo={hotel} />
                    ))
                }
            </div>
        </div>
    );
};

export default HotelList;
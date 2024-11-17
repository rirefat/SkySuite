import HotelCard from "./HotelCard";

const HotelList = ({ allHotels }) => {
    return (
        <div className="col-span-12 md:col-span-9">
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {/* Hotel Cards */}
                {allHotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotelInfo={hotel} />
                ))}
            </div>
        </div>
    );
};

export default HotelList;

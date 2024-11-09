import HotelCard from "./HotelCard";

const HotelList = () => {
    return (
        <div className="col-span-9">
            <div className="space-y-4">
                {/* Hotel card */}
                <HotelCard />
            </div>
        </div>
    );
};

export default HotelList;
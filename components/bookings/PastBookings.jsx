import BookingCard from "./BookingCard";

const PastBookings = ({ bookings }) => {

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
            {
                bookings && bookings.length > 1 &&
                bookings.map(booking => (
                    <BookingCard key={booking._id} booking={booking}/>
                ))
            }
        </div>
    );
};

export default PastBookings;
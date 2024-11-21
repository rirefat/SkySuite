import BookingCard from "./BookingCard";

const UpcomingBookings = ({ bookings }) => {
    console.log("upcoming:", bookings)
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">⌛️ Upcoming Bookings</h2>
            {
                bookings && bookings.length >= 1 &&
                bookings.map(booking => (
                    <BookingCard key={booking._id} booking={booking} />
                ))
            }

        </div>
    );
};

export default UpcomingBookings;

// #f0dbf1
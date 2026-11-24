import BookingCard from "./BookingCard";

const PastBookings = ({ bookings }) => {
    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>
            {
                bookings && bookings.length > 0 ? (
                    bookings.map(booking => (
                        <BookingCard key={booking.id || booking._id} booking={booking} />
                    ))
                ) : (
                    <p className="text-gray-500 text-sm bg-gray-50 p-4 rounded-md border border-gray-100">No past bookings found.</p>
                )
            }
        </div>
    );
};

export default PastBookings;

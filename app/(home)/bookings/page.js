import { auth } from "@/auth";
import PastBookings from "@/components/bookings/PastBookings";
import UpcomingBookings from "@/components/bookings/UpcomingBookings";
import UserInfo from "@/components/user/UserInfo";
import { getBookingsByUser, getUserByEmail } from "@/database/queries";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
    const session = await auth();

    // Guard route before any queries execute
    if (!session?.user) {
        redirect("/login");
    }

    const userInfo = await getUserByEmail(session.user.email);
    const allBookings = userInfo?.id ? await getBookingsByUser(userInfo.id) : [];

    const now = new Date().getTime();

    const pastBookings = allBookings.filter((booking) => {
        return now > new Date(booking.checkIn).getTime();
    });

    const upcomingBookings = allBookings.filter((booking) => {
        return now <= new Date(booking.checkIn).getTime();
    });

    return (
        <>
            <section className="mt-[100px]">
                <UserInfo />
            </section>

            <section className="pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Past Bookings */}
                        <PastBookings bookings={pastBookings} />

                        {/* Upcoming Bookings */}
                        <UpcomingBookings bookings={upcomingBookings} />
                    </div>
                </div>
            </section>
        </>
    );
}

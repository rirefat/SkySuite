import { auth } from "@/auth";
import PastBookings from "@/components/bookings/PastBookings";
import UpcomingBookings from "@/components/bookings/UpcomingBookings";
import UserInfo from "@/components/user/UserInfo";
import { redirect } from "next/navigation";

export default async function BookingsPage() {
    const session = await auth();

    if(!session) {
        redirect("/login")
    }

    return (
        <>
            <section className="mt-[100px]">
                <UserInfo />
            </section>

            <section>
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* Past Bookings  */}
                        <PastBookings />

                        {/* Upcoming Bookings  */}
                        <UpcomingBookings />

                    </div>
                </div>
            </section>
        </>
    );
}
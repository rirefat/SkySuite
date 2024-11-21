import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getSingleHotel, getUserByEmail } from "@/database/queries";
import { getDayDifferences } from "@/utils";
import { redirect } from "next/navigation";

export default async function PaymentPage({ params: { id }, searchParams: { checkIn, checkOut } }) {
    const session = await auth();
    const userInfo = await getUserByEmail(session?.user?.email)
    const hotelInfo = await getSingleHotel(id, checkIn, checkOut);

    if (!session) {
        redirect("/login")
    }

    let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
    const hasCheckInCheckOut = checkIn && checkOut;
    if (hasCheckInCheckOut) {
        const dayDifferences = getDayDifferences(checkIn, checkOut);
        cost = cost * dayDifferences;
    }

    return (
        <section className="container">
            <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
                <h2 className="font-bold text-2xl">Payment Details</h2>
                <p className="text-gray-600 text-sm my-2">
                    You have picked <b className="text-black">{hotelInfo?.name}</b> for {hasCheckInCheckOut && getDayDifferences(checkIn, checkOut)} day(s) and base price is <b className="text-black">${cost}</b>
                </p>

                <PaymentForm
                    id={id}
                    cost={cost}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    userInfo={userInfo}
                    hotelInfo={hotelInfo}
                />
            </div>
        </section>
    );
}
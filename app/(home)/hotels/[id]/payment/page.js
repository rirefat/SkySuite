import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getSingleHotel } from "@/services/hotel.service";
import { getUserByEmail } from "@/services/user.service";
import { getDayDifferences } from "@/utils";
import { redirect, notFound } from "next/navigation";

export default async function PaymentPage(props) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const id = params?.id;
    const checkIn = searchParams?.checkIn || "";
    const checkOut = searchParams?.checkOut || "";

    const session = await auth();
    if (!session?.user) {
        redirect(`/login?callbackUrl=/hotels/${id}/payment?checkIn=${checkIn}&checkOut=${checkOut}`);
    }

    const userInfo = await getUserByEmail(session?.user?.email);
    const hotelInfo = await getSingleHotel(id, checkIn, checkOut);

    if (!hotelInfo) {
        notFound();
    }

    if (hotelInfo.isBooked) {
        redirect(`/hotels/${id}`);
    }

    const perNightCost = ((hotelInfo?.highRate || 0) + (hotelInfo?.lowRate || 0)) / 2;
    const dayDifferences = checkIn && checkOut ? getDayDifferences(checkIn, checkOut) : 1;
    const totalCost = perNightCost * dayDifferences;

    return (
        <section className="container">
            <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px] border border-gray-100 shadow-lg bg-white">
                <h2 className="font-bold text-2xl">Payment Details</h2>
                <p className="text-gray-600 text-sm my-2">
                    You have picked <b className="text-black">{hotelInfo?.name}</b> for{" "}
                    <b className="text-black">{dayDifferences}</b> day(s). Base rate is{" "}
                    <b className="text-black">${perNightCost}/night</b> (Total: <b className="text-black">${totalCost}</b>).
                </p>

                <PaymentForm
                    id={id}
                    cost={totalCost}
                    checkIn={checkIn}
                    checkOut={checkOut}
                    userInfo={userInfo}
                    hotelInfo={hotelInfo}
                />
            </div>
        </section>
    );
}

import { createBooking } from "@/services/booking.service";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const session = await auth();
        const body = await request.json();
        const { hotelId, checkIn, checkOut } = body;
        const userId = session?.user?.id || body.userId;

        if (!userId) {
            return new NextResponse("Unauthorized: Please sign in to book.", { status: 401 });
        }

        if (!hotelId || !checkIn || !checkOut) {
            return new NextResponse("Missing required booking parameters.", { status: 400 });
        }

        const booking = await createBooking({ hotelId, userId, checkIn, checkOut });

        return NextResponse.json(
            { success: true, message: "Booking confirmed successfully.", booking },
            { status: 201 }
        );
    } catch (err) {
        const isConflict = err.message?.includes("already reserved");
        return new NextResponse(err.message || "Failed to create booking", {
            status: isConflict ? 409 : 500
        });
    }
};

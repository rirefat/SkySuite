import { BookingModel } from "@/database/models/booking-model";
import { connectDB } from "@/database/service/mongo"
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    const { hotelId, userId, checkIn, checkOut } = await request.json();

    const newBooking = {
        hotelId: new mongoose.Types.ObjectId(hotelId),
        userId: new mongoose.Types.ObjectId(userId),
        checkIn, checkOut
    }

    try {
        await BookingModel.create(newBooking);
        return new NextResponse("New booking has been created.", {
            status: 201
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500
        })
    }
}
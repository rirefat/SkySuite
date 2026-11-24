import { connectDB } from "@/database/service/mongo";
import { BookingModel } from "@/database/models/booking-model";
import { doDateRangesOverlap, replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import mongoose from "mongoose";

/**
 * Service for booking operations and date interval collision verification.
 */
export const findBookingCollisions = async (hotelId, checkIn, checkOut) => {
    await connectDB();

    const existingBookings = await BookingModel.find({
        hotelId: new mongoose.Types.ObjectId(hotelId.toString())
    }).lean();

    const hasCollision = existingBookings.some((booking) =>
        doDateRangesOverlap(checkIn, checkOut, booking.checkIn, booking.checkOut)
    );

    return hasCollision;
};

export const getBookingsByUserId = async (userId) => {
    await connectDB();

    if (!userId) return [];

    const bookings = await BookingModel.find({
        userId: new mongoose.Types.ObjectId(userId.toString())
    }).sort({ checkIn: -1 }).lean();

    return replaceMongoIdInArray(bookings);
};

export const createBooking = async ({ hotelId, userId, checkIn, checkOut }) => {
    await connectDB();

    if (!hotelId || !userId || !checkIn || !checkOut) {
        throw new Error("Missing required booking fields.");
    }

    // Prevent double booking collision
    const isAlreadyBooked = await findBookingCollisions(hotelId, checkIn, checkOut);
    if (isAlreadyBooked) {
        throw new Error("This property is already reserved for the selected dates.");
    }

    const booking = await BookingModel.create({
        hotelId: new mongoose.Types.ObjectId(hotelId.toString()),
        userId: new mongoose.Types.ObjectId(userId.toString()),
        checkIn,
        checkOut
    });

    return replaceMongoIdInObject(booking.toObject());
};

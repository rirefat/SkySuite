import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({

});

export const BookingModel = mongoose.models.bookings ?? mongoose.model('bookings', bookingSchema);
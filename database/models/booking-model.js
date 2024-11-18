import mongoose, {Schema} from "mongoose";
import { ObjectId } from "mongodb";

const bookingSchema = new Schema({
    hotelId: {
        required: true,
        type: ObjectId
    },
    userId: {
        required: true,
        type: ObjectId
    },
    checkin: {
        required: true,
        type: String
    },
    checkout: {
        required: true,
        type: String
    },
});
export const BookingModel = mongoose.models.bookings ?? mongoose.model('bookings', bookingSchema);
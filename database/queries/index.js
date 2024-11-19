import { isDateInBetween, replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import { HotelsModel } from "../models/hotels-model"
import { RatingsModel } from "../models/ratings-model";
import { ReviewModel } from "../models/reviews-model";
import { BookingModel } from "../models/booking-model";

export const getAllHotels = async (destination, checkIn, checkOut) => {
    const regex = new RegExp(destination, 'i');
    const allHotelsByDestination = await HotelsModel
        .find({ city: { $regex: regex } })
        .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
        .lean();

    let allHotels = allHotelsByDestination;

    if (checkIn && checkOut) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBookings(hotel._id, checkIn, checkOut);

                if (found) {
                    hotel['isBooked'] = true
                } else {
                    hotel['isBooked'] = false
                }

                return hotel;
            })
        );
    }
    return replaceMongoIdInArray(allHotels);
}

export const findBookings = async (hotelId, checkIn, checkOut) => {
    const matches = await BookingModel
        .find({ hotelId: hotelId.toString() })
        .lean();

    const found = matches.find(match => {
        return (
            isDateInBetween(checkIn, match.checkIn, match.checkOut) ||
            isDateInBetween(checkOut, match.checkIn, match.checkOut)
        )
    });

    return found;
}

export const getSingleHotel = async (id) => {
    const hotel = await HotelsModel
        .findById(id)
        .lean();
    return replaceMongoIdInObject(hotel);
}

export const getHotelRatings = async (hotelId) => {
    const ratings = await RatingsModel
        .find({ hotelId: hotelId })
        .lean();
    return replaceMongoIdInArray(ratings);
}

export const getHotelReviews = async (hotelId) => {
    const reviews = await ReviewModel
        .find({ hotelId: hotelId })
        .lean();
    return replaceMongoIdInArray(reviews);
}
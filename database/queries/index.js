import { isDateInBetween, replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import { HotelsModel } from "../models/hotels-model"
import { RatingsModel } from "../models/ratings-model";
import { ReviewModel } from "../models/reviews-model";
import { BookingModel } from "../models/booking-model";
import { UserModel } from "../models/users-model";
import { AmenitiesModel } from "../models/amenity-model";

export const getAllHotels = async (destination, checkIn, checkOut, category, sort, amenities) => {
    const regex = new RegExp(destination, 'i');
    const allHotelsByDestination = await HotelsModel
        .find({ city: { $regex: regex } })
        .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory", "amenities"])
        .lean();

    let allHotels = allHotelsByDestination;

    if (category) {
        const categoriesToMatch = category.split("|");
        allHotels = allHotels.filter((hotel) => {
            return categoriesToMatch.includes(hotel.propertyCategory.toString());
        })
    }

    if (sort) {
        if (sort === 'lowToHigh') {
            allHotels.sort((a, b) => {
                const hotelACost = (a.highRate + a.lowRate) / 2;
                const hotelBCost = (b.highRate + b.lowRate) / 2;

                return hotelACost - hotelBCost;
            })
        } else {
            allHotels.sort((a, b) => {
                const hotelACost = (a.highRate + a.lowRate) / 2;
                const hotelBCost = (b.highRate + b.lowRate) / 2;

                return hotelBCost - hotelACost;
            })
        }
    }

    if (amenities) {
        const amenitiesToMatch = amenities.split("|");
        console.log(amenitiesToMatch)

        allHotels = allHotels.filter((hotel) => {
            if (hotel.amenities.length > 0) {
                const result = hotel.amenities.filter(async amenity => {
                    console.log(amenity.toString())
                    const providedAmenity = await getAmenity(amenity.toString());
                    console.log(providedAmenity.name)
                    return amenitiesToMatch.includes(providedAmenity?.name)
                });
                return result;
            } else {
                return false;
            }
        }
        );
    }

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

export const getSingleHotel = async (id, checkIn, checkOut) => {
    const hotel = await HotelsModel
        .findById(id)
        .lean();

    if (checkIn && checkOut) {
        const found = await findBookings(id, checkIn, checkOut);

        if (found) {
            hotel["isBooked"] = true;
        } else {
            hotel["isBooked"] = false;
        }
    }

    return replaceMongoIdInObject(hotel);
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

export const getBookingsByUser = async (id) => {
    const bookings = await BookingModel.find({ userId: id });
    return bookings;
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

export const getUserByEmail = async (email) => {
    const user = await UserModel.find({ email: email }).lean();
    return replaceMongoIdInObject(user[0]);
}

const getAmenity = async (id) => {
    const amenity = await AmenitiesModel.findById(id);
    return amenity;
}
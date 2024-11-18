import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";
import { HotelsModel } from "../models/hotels-model"
import { RatingsModel } from "../models/ratings-model";
import { ReviewModel } from "../models/reviews-model";

export const getAllHotels = async () => {
    const allHotels = await HotelsModel.find()
        .select((["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"]))
        .lean();
    return replaceMongoIdInArray(allHotels);
}

export const getSingleHotel = async (id) => {
    const hotel = await HotelsModel.findById(id).lean();
    return replaceMongoIdInObject(hotel);
}

export const getHotelRatings = async (hotelId) => {
    const ratings = await RatingsModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(ratings);
}

export const getHotelReviews = async (hotelId) => {
    const reviews = await ReviewModel.find({ hotelId: hotelId }).lean();
    return replaceMongoIdInArray(reviews);
}
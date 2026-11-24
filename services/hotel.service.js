import { connectDB } from "@/database/service/mongo";
import { HotelsModel } from "@/database/models/hotels-model";
import { AmenitiesModel } from "@/database/models/amenity-model";
import { findBookingCollisions } from "./booking.service";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils";

/**
 * Service for handling hotel retrieval, search, filtering, and availability.
 */
export const getAllHotels = async ({
    destination = "",
    checkIn = "",
    checkOut = "",
    category = "",
    sort = "",
    amenities = ""
} = {}) => {
    await connectDB();

    const query = {};
    if (destination && destination.toLowerCase() !== "all") {
        query.city = { $regex: new RegExp(destination.trim(), "i") };
    }

    let allHotels = await HotelsModel.find(query)
        .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory", "amenities", "overview"])
        .lean();

    // Category filtering
    if (category) {
        const categoriesToMatch = category.split("|");
        allHotels = allHotels.filter((hotel) =>
            categoriesToMatch.includes(String(hotel.propertyCategory))
        );
    }

    // Amenities filtering (Batch query instead of N+1 async loop)
    if (amenities) {
        const amenitiesToMatch = amenities.split("|");
        const matchingAmenityDocs = await AmenitiesModel.find({
            name: { $in: amenitiesToMatch }
        }).select("_id").lean();

        const matchingIds = new Set(matchingAmenityDocs.map((a) => a._id.toString()));

        allHotels = allHotels.filter((hotel) => {
            if (!Array.isArray(hotel.amenities) || hotel.amenities.length === 0) return false;
            return hotel.amenities.some((aId) => matchingIds.has(aId.toString()));
        });
    }

    // Sorting
    if (sort) {
        allHotels.sort((a, b) => {
            const costA = ((a.highRate || 0) + (a.lowRate || 0)) / 2;
            const costB = ((b.highRate || 0) + (b.lowRate || 0)) / 2;
            return sort === "lowToHigh" ? costA - costB : costB - costA;
        });
    }

    // Availability checking
    if (checkIn && checkOut) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const isBooked = await findBookingCollisions(hotel._id, checkIn, checkOut);
                return {
                    ...hotel,
                    isBooked
                };
            })
        );
    }

    return replaceMongoIdInArray(allHotels);
};

export const getSingleHotel = async (id, checkIn = "", checkOut = "") => {
    await connectDB();

    const hotel = await HotelsModel.findById(id).lean();
    if (!hotel) return null;

    let isBooked = false;
    if (checkIn && checkOut) {
        isBooked = await findBookingCollisions(id, checkIn, checkOut);
    }

    return replaceMongoIdInObject({
        ...hotel,
        isBooked
    });
};

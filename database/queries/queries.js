import { replaceMongoIdInArray } from "@/utils";
import { HotelsModel } from "../models/hotels-model"

export const getAllHotels = async () => {
    const allHotels = await HotelsModel.find()
        .select((["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"]))
        .lean();
    return replaceMongoIdInArray(allHotels);
}
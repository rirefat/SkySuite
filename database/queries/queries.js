import { replaceMongoIdInArray } from "@/utils";
import { HotelsModel } from "../models/hotels-model"

export const getAllHotels = async()=>{
    const allHotels = await HotelsModel.find().lean();
    return replaceMongoIdInArray(allHotels);
}
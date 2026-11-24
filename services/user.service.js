import { connectDB } from "@/database/service/mongo";
import { UserModel } from "@/database/models/users-model";
import { replaceMongoIdInObject } from "@/utils";
import mongoose from "mongoose";

/**
 * Service for user data access and profile manipulation.
 */
export const getUserByEmail = async (email) => {
    await connectDB();
    if (!email) return null;

    const user = await UserModel.findOne({ email }).lean();
    return user ? replaceMongoIdInObject(user) : null;
};

export const getUserById = async (id) => {
    await connectDB();
    if (!id || !mongoose.Types.ObjectId.isValid(id.toString())) return null;

    const user = await UserModel.findById(id).select("-password").lean();
    return user ? replaceMongoIdInObject(user) : null;
};

export const updateUserProfile = async (id, updateData) => {
    await connectDB();
    if (!id || !mongoose.Types.ObjectId.isValid(id.toString())) {
        throw new Error("Invalid User ID");
    }

    const { name, image } = updateData;
    const updatePayload = {};
    if (name) updatePayload.name = name;
    if (image) updatePayload.image = image;

    const updated = await UserModel.findByIdAndUpdate(
        id,
        { $set: updatePayload },
        { new: true, runValidators: true }
    ).select("-password").lean();

    return updated ? replaceMongoIdInObject(updated) : null;
};

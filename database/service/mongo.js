import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const connect = mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING));
        console.log("DB connected");
        return connect;
    } catch (err) {
        console.error(err);
    }
}
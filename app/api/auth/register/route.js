import { UserModel } from "@/database/models/users-model";
import { connectDB } from "@/database/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        await connectDB();
        const { fname, lname, email, password } = await request.json();

        if (!email || !password || !fname) {
            return new NextResponse("First name, email, and password are required.", { status: 400 });
        }

        const normalizedEmail = email.toLowerCase().trim();
        const existingUser = await UserModel.findOne({ email: normalizedEmail }).lean();

        if (existingUser) {
            return new NextResponse("User already exists with this email address.", { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            name: `${fname} ${lname || ""}`.trim(),
            email: normalizedEmail,
            password: hashedPassword,
        };

        await UserModel.create(newUser);

        return NextResponse.json(
            { success: true, message: "User created successfully." },
            { status: 201 }
        );
    } catch (err) {
        return new NextResponse(err.message || "Internal server error", {
            status: 500
        });
    }
};

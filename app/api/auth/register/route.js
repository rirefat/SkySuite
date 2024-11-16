import { UserModel } from "@/database/models/users-model";
import { connectDB } from "@/database/service/mongo";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    await connectDB();
    const { fname, lname, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword,
    }

    try {
        await UserModel.create(newUser);
        return new NextResponse("New user has been created.", {
            status: 201
        })
    } catch (err) {
        return new NextResponse(err.message, {
            status: 500
        })
    }
};

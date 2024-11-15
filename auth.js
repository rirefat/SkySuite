import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./database/lib/mongoClientPromise";
import { UserModel } from "./database/models/users-model";

export const {
    handlers: { GET, POST },
    signIn,
    signOut,
    auth
} = NextAuth({
    adapter: MongoDBAdapter(client),
    session: { strategy: "jwt" },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials) {
                if (credentials === null) return null;

                try {
                    const user = await UserModel.findOne({ email: credentials?.email });

                    if (user) {
                        const isMatch = user?.email === credentials?.password;

                        if (isMatch) {
                            return user;
                        } else {
                            throw new Error("Wrong email or password!")
                        }

                    } else {
                        throw new Error("User not found!");
                    }

                } catch (error) {
                    throw new Error(error);
                }
            }
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        Facebook({
            clientId: process.env.AUTH_FACEBOOK_ID,
            clientSecret: process.env.AUTH_FACEBOOK_SECRET
        }),

    ]
})
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./database/lib/mongoClientPromise";
import { UserModel } from "./database/models/users-model";
import { connectDB } from "./database/service/mongo";

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
                if (!credentials?.email || !credentials?.password) return null;

                try {
                    await connectDB();
                    const user = await UserModel.findOne({ email: credentials.email }).lean();

                    if (!user) {
                        throw new Error("User not found!");
                    }

                    const isMatch = await bcrypt.compare(credentials.password, user.password);

                    if (!isMatch) {
                        throw new Error("Wrong email or password!");
                    }

                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        image: user.image
                    };

                } catch (error) {
                    throw new Error(error.message || error);
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
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id || token.sub;
            }
            return session;
        }
    }
});

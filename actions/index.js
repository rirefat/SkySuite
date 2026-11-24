'use server';
import { signIn, auth } from "@/auth";
import { createHotelReview } from "@/services/review.service";
import { updateUserProfile } from "@/services/user.service";
import { revalidatePath } from "next/cache";

export const login = async (formData) => {
    try {
        const response = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false,
        });

        return response;
    } catch (error) {
        throw new Error(error.message || error);
    }
};

export const addReviewAction = async (hotelId, formData) => {
    const session = await auth();
    if (!session?.user) {
        throw new Error("You must be logged in to submit a review.");
    }

    const review = formData.get("review");
    const rating = formData.get("rating") || 5;
    const userName = session.user.name || formData.get("name") || "Guest";
    const userId = session.user.id;

    if (!review) {
        throw new Error("Review text is required.");
    }

    const newReview = await createHotelReview({
        hotelId,
        userId,
        userName,
        review,
        rating
    });

    revalidatePath(`/hotels/${hotelId}`);
    return { success: true, data: newReview };
};

export const updateProfileAction = async (formData) => {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("Unauthorized.");
    }

    const name = formData.get("name");
    const image = formData.get("image");

    const updatedUser = await updateUserProfile(session.user.id, { name, image });
    revalidatePath(`/user/${session.user.id}`);
    return { success: true, user: updatedUser };
};

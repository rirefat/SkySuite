import { auth } from "@/auth";
import { getUserById, getUserByEmail } from "@/services/user.service";
import { redirect, notFound } from "next/navigation";
import UserProfileCard from "@/components/user/UserProfileCard";

export default async function UserProfilePage(props) {
    const params = await props.params;
    const { id } = params;
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    let user = null;
    if (id && id !== 'me' && id !== 'profile') {
        user = await getUserById(id);
    }
    if (!user && session.user.email) {
        user = await getUserByEmail(session.user.email);
    }

    if (!user) {
        notFound();
    }

    const isSelf = session.user.email === user.email;

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center py-24 px-4">
            <UserProfileCard user={user} isSelf={isSelf} />
        </section>
    );
}

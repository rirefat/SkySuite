import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";

export default function RegistrationPage() {
    return (
        <section className="h-screen grid place-items-center">
            <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md shadow-md bg-white">
                <h4 className="font-bold text-2xl text-center">Sign Up</h4>
                <RegistrationForm />
                <SocialLogins />
            </div>
        </section>
    );
}

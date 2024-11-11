import RegistrationForm from "@/components/auth/RegistrationForm";
import SocialLogins from "@/components/auth/SocialLogins";

export default function RegistrationPage() {
    return (
        <section class="h-screen grid place-items-center">
            <div class="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
                <h4 class="font-bold text-2xl">Sign up</h4>
                <RegistrationForm />
                <SocialLogins />
            </div>
        </section>
    );
}
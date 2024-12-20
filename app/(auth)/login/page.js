import LoginForm from "@/components/auth/LoginForm";
import SocialLogins from "@/components/auth/SocialLogins";

export default function LoginPage() {
    return (
        <>
            <section className="h-screen grid place-items-center">
                <div className="max-w-[440px] w-full mx-auto p-6 border border-gray-700/20 rounded-md shadow-md">
                    <h4 className="font-bold text-2xl text-center">Sign In</h4>
                    {/* Login form */}
                    <LoginForm />

                    {/* Social Login area */}
                    <SocialLogins />
                </div>
            </section>
        </>
    );
}
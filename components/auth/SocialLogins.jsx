"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialLogins = () => {
  const handleGoogleAuth = () => {
    signIn("google", { callbackUrl: "/bookings" });
  };

  const handleFacebookAuth = () => {
    signIn("facebook", { callbackUrl: "/bookings" });
  };

  return (
    <div className="flex gap-4">
      <button
        type="button"
        onClick={handleFacebookAuth}
        className="hover:shadow-md w-full mt-4 py-2 border-gray-300 border rounded-md flex items-center gap-2 justify-center text-sm font-medium transition"
      >
        <Image src="/fb.png" alt="facebook" width={22} height={22} />
        <span>Facebook</span>
      </button>
      <button
        type="button"
        onClick={handleGoogleAuth}
        className="hover:shadow-md w-full mt-4 py-2 border-gray-300 border rounded-md flex items-center gap-2 justify-center text-sm font-medium transition"
      >
        <Image src="/google.png" alt="google" width={22} height={22} />
        <span>Google</span>
      </button>
    </div>
  );
};

export default SocialLogins;

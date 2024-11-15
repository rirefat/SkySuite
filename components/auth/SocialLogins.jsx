"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialLogins = () => {

  const handleGoogleAuth = () => {
    signIn("google", { callbackUrl: `${process.env.NEXT_PUBLIC_ROOT_PAGE}/bookings` });
  }

  const handleFacebookAuth = () => {
    signIn("facebook", { callbackUrl: `${process.env.NEXT_PUBLIC_ROOT_PAGE}/bookings` });
  }
  console.log(process.env.NEXT_PUBLIC_ROOT_PAGE);
  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={handleFacebookAuth}
          className="hover:shadow-lg w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center">
          <Image src="/fb.png" alt="facebook" width={25} height={24} />
          <span>Facebook</span>
        </button>
        <button
          onClick={handleGoogleAuth}
          className="hover:shadow-lg w-full mt-4 py-2 border-gray-600/30 border rounded-md flex items-center gap-2 justify-center"
        >
          <Image src="/google.png" alt="google" width={25} height={24} />
          <span>Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialLogins;

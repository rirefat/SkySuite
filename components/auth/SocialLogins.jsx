'use client'
import { signIn } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";

const SocialLogins = () => {

  const handleGoogleAuth = () => {
    signIn('google', { callbackUrl: `${process.env.ROOT_PAGE}/bookings` });
  }

  const handleFacebookAuth = () => {

  }

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

'use client';
import { signOut } from "next-auth/react";

const LogoutBTN = () => {
    const handleLogOut = () => {
        signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_ROOT_PAGE}/login` });
    }

    return (
        <button onClick={handleLogOut} className="login shadow-lg hover:shadow-blue-400 transition duration-300">Logout</button>
    );
};

export default LogoutBTN;
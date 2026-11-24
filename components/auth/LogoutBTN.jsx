'use client';
import { signOut } from "next-auth/react";

const LogoutBTN = () => {
    const handleLogOut = () => {
        signOut({ callbackUrl: '/login' });
    };

    return (
        <button
            onClick={handleLogOut}
            className="login shadow-lg hover:shadow-blue-400 transition duration-300 text-sm"
        >
            Logout
        </button>
    );
};

export default LogoutBTN;

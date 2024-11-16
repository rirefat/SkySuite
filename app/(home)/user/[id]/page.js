'use client'
import { useState } from "react";

const UserProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
        address: "123 Main Street, Anytown, USA",
    });

    const [tempUserInfo, setTempUserInfo] = useState({ ...userInfo });

    const handleEditToggle = () => {
        if (isEditing) {
            setTempUserInfo(userInfo); // Revert changes if editing is canceled
        }
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempUserInfo({ ...tempUserInfo, [name]: value });
    };

    const handleSave = () => {
        setUserInfo(tempUserInfo); // Save the changes
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6">User Profile</h1>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={tempUserInfo.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{userInfo.name}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={tempUserInfo.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{userInfo.email}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        {isEditing ? (
                            <input
                                type="tel"
                                name="phone"
                                value={tempUserInfo.phone}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{userInfo.phone}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="address"
                                value={tempUserInfo.address}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{userInfo.address}</p>
                        )}
                    </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                    {isEditing ? (
                        <>
                            <button
                                onClick={handleSave}
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                            >
                                Save
                            </button>
                            <button
                                onClick={handleEditToggle}
                                className="bg-gray-400 text-white px-4 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={handleEditToggle}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;

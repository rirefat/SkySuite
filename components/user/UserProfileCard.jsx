'use client';
import { useState } from "react";
import Image from "next/image";
import { updateProfileAction } from "@/actions";

const UserProfileCard = ({ user, isSelf }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.name || "");
    const [statusMessage, setStatusMessage] = useState("");
    const [saving, setSaving] = useState(false);

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setStatusMessage("");

        try {
            const formData = new FormData();
            formData.set("name", name);
            const res = await updateProfileAction(formData);
            if (res.success) {
                setStatusMessage("Profile updated successfully!");
                setIsEditing(false);
            }
        } catch (err) {
            setStatusMessage(err.message || "Failed to update profile.");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg border border-gray-100">
            <div className="flex flex-col items-center mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-primary/20 bg-gray-100">
                    <Image
                        src={user?.image || "/user.png"}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
                <p className="text-sm text-gray-500">{user?.email}</p>
            </div>

            {statusMessage && (
                <div className="p-3 mb-4 text-sm text-center rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {statusMessage}
                </div>
            )}

            {isEditing ? (
                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label htmlFor="nameInput" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="nameInput"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email (Cannot be modified)</label>
                        <input
                            type="email"
                            disabled
                            value={user?.email || ""}
                            className="w-full mt-1 p-2 border border-gray-200 rounded-md bg-gray-50 text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    <div className="flex justify-end space-x-3 pt-2">
                        <button
                            type="button"
                            onClick={() => {
                                setName(user?.name || "");
                                setIsEditing(false);
                            }}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={saving}
                            className="btn-primary text-sm px-4 py-2 disabled:opacity-50"
                        >
                            {saving ? "Saving..." : "Save Changes"}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account Status</span>
                        <p className="text-sm font-medium text-green-700 mt-1">Active Customer</p>
                    </div>

                    {isSelf && (
                        <div className="pt-2 text-center">
                            <button
                                onClick={() => setIsEditing(true)}
                                className="btn-primary w-full py-2"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserProfileCard;

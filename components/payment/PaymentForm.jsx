'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ userInfo, hotelInfo, checkIn, checkOut, cost }) => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        try {
            const hotelId = hotelInfo?.id;
            const userId = userInfo?.id;

            if (!checkIn || !checkOut) {
                throw new Error("Check-in and check-out dates are required.");
            }

            const res = await fetch('/api/auth/payment', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    hotelId,
                    userId,
                    checkIn,
                    checkOut
                })
            });

            if (!res.ok) {
                const message = await res.text();
                throw new Error(message || "Payment and booking failed.");
            }

            router.push('/bookings');
            router.refresh();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {error && (
                <div className="p-3 my-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md text-center">
                    {error}
                </div>
            )}
            <form className="my-6 space-y-4" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name" className="block font-semibold text-sm text-gray-700">Full Name</label>
                    <input
                        readOnly
                        type="text"
                        id="name"
                        defaultValue={userInfo?.name || ""}
                        className="w-full mt-1 border border-gray-300 bg-gray-50 py-2 px-3 rounded-md capitalize text-gray-700 cursor-not-allowed"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-semibold text-sm text-gray-700">Email Address</label>
                    <input
                        readOnly
                        defaultValue={userInfo?.email || ""}
                        type="email"
                        id="email"
                        className="w-full mt-1 border border-gray-300 bg-gray-50 py-2 px-3 rounded-md text-gray-700 cursor-not-allowed"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="checkIn" className="block font-semibold text-sm text-gray-700">Check In</label>
                        <input
                            readOnly
                            type="date"
                            name="checkIn"
                            id="checkIn"
                            defaultValue={checkIn}
                            className="w-full mt-1 border border-gray-300 bg-gray-50 py-2 px-3 rounded-md text-gray-700 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label htmlFor="checkOut" className="block font-semibold text-sm text-gray-700">Check Out</label>
                        <input
                            readOnly
                            type="date"
                            name="checkOut"
                            id="checkOut"
                            defaultValue={checkOut}
                            className="w-full mt-1 border border-gray-300 bg-gray-50 py-2 px-3 rounded-md text-gray-700 cursor-not-allowed"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="cost" className="block font-semibold text-sm text-gray-700">Total Price ($)</label>
                    <input
                        readOnly
                        defaultValue={`$${cost}`}
                        type="text"
                        id="cost"
                        className="w-full mt-1 border border-gray-300 bg-gray-50 py-2 px-3 rounded-md font-bold text-gray-800 cursor-not-allowed"
                    />
                </div>

                <div>
                    <label htmlFor="card" className="block font-semibold text-sm text-gray-700">Card Number (Simulated)</label>
                    <input
                        required
                        type="text"
                        id="card"
                        placeholder="4242 •••• •••• 4242"
                        className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="expiry" className="block font-semibold text-sm text-gray-700">Expiry Date</label>
                        <input
                            required
                            type="text"
                            id="expiry"
                            placeholder="MM/YY"
                            className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="cvv" className="block font-semibold text-sm text-gray-700">CVV</label>
                        <input
                            required
                            type="text"
                            id="cvv"
                            placeholder="123"
                            className="w-full mt-1 border border-gray-300 py-2 px-3 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-3 mt-4 disabled:opacity-50"
                >
                    {loading ? "Processing Reservation..." : `Confirm & Pay ($${cost})`}
                </button>
            </form>
        </>
    );
};

export default PaymentForm;

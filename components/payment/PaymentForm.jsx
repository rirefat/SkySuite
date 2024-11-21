'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const PaymentForm = ({ userInfo, hotelInfo, checkIn, checkOut, cost }) => {
    const [error, setError] = useState('');
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const hotelId = hotelInfo?.id;
            const userId = userInfo?.id;

            const res = await fetch('/api/auth/payment', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    hotelId, userId, checkIn, checkOut
                })
            })

            res.status === 201 && router.push('/bookings')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <>
            <div className="text-xl text-red-500 text-center">{error && error}</div>
            <form className="my-8" onSubmit={onSubmit}>
                <div className="my-4 space-y-2">
                    <label htmlFor="name" className="block font-semibold">Name</label>
                    <input required
                        type="text"
                        id="name"
                        value={userInfo?.name}
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md capitalize"
                    />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="email" className="block font-semibold">Email</label>
                    <input required
                        value={userInfo?.email}
                        type="email"
                        id="email"
                        className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                    />
                </div>

                <div className="my-4 space-y-2">
                    <span className="font-semibold">Check in</span>
                    <h4 className="mt-2">
                        <input required type="date" name="checkIn" id="checkIn" value={checkIn} />
                    </h4>
                </div>

                {/* Check out  */}
                <div className="my-4 space-y-2">
                    <span className="font-semibold">Checkout</span>
                    <h4 className="mt-2">
                        <input required type="date" name="checkOut" id="checkOut" value={checkOut} />
                    </h4>
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="cost" className="block font-semibold">Total Cost</label>
                    <input required value={cost} type="text" id="cost" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="card" className="block font-semibold">Card Number</label>
                    <input required type="text" id="card" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="expiry" className="block font-semibold">Expiry Date</label>
                    <input required type="text" id="expiry" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
                </div>

                <div className="my-4 space-y-2">
                    <label htmlFor="cvv" className="block font-semibold">CVV</label>
                    <input required type="text" id="cvv" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
                </div>

                <button type="submit" className="btn-primary w-full">Pay Now (${cost})</button>
            </form>
        </>
    );
};

export default PaymentForm;
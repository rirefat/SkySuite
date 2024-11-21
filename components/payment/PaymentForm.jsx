const PaymentForm = async ({ userInfo, hotelInfo, checkIn, checkOut,cost }) => {

    return (
        <form className="my-8">
            <div className="my-4 space-y-2">
                <label htmlFor="name" className="block font-semibold">Name</label>
                <input
                    type="text"
                    id="name"
                    value={userInfo?.name}
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md capitalize"
                />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="email" className="block font-semibold">Email</label>
                <input
                    value={userInfo?.email}
                    type="email"
                    id="email"
                    className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
                />
            </div>

            <div className="my-4 space-y-2">
                <span className="font-semibold">Check in</span>
                <h4 className="mt-2">
                    <input type="date" name="checkin" id="checkin" value={checkIn} />
                </h4>
            </div>

            {/* Check out  */}
            <div className="my-4 space-y-2">
                <span className="font-semibold">Checkout</span>
                <h4 className="mt-2">
                    <input type="date" name="checkout" id="checkout" value={checkOut} />
                </h4>
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="cost" className="block font-semibold">Total Cost</label>
                <input value={cost} type="text" id="cost" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="card" className="block font-semibold">Card Number</label>
                <input type="text" id="card" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="expiry" className="block font-semibold">Expiry Date</label>
                <input type="text" id="expiry" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
            </div>

            <div className="my-4 space-y-2">
                <label htmlFor="cvv" className="block font-semibold">CVV</label>
                <input type="text" id="cvv" className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md" />
            </div>

            <button type="submit" className="btn-primary w-full">Pay Now ($10)</button>
        </form>
    );
};

export default PaymentForm;
'use client';
import { useState } from "react";
import { addReviewAction } from "@/actions";

const ReviewForm = ({ hotelId, userName }) => {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            await addReviewAction(hotelId, formData);
            setSuccess(true);
            e.target.reset();
        } catch (err) {
            setError(err.message || "Failed to submit review.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-lg mb-4">Leave a Review</h3>

            {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-md">{error}</div>}
            {success && <div className="p-3 mb-4 text-sm text-green-700 bg-green-100 rounded-md">Thank you! Your review has been recorded.</div>}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={userName || ""}
                        required
                        className="border border-gray-300 w-full p-2 mt-1 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                    <select id="rating" name="rating" defaultValue="5" className="border border-gray-300 w-full p-2 mt-1 rounded-md">
                        <option value="5">⭐⭐⭐⭐⭐ (5 - Exceptional)</option>
                        <option value="4">⭐⭐⭐⭐ (4 - Very Good)</option>
                        <option value="3">⭐⭐⭐ (3 - Average)</option>
                        <option value="2">⭐⭐ (2 - Poor)</option>
                        <option value="1">⭐ (1 - Disappointing)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="review" className="block text-sm font-medium text-gray-700">Your Review</label>
                    <textarea
                        id="review"
                        name="review"
                        rows="4"
                        required
                        placeholder="Write your review here..."
                        className="border border-gray-300 w-full p-2 mt-1 rounded-md"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:opacity-50"
                >
                    {submitting ? "Submitting Review..." : "Submit Review"}
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;

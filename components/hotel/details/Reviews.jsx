'use client'
import { useState } from "react";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "John Doe",
      text: "The stay was comfortable and the staff were friendly!",
      rating: 4,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Amazing location and great value for money.",
      rating: 5,
    },
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      id: reviews.length + 1,
      name: e.target.name.value,
      text: e.target.review.value,
      rating: parseInt(e.target.rating.value, 10),
    };

    setReviews([...reviews, newReview]);
    e.target.reset();
  };

  return (
    <section className="container py-8">
      <h2 className="font-bold text-xl my-4">Reviews</h2>

      {/* Reviews List */}
      <div id="reviews-list" className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded-md">
            <p className="font-semibold">{review.name}</p>
            <p className="text-gray-600 italic">&quot;{review.text}&quot;</p>
            <div className="flex items-center gap-1 mt-2">
              <span className="text-yellow-500">
                {"⭐".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </span>
              <span className="text-gray-500 text-sm">({review.rating}.0)</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add a Review Form */}
      <div className="mt-8">
        <h3 className="font-bold text-lg mb-4">Leave a Review</h3>
        <form id="review-form" className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block font-medium">
              Rating (1-5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="1"
              max="5"
              required
              className="border w-full p-2 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="review" className="block font-medium">
              Your Review
            </label>
            <textarea
              id="review"
              name="review"
              rows="4"
              required
              className="border w-full p-2 rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="btn-primary w-full">
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewsSection;

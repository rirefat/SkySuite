import { getHotelReviews } from "@/services/review.service";
import { auth } from "@/auth";
import Link from "next/link";
import ReviewForm from "./ReviewForm";

const Reviews = async ({ id }) => {
  const reviews = await getHotelReviews(id);
  const session = await auth();

  return (
    <section className="container py-8" id="reviews">
      <h2 className="font-bold text-2xl my-4">Guest Reviews ({reviews.length})</h2>

      {/* Reviews List */}
      <div id="reviews-list" className="space-y-4">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="p-4 border border-gray-100 rounded-lg shadow-sm bg-white">
              <div className="flex justify-between items-center mb-1">
                <p className="font-semibold text-gray-800">{review.userName || "Verified Guest"}</p>
                <span className="text-xs text-gray-400">
                  {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : ""}
                </span>
              </div>
              <p className="text-gray-600 italic">&quot;{review.review}&quot;</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500">
                  {"⭐".repeat(Math.min(5, Math.max(1, review.rating || 5)))}
                </span>
                <span className="text-gray-500 text-sm">({review.rating || 5}.0)</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic bg-gray-50 p-4 rounded-md border border-gray-100">
            No reviews yet. Be the first to share your experience!
          </p>
        )}
      </div>

      {/* Leave Review Area */}
      <div className="mt-8">
        {session?.user ? (
          <ReviewForm hotelId={id} userName={session.user.name} />
        ) : (
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-md text-center">
            <p className="text-blue-900 font-semibold mb-2">Have you stayed here?</p>
            <p className="text-sm text-blue-700 mb-4">Sign in to share your experience and review this hotel.</p>
            <Link href={`/login?callbackUrl=/hotels/${id}#reviews`} className="btn-primary inline-block">
              Log in to Leave a Review
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;

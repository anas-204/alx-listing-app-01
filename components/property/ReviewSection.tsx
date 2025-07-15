import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  if (reviews.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <p className="text-gray-600">No reviews yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-6">Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-start space-x-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold">{review.name}</h4>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex items-center mt-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
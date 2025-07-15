import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(1);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(e.target.value);
    if (checkOut) {
      const diffTime = Math.abs(new Date(checkOut).getTime() - new Date(e.target.value).getTime());
      setNights(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    }
  };

  const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(e.target.value);
    if (checkIn) {
      const diffTime = Math.abs(new Date(e.target.value).getTime() - new Date(checkIn).getTime());
      setNights(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">${price.toLocaleString()}</h3>
        <span className="text-gray-600">per night</span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={checkIn}
            onChange={handleCheckInChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={checkOut}
            onChange={handleCheckOutChange}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 mb-4">
        <div className="flex justify-between mb-2">
          <span>${price.toLocaleString()} x {nights} nights</span>
          <span>${(price * nights).toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${(price * nights).toLocaleString()}</span>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-medium transition duration-150">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
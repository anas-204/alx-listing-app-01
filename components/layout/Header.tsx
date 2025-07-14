import React from 'react';

const Header: React.FC = () => {
  const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Beachfront', 'City', 'Mountain'];

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">StayFinder</div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600">Sign In</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Sign Up
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for properties..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-1 rounded-md">
              Search
            </button>
          </div>
        </div>

        <div className="mt-4 flex space-x-4 overflow-x-auto pb-2">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="whitespace-nowrap px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
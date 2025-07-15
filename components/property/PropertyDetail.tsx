import { PropertyProps } from "@/interfaces";
import { useState } from "react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 mb-6">
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{property.rating}</span>
        </div>
        <span>·</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {property.images?.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${property.name} ${index}`}
            className={`w-full h-64 object-cover rounded-lg ${index === 0 ? 'md:col-span-2 h-80' : ''}`}
          />
        ))}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab("description")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "description" ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("offers")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "offers" ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            What we offer
          </button>
          <button
            onClick={() => setActiveTab("host")}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "host" ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
          >
            About host
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        {activeTab === "description" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">About this place</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>
        )}
        {activeTab === "offers" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {property.category.map((amenity, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === "host" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">About the host</h2>
            <div className="flex items-center space-x-4">
              <img 
                src="https://example.com/host.jpg" 
                alt="Host" 
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-600">Superhost · 5 years hosting</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Our host is dedicated to providing exceptional service and ensuring your stay is comfortable and memorable.
            </p>
          </div>
        )}
      </div>

      {/* Amenities */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <span>🛏️</span>
            <span>{property.offers.bed} beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🚿</span>
            <span>{property.offers.shower} bathrooms</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>👥</span>
            <span>Sleeps {property.offers.occupants}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
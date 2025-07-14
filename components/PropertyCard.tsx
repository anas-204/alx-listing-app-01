import React from 'react';
import { PropertyProps } from '../interfaces';

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  rating,
  price,
  image,
  discount,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-bold">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mt-1">
          {address.city}, {address.country}
        </p>
        <p className="mt-2 font-bold">
          ${price.toLocaleString()}
          <span className="text-gray-500 font-normal"> / night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
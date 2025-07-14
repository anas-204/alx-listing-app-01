import React, { useState } from 'react';
import Head from 'next/head';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import PropertyCard from '../components/PropertyCard';
import Pill from '../components/Pill';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filters = ['Top Villa', 'Self Checkin', 'Luxury', 'Beachfront', 'Mountain View', 'Pet Friendly'];

  return (
    <>
      <Head>
        <title>StayFinder - Find Your Perfect Stay</title>
        <meta name="description" content="Find your favorite place here!" />
      </Head>

      <section className="relative h-96 flex items-center justify-center bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} {...property} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
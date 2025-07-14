import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StayFinder</h3>
            <p className="text-gray-400">Find your perfect stay anywhere in the world.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Destinations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Reviews</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} StayFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
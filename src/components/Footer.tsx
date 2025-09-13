import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
          <h3 className="text-4xl font-bold mb-4">ECOMMERCE</h3>
          <p className="text-gray-300 mb-6 max-w-sm">
            Ecommerce is a free UI Kit from Paperpillar that you can use for your personal or commercial project.
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Type your email address"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-3xl text-sm focus:outline-none focus:ring-1 focus:ring-white"
            />
            <button className="bg-white text-black px-6 py-3 rounded-3xl hover:bg-gray-200 transition-colors font-medium">
              Submit
            </button>
          </div>
        </div>

        {/* Popular, Menu, Other grouped to the right */}
        <div className="col-span-3 flex justify-end gap-x-20">
          {/* Popular */}
          <div>
            <h4 className="text-base font-bold mb-4 uppercase">Popular</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">T-Shirt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jackets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-base font-bold mb-4 uppercase">Menu</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">All Category</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Special Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Testimonial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h4 className="text-base font-bold mb-4 uppercase">Other</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Tracking Package</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Condition</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

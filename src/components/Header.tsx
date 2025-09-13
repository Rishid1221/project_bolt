import React from 'react';
import { Heart, Search, ShoppingCart, User, ChevronDown } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-gray-100 text-gray-700 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-2 flex justify-between items-center">
          <div className="flex space-x-4">
            <span>English</span>
            <span>Dollar</span>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:text-gray-900 transition-colors">Tracking Package</a>
            <a href="#" className="hover:text-gray-900 transition-colors">FAQ</a>
            <a href="#" className="hover:text-gray-900 transition-colors">About Us</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a>
          </nav>
        </div>
      </div>

      {/* Main navigation and search bar */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">ECOMMERCE</h1>
          </div>

          {/* Search + Categories + Nav */}
          <div className="flex items-center flex-1 ml-8 space-x-4">
            {/* Search */}
            <div className="relative w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search here"
                className="block w-full pl-4 pr-4 py-2 border border-gray-300 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Category Dropdown */}
            <div className="relative hidden md:block">
              <button className="flex items-center space-x-1 px-4 py-1 rounded-lg text-gray-700 hover:text-gray-900 transition-colors">
                <span className="text-sm font-medium">All Category</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>

            {/* Gift Cards + Special Event */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">Gift Cards</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors">Special Event</a>
            </nav>
          </div>

          {/* Action icons */}
          <div className="flex items-center space-x-4 ml-6">
            <button className="text-gray-400 hover:text-green-500 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-green-500 transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-green-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

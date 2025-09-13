import React from 'react';

const Hero: React.FC = () => {
  return (
    
    <section id="home" className="bg-white-50 py-2">
      <div className="max-w-8xl mx-8 px-1 sm:px-2 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Main Hero Section */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-x-hidden h-[600px] shadow-lg">
            {/* Background Image */}
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Woman in summer outfit sitting on a tennis court"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Text Content */}
            <div className="relative z-10 px-4 md:px-6 py-6 flex flex-col justify-start items-start h-full text-white">
              <h2 className="text-6xl md:text-7xl font-bold mb-2 leading-tight">
                Color of<br />
                Summer<br />
                Outfit
              </h2>
              <p className="text-base mb-4 max-w-xs">
                100+ Collections for your outfit inspirations in this summer
              </p>
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm font-semibold tracking-wider shadow-md">
                VIEW COLLECTIONS
              </button>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col space-y-2">
            {/* Outdoor Active Card */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-lg">
              <img
                src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Man cycling in the city"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-2">
                <h3 className="text-3xl font-bold text-white">
                  Outdoor<br />
                  Active
                </h3>
              </div>
            </div>

            {/* Casual Comfort Card */}
            <div className="relative rounded-3xl overflow-hidden h-full shadow-lg">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Woman in a red sweatshirt against a white background"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative z-10 p-2">
                <h3 className="text-3xl font-bold text-white">
                  Casual<br />
                  Comfort
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Hero Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 p-1">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-5xl font-semibold text-gray-900 mb-2 leading-tight">
              Casual<br />
              Inspirations
            </h2>
            <p className="text-gray-600 mb-2 max-w-sm">
              Our favorite combinations for casual outfits that can inspire you to apply on your daily activity.
            </p>
            <button className="text-sm font-medium text-gray-900 border border-gray-400 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">
              BROWSE INSPIRATIONS
            </button>
          </div>

          {/* Middle Column: "Say it with Shirt" Card */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-lg group">
            <img
              src="https://images.pexels.com/photos/8372224/pexels-photo-8372224.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Two men in casual shirts"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="relative z-10 p-2 flex flex-col justify-end h-full text-white">
              <h3 className="text-3xl font-semibold mb-1">
                Say it<br />
                with Shirt
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform -rotate-45 transition-transform group-hover:rotate-0"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>

          {/* Right Column: "Funky never get old" Card */}
          <div className="relative rounded-3xl overflow-hidden h-[300px] shadow-lg group md:col-span-1">
            <img
              src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Woman in a funky purple jacket"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="relative z-10 p-2 flex flex-col justify-end h-full text-white">
              <h3 className="text-3xl font-semibold mb-1">
                Funky never<br />
                get old
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform -rotate-45 transition-transform group-hover:rotate-0"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
  );

};

export default Hero;

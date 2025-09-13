import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-(-2xl)"> {/* Reduced top/bottom padding */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative w-full rounded-[50px] overflow-hidden flex" // More rounded corners
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px', // Adjust height as needed
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative z-10 p-6 lg:p-12 w-full lg:w-1/2 flex flex-col justify-center h-full">
            <p className="text-sm font-light text-gray-200 mb-2">What people said</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Love the way they <br/> handle the order.
            </h2>
            <p className="text-gray-200 mb-6 leading-relaxed font-light text-sm md:text-base">
              Very professional and friendly at the same time. They packaged 
              the order on schedule and the detail of their wrapping is top 
              notch. One of my best experience for buying online items. 
              Surely will come back for another purchase.
            </p>
            <p className="text-white font-semibold mb-1">Samantha William</p>
            <p className="text-gray-300 font-light text-xs md:text-sm">Fashion Enthusiast</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

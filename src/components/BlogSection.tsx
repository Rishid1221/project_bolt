import React from 'react';
import { ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-8xl mx-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-5xl font-semibold text-gray-900 mb-2 leading-tight">
            From The Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"> {/* Align items from top */}
          {/* Image */}
          <div className="relative w-full flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Daily outfit styling"
              className="w-full h-full object-cover rounded-3xl"
              style={{ maxHeight: '300px' }} // Ensures image height matches text roughly
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-between lg:pl-8">
            <div>
              <h3 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                How to combine your <br />
                daily outfit to looks <br />
                fresh and cool.
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                Making you don't need to buy new clothes to have looking outfit
                everyday. Maybe what you need is to check your old clothes
                collections. Mix and match is the key.
              </p>
            </div>
            <div>
              <button className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors border border-black px-6 py-2 rounded-full">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

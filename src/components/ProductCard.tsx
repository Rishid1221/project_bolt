import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const getProductImage = () => {
    if (product.images && product.images.length > 0) {
      const imageUrl = product.images[0].replace(/[\[\]"]/g, '');
      if (imageUrl.startsWith('http')) return imageUrl;
    }
    return 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400';
  };

  return (
    <div
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        <img
          src={getProductImage()}
          alt={product.title}
          className="w-full h-[350px] object-cover rounded-[50px] group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-white rounded-full hover:shadow-md transition-shadow z-20"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Add to Cart Overlay */}
      
      </div>

      {/* Text below image */}
      <div className="mt-3 px-1">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-md font-bold text-gray-900 mt-1">${product.price}</p>
     
      </div>
    </div>
  );
};

export default ProductCard;

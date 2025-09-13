import React from 'react';

// Assuming your Category type looks like this
interface Category {
  id: number;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
  loading: boolean;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  loading
}) => {
  if (loading) {
    // A loading skeleton that matches the new layout
    return (
      <div className="flex items-center justify-between mb-8">
        <div className="h-8 w-40 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
        Trending
      </h2>
      
      <div id="categories" className="flex flex-wrap gap-2">
        {/* "All" button is now included */}
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 ease-in-out border ${
            selectedCategory === null
              ? 'bg-black text-white border-black' // Active style
              : 'bg-white text-gray-700 border-gray-400 hover:border-black hover:text-black' // Inactive outlined style
          }`}
        >
          All
        </button>

        {/* Sliced to show only the first 4 categories */}
        {categories.slice(0, 4).map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-200 ease-in-out border ${
              selectedCategory === category.id
                ? 'bg-black text-white border-black' // Active style
                : 'bg-white text-gray-700 border-gray-400 hover:border-black hover:text-black' // Inactive outlined style
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
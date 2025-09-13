import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import ColorFilter from './components/ColorFilter';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import { useProducts } from './hooks/useProducts';
import { useCategories } from './hooks/useCategories';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const { products, loading: productsLoading, error: productsError } = useProducts();
  const { categories, loading: categoriesLoading } = useCategories();

  // Filter products based on search, category, and colors
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        product =>
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== null) {
      filtered = filtered.filter(product => product.category?.id === selectedCategory);
    }

    // Limit to first 20 products for better performance
    return filtered.slice(0, 20);
  }, [products, searchQuery, selectedCategory]);

  if (productsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading products: {productsError}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <Hero />

      {/* Divider line after Hero */}
      <hr className="my-4 border-t border-gray-400 w-21/50 mx-12 opacity-60" />
      
      <main className="max-w-8xl mx-6 px-4 sm:px-6 lg:px-8 py-12">
        {/* Trending Section */}
        <div className="mb-12">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            loading={categoriesLoading}
          />
          
          <ProductGrid products={filteredProducts} loading={productsLoading} />

          {/* Divider line between Products and Color Filter */}
          <hr className="my-4 border-t border-gray-400 w-21/50 mx-2 opacity-60" />
          
          <ColorFilter
            selectedColors={selectedColors}
            onColorChange={setSelectedColors}
          />
        </div>
      </main>

      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;

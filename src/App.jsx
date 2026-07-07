// src/App.jsx
import React, { useState } from 'react';
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import stand1 from './assets/stand1-portraitcrop.jpg';
import stand2 from './assets/stand2-portraitcrop.jpg';
import './App.css'; 

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  // 1. New state for filtering
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Get a list of all unique categories from your products array
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // 3. Filter the products based on the active category and search query
  const filteredProducts = products.filter(product => {
    return (
      (activeCategory === 'All' || product.category === activeCategory) &&
      (searchQuery.toLowerCase() === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  // 4. Pre-sort products by name
  const sortedProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="main-container">
      {/* ... existing left-section code ... */}
      <div className="left-section" style={{ backgroundImage: `url(${stand1})` }} />
      
      <div className="center-section">
        <Navbar 
          setPage={setCurrentPage} 
          currentPage={currentPage}
        />

        <main className="max-w-6xl mx-auto px-4">
          {currentPage === 'home' ? (
            <HomeHero />
          ) : (
            <div className="py-8">
              {/* 5. ADD SEARCH BAR TO SHOP SECTION */}
              <div className="relative mb-8 search-bar"> {/* Apply the new class */}
                <input 
                  type="text"
                  placeholder="Search products..."
                  className="border border-stone/30 rounded-full pl-8 pr-4 py-1.5 w-full focus:outline-none focus:border-sage"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-stone/60">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>

              {/* 4. THE FILTER UI */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border filter-button ${
                      activeCategory === cat 
                        ? 'bg-sage text-white border-sage' 
                        : 'bg-transparent text-stone/60 border-stone/20 hover:border-stone'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              {/* 5. Use sortedProducts instead of products */}
              <div className="products-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {sortedProducts.length > 0 ? (
                  sortedProducts.map((item) => (
                    <ProductCard 
                      key={item.id} 
                      name={item.name}
                      price={item.price}
                      category={item.category}
                      image={item.image}
                      link={item.link}
                    />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10 text-stone/40 italic">
                    No products found in this category yet.
                  </div>
                )}
              </div>
            </div>
          )}
        </main>

        {/* ... existing footer code ... */}
        <footer className="py-20 text-center text-stone/30 text-sm">
          {new Date().getFullYear()} Misa Makes Studio.
        </footer>
      </div>

      <div className="right-section" style={{ backgroundImage: `url(${stand2})` }} />
    </div>
  );
}

export default App;
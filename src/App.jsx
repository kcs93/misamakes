import React, { useState } from 'react'; // 1. Import useState
import { products } from './data/products';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';      // 2. Import Navbar
import HomeHero from './components/HomeHero';  // 3. Import Home

function App() {
  // This 'page' state keeps track of which "screen" we are looking at
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-scale bg-cream text-stone">
      {/* The Navbar is ALWAYS visible */}
      <Navbar setPage={setCurrentPage} currentPage={currentPage} />

      <main className="max-w-6xl mx-auto px-4">
        {/* 4. THE LOGIC: Conditional Rendering */}
        
        {currentPage === 'home' ? (
          // If page is home, show the Hero/Social section
          <HomeHero />
        ) : (
          // If page is NOT home (meaning it's 'shop'), show the products
          <div className="py-8">
            <h2 className="text-3xl font-bold mb-8 text-stone">Shop All</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {products.map((item) => (
                <ProductCard 
                  key={item.id} 
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="py-20 text-center text-stone/30 text-sm">
      {new Date().getFullYear()} Misa Makes Studio.
      </footer>
    </div>
  );
}

export default App;

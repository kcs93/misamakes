// src/components/Navbar.able
import React from 'react';

function Navbar({ setPage, currentPage}) {
  return (
    <nav className="border-b border-stone/10 py-6 mb-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <h2 className="text-xl font-bold text-sage tracking-tighter cursor-pointer" onClick={() => setPage('home')}>
          MISA MAKES
        </h2>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm uppercase tracking-widuyest font-medium text-stone/70">
          <button 
            onClick={() => setPage('home')}
            className={`hover:text-mustard transition-colors cursor-pointer ${currentPage === 'home'  ? 'text-mustard' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setPage('shop')}
            className={`hover:text-mustard transition-colors cursor-pointer ${currentPage === 'shop'  ? 'text-mustard' : ''}`}
          >
            Shop
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

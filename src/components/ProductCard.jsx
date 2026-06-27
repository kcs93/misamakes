// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ name, price, category, image, instagramLink }) { 
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 flex flex-col gap-3">
      {/* The Image */}
      <div className="aspect-square w-full bg-stone-100 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* The Info */}
      <div className="flex flex-col gap-1">
        <p className="text-xs uppercase tracking-widest text-sage font-bold">
          {category}
        </p>
        <h3 className="text-lg font-medium text-stone leading-tight">
          {name}
        </h3>
        <p className="text-mustard font-semibold text-xl">
          ${price}
        
        </p>
      </div>

      {/* THE "DM TO ORDER" BUTTON */}
      {/* This link will take them directly to her Instagram profile or a specific post */}
      <a 
        href={instagramLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-2 w-full py-3 text-center bg-stone/5 hover:bg-sage hover:text-white rounded-xl font-medium transition-all duration-300 text-sm text-stone border border-stone/10 cursor-pointer"
      >
        Inquire via Instagram
      </a>
    </div>
  );
}

export default ProductCard;

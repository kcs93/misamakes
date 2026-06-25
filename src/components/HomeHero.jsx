// src/components/HomeHero.jsx
import React from 'react';

function HomeHero() {
  return (
    <div className="py-20 text-center flex flex-col items-center gap-8">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-stone">Welcome to the Studio.</h1>
        <p className="text-xl text-stone/60 max-w-md mx-auto italic">
          Handmade art, cozy candles, and whimsical charms created by Misa.
        </p>
      </div>

      {/* Social Links Section */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <p className="text-xs uppercase tracking-[0.3em] text-stone/40 font-bold">Follow the journey</p>
        
        <div className="flex gap-6">
          {/* We will use placeholders, but you can swap these for real links later */}
          <a href="https://www.instagram.com/m1samakes/" className="text-sage hover:text-mustard transition-all text-lg font-medium underline decoration-stone/20 underline-offset-8 cursor-pointer">
            Instagram
          </a>
          {/*
          <span className="text-stone/20">|</span>
          <a href="#" className="text-sage hover:text-mustard transition-all text-lg font-medium underline decoration-stone/20 underline-offset-8">
            TikTok
          </a>
          <span className="text-stone/20">|</span>
          <a href="#" className="text-sage hover:text-mustard transition-all text-lg font-medium underline decoration-stone/20 underline-offset-8">
            Etsy
          </a>*/}
        </div>
      </div>
    </div>
  );
}

export default HomeHero;

import React from 'react';
import { Link } from 'react-router';

const HeroFinalSale = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center text-center px-6 overflow-hidden bg-black">
      {/* Textured Background Overlay */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none bg-cover bg-center mix-blend-overlay"
        style={{ 
          backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-matter.png')`,
          backgroundColor: '#0a0a0a'
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        {/* Top Label */}
        <p className="text-red-600 font-serif italic text-3xl md:text-5xl animate-fade-in">
          Black Friday Sale
        </p>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase leading-none tracking-tighter">
          SAVE BIG: <span className="text-red-600">UP TO 60% OFF</span> <br /> ON ALL PRODUCTS
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
          Don't miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It's time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!
        </p>

        {/* Action Button */}
        <div className="pt-6 mb-20">
         <Link to="/shop">
          <button className="bg-[#ff3131] hover:bg-red-700 text-white font-black uppercase tracking-widest px-12 py-5 rounded-sm transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_10px_30px_rgba(255,49,49,0.4)]">
            Shop Deals
          </button>
         </Link>
        </div>
      </div>

      {/* Signature Red Border at the very bottom */}
     
    </section>
  );
};

export default HeroFinalSale;
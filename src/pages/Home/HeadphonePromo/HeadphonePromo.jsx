import React from 'react';
import headphone from "../../../assets/headphones-img-02.jpg";

const HeadphonePromo = () => {
  return (
    <section className="bg-black text-white min-h-[500px] flex items-center justify-center p-6 md:p-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Left Side: Content */}
        <div className="bg-[#0a0a0a] flex flex-col justify-center p-10 md:p-16 space-y-6">
          <h3 className="text-red-500 font-serif italic text-2xl animate-pulse">
            Black Friday Exclusive
          </h3>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
            SAVE BIG: <span className="text-red-600">UP TO <br /> 75% OFF</span> ON <br /> HEADPHONES
          </h1>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm">
            You can trust us to bring you the latest technology at unbeatable prices. 
            Don't miss this limited-time opportunity to upgrade your audio game.
          </p>

          <div className="pt-4">
            <button className="bg-[#ff3131] hover:bg-red-700 text-white font-black uppercase tracking-widest px-10 py-4 rounded-sm transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_5px_15px_rgba(255,49,49,0.3)]">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side: Image with Dynamic Background */}
        <div className="relative bg-[#ffb7c5] flex items-center justify-center min-h-[400px] md:min-h-full group overflow-hidden">
          {/* Subtle overlay/gradient on image side */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-400/20 to-transparent"></div>
          
          {/* Floating Small Icon Effect */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white p-2 shadow-lg rounded-sm z-10 hidden md:block border border-gray-100">
             <img 
               src={headphone} 
               alt="thumbnail" 
               className="w-12 h-12 object-contain"
             />
          </div>

          {/* Main Large Product Image */}
          <img 
            src={headphone}
            alt="Premium Headphones" 
            className="relative z-0 w-[85%] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 group-hover:scale-110"
          />
        </div>

      </div>
    </section>
  );
};

export default HeadphonePromo;
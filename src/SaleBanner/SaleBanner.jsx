import React from 'react';

const SaleBanner = () => {
  return (

    <section className="relative w-full max-w-7xl mx-auto h-[350px] md:h-[500px] flex items-center justify-center bg-[#8b0000] overflow-hidden">
      
      {/* Background Large "SALE" Text */}
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[100px] sm:text-[150px] md:text-[350px] font-black text-black opacity-20 tracking-tighter leading-none">
          SALE
        </h1>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl space-y-3 md:space-y-4">
        
        {/* Top Small Title */}
        <p className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em]">
          Boundless Love For Saving
        </p>

        {/* Main Message */}
        
        <h2 className="text-xl sm:text-2xl md:text-5xl font-medium text-white italic leading-snug md:leading-tight font-serif drop-shadow-lg">
          "We've Scoured The Market For The Finest Products, 
          <span className="hidden md:inline"> Establishing Partnerships With Trusted Brands That Share Our Commitment To Excellence!"</span>
          <span className="md:hidden"> Establishing Partnerships With Trusted Brands!"</span>
        </h2>

        {/* Decorative Small Line */}
        <div className="pt-4 md:pt-6">
          <div className="w-12 md:w-16 h-[2px] bg-white/50 mx-auto"></div>
        </div>
      </div>

      {/* Overlay for Texture */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
    </section>
  );
};

export default SaleBanner;
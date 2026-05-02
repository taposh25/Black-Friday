import React from 'react';

const OfferBanner = () => {
  return (
    <div className="px-10 py-10 bg-black">
    <div 
  className=" relative h-[500px] md:h-[600px] w-full max-w-7xl mx-auto rounded-lg overflow-hidden flex items-center justify-center text-center bg-black"
  style={{ backgroundColor: '#1a1a1a' }}
>

  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <img 
      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" 
      alt="Headphone" 
      className="max-w-full opacity-40 object-contain" 
    />
   
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  
  <div className="relative z-10 px-6">
    <h4 className="text-red-500 font-serif italic text-xl md:text-2xl mb-2">
      Limited-Time Offer
    </h4>
    <h1 className="text-3xl md:text-6xl font-black text-white leading-tight uppercase italic">
      SAVE BIG: UP TO <span className="text-red-600">60% OFF</span> <br /> ON ALL HEADPHONES
    </h1>
    <button className="mt-8 bg-red-600 text-white font-black py-3 px-8 rounded-sm uppercase tracking-widest hover:bg-red-700 transition-all">
      Shop Now
    </button>
  </div>
</div>
    </div>
  );
};

export default OfferBanner;
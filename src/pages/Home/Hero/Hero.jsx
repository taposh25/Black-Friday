import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0a0a0a] overflow-hidden px-6 ">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center z-10 max-w-6xl">
        <p className="text-red-500 font-serif italic text-xl md:text-3xl mb-4 tracking-wide">
          Hurry, Black Friday Is Almost Here!
        </p>
        
       
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mb-10">
        TIME LEFT UNTIL <br /> 
        OUR <span className="text-red-600 inline-block drop-shadow-[0_15px_30px_rgba(220,38,38,0.4)]">
            BIGGEST
        </span> <br /> 
        SALE BEGINS
        </h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="btn btn-lg bg-red-600 hover:bg-red-700 hover:scale-105 border-none text-white px-12 rounded-none font-black uppercase tracking-widest transition-all duration-300 shadow-xl">
            Set Reminder
          </button>
          <button className="btn btn-lg btn-outline border-white/20 text-white hover:bg-white hover:text-black px-12 rounded-none font-black uppercase tracking-widest transition-all duration-300">
            Browse Shop
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
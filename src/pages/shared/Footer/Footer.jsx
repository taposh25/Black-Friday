import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-12 pb-20 px-6 md:px-12 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Info */}
        <div>
           <div className="navbar-start">
        <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase cursor-pointer">
          <span className="text-white font-bold">BLACK</span>
          <span className="text-red-600 font-serif italic drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Friday</span>
        </div>
      </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The ultimate destination for the best Black Friday deals. Join thousands of shoppers and grab your favorites.
          </p>
        </div>
        
        {/* Links */}
        <div className="flex flex-col gap-2">
          <span className="text-white font-bold uppercase text-xs tracking-widest mb-2">Quick Links</span>
          <a className="hover:text-red-500 cursor-pointer transition">Privacy Policy</a>
          <a className="hover:text-red-500 cursor-pointer transition">Terms of Service</a>
          <a className="hover:text-red-500 cursor-pointer transition">Refund Policy</a>
        </div>

        {/* Bottom Red Accents */}
        <div className="flex flex-col gap-4">
          <span className="text-white font-bold uppercase text-xs tracking-widest">Stay Connected</span>
          <div className="flex gap-4">
             <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer">F</div>
             <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer">X</div>
             <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition cursor-pointer">I</div>
          </div>
        </div>
      </div>

      {/* Signature Red Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-900 via-red-600 to-red-900 shadow-[0_-10px_25px_rgba(220,38,38,0.5)]"></div>
      
      <div className="text-center text-[10px] uppercase tracking-widest opacity-50 border-t border-white/5 pt-8">
        &copy; 2026 TradeNest Project. Developed by Taposh.
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';

const OurValues = () => {
  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 space-y-8 order-2 md:order-1">
          <header className="space-y-4">
            <p className="text-red-600 font-serif italic text-2xl md:text-3xl">
              Our Values
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
              OUR VALUES ARE <br /> AT THE HEART OF <br /> EVERYTHING WE <br /> DO
            </h2>
          </header>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Our values are the foundation upon which BlackFridayShop is built. They're not just words on a page; they're the principles that drive our everyday actions and decisions. We are dedicated to upholding these values and ensuring that they shine through in every aspect of your experience with us.
            </p>
            <p className="font-semibold text-gray-300">
              Thank you for choosing BlackFridayShop, where our values meet your expectations.
            </p>
          </div>
        </div>

        {/* Right Side: Image with Framing */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="relative group">
            {/* Background Accent for Image */}
            <div className="absolute -inset-4 border border-red-600/30 rounded-sm translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            
            <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-sm">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
                alt="Our Values Teamwork" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Line */}
      <div className="mt-20 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
    </section>
  );
};

export default OurValues;
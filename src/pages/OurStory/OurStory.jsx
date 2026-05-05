import React from 'react';

const OurStory = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* Left Side: Headline */}
        <div className="space-y-6">
          <p className="text-red-600 font-serif italic text-xl md:text-4xl">
            Our Story
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter">
            OUR STORY IS ONE 
            OF <span className="text-red-600">PASSION <br /> PERSEVERANCE, <br /> AND COMMITMENT</span>
          </h2>
        </div>

        {/* Right Side: Description */}
        <div className="space-y-8 pt-4 lg:pt-20">
          <h3 className="text-xl md:text-2xl font-bold uppercase leading-tight tracking-wide border-l-4 border-red-600 pl-6">
            OUR JOURNEY BEGAN WHEN A GROUP OF DEDICATED INDIVIDUALS, FUELED BY A SHARED LOVE FOR EXCEPTIONAL DEALS AND UNMATCHED SAVINGS, CAME TOGETHER TO CREATE A SHOPPING EXPERIENCE LIKE NO OTHER
          </h3>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p>
              Founded in 2008, BlackFridayShop set out with a simple mission - to make Black Friday accessible to everyone, delivering the thrill of unbeatable discounts to your fingertips. Over the years, we've dedicated ourselves to curating the finest selection of products, from electronics and fashion to home essentials and more, all with one goal in mind: providing you with the ultimate shopping experience.
            </p>
            <p>
              What sets us apart is our relentless pursuit of quality and value. We've scoured the market for the finest products, establishing partnerships with trusted brands that share our commitment to excellence. This dedication ensures that every item you find at BlackFridayShop meets the highest standards of quality.
            </p>
          </div>
        </div>

      </div>

      {/* Signature Red Line at bottom (as seen in image) */}
     
    </section>
  );
};

export default OurStory;
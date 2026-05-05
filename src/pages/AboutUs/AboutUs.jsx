import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden">
     
      <div className="bg-[#0a0a0a] pt-20 pb-10 px-6 text-center">
        <p className="text-red-500 font-serif italic text-2xl mb-2">
          A Few Words
        </p>
        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
          ABOUT US
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        
      </div>

      {/* Fixed Background Section (Parallax) */}
      <div 
        className="relative h-[400px] md:h-[600px] bg-fixed bg-center bg-cover bg-no-repeat "
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070')` 
        }}
      >
        {/* Overlay to make text readable if you add any on the image */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Lower Content / Red Bar */}
      <div className="bg-[#0a0a0a] py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <p className="text-gray-400 text-lg leading-relaxed">
                  We are a team of dedicated enthusiasts bringing you the best tech deals every Black Friday. 
                  Our mission is to provide quality products at prices that are accessible to everyone.
              </p>
          </div>
      </div>

      {/* The Signature Bottom Red Bar from your image */}
     
    </section>
  );
};

export default AboutUs;
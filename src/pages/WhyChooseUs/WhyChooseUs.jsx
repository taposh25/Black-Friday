import React from 'react';
import { BiLock, BiMapPin } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';
import { FiRotateCcw } from 'react-icons/fi';


const WhyChooseUs = () => {
  const features = [
    {
      icon: <BsTruck size={32} className="text-white" />,
      title: "Free Shipping",
      desc: "Enjoy the treat of free shipping on all your Black Friday must-haves."
    },
    {
      icon: <BiLock size={32} className="text-white" />,
      title: "Secure Payments",
      desc: "Shop with confidence knowing that your payments are securely processed for a worry-free experience."
    },
    {
      icon: <BiMapPin size={32} className="text-white" />,
      title: "Order Tracking",
      desc: "Stay in the know with real-time order tracking to ensure your treasures arrive right on time."
    },
    {
      icon: <FiRotateCcw size={32} className="text-white" />,
      title: "Easy Returns",
      desc: "Celebrate worry-free shopping with our hassle-free returns - because we're here for you."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Header */}
        <div className="space-y-6">
          <p className="text-red-600 font-serif italic text-2xl md:text-3xl">
            Why Choose BlackFridayShop?
          </p>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            THE JOY OF <br /> SHOPPING AT <br /> ITS BEST
          </h2>
        </div>

        {/* Right Side: Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {features.map((item, index) => (
            <div key={index} className="space-y-4 group">
              <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider border-b border-transparent group-hover:border-red-600 inline-block pb-1 transition-all">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Signature Red Bar at Bottom */}
      
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { BiLock, BiMapPin } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';


const OrderTrack = () => {
  const features = [
    {
      icon: <BsTruck size={32} className="text-white" />,
      title: "FREE SHIPPING",
      description: "Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy."
    },
    {
      icon: <BiLock size={32} className="text-white" />,
      title: "SECURE PAYMENTS",
      description: "Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping."
    },
    {
      icon: <BiMapPin size={32} className="text-white" />,
      title: "ORDER TRACKING",
      description: "Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep."
    },
    {
      icon: <BiLock size={32} className="text-white" />,
      title: "EASY RETURNS",
      description: "Celebrate worry-free shopping with our hassle-free returns - because we're here to make your shopping experience as smooth as possible."
    }
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Heading */}
        <div className="space-y-4">
          <h4 className="text-red-600 font-serif italic text-xl md:text-2xl">
            Why Choose TradeNest?
          </h4>
          <h2 className="text-5xl md:text-7xl font-black leading-none uppercase italic tracking-tighter">
            THE JOY OF SHOPPING <br /> AT ITS BEST
          </h2>
        </div>

        {/* Right Side: Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black uppercase italic tracking-widest">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OrderTrack;
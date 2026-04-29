import React from "react";
import { Carousel } from "react-responsive-carousel";
import headPhone from "../../../assets/headphone.png";
import iphone from "../../../assets/iphone.png";
import mackBook from "../../../assets/mackbook.webp";
import addidas from "../../../assets/addidas.png";


import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const products = [
    {
      id: 1,
      tag: "Limited Stock",
      title: "SONY WH-1000XM5 BLACK",
      description:
        "Experience unbeatable noise cancellation and pure sound.",
      img: headPhone,
    },
    {
      id: 2,
      tag: "Hot Deal",
      title: "IPHONE 15 PRO MAX - BLACK TITANIUM",
      description:
        "Grab the latest technology with Titanium design.",
      img: iphone,
    },
    {
      id: 3,
      tag: "Best for Work",
      title: "MACBOOK AIR M3 - MIDNIGHT BLACK",
      description:
        "Upgrade your productivity with unstoppable power.",
      img: mackBook,
    },
    {
      id: 4,
      tag: "New Arrival",
      title: "ADIDAS NMD R1 - CORE BLACK",
      description:
        "Step up your style with the comfort of Boost.",
      img: addidas,
    },
    {
      id: 5,
      tag: "Ultimate Speed",
      title: "YAMAHA R1M - CARBON BLACK",
      description:
        "Rule the track with the soul of a champion.",
      img: "https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/emerald/01.png",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] py-10 md:py-16 px-4 md:px-12 relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://www.transparenttextures.com/patterns/dark-matter.png')`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center text-white uppercase tracking-tighter mb-10">
          Featured{" "}
          <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">
            Deals
          </span>
        </h2>

        <Carousel
          autoPlay
          infiniteLoop
          interval={3500}
          transitionTime={900}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          showIndicators={true}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-black border border-white/5 rounded-xl min-h-[500px] md:min-h-[600px] flex items-center"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-14 py-10 w-full">
                {/* Left */}
                <div className="text-center md:text-left space-y-5">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-red-600 uppercase tracking-widest rounded-sm">
                    {product.tag}
                  </span>

                  <h1 className="text-2xl md:text-5xl font-black text-white leading-tight uppercase">
                    {product.title}
                  </h1>

                  <p className="text-gray-400 text-sm md:text-lg max-w-xl mx-auto md:mx-0">
                    {product.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-sm font-bold uppercase transition">
                      Shop Now
                    </button>

                    <button className="border border-white/20 text-white hover:bg-white hover:text-black px-8 py-3 rounded-sm font-bold uppercase transition">
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Right */}
                <div className="relative flex justify-center items-center">
                  <div className="absolute w-52 h-52 bg-red-600/20 blur-[100px] rounded-full"></div>

                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full max-w-[420px] h-[280px] md:h-[420px] object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
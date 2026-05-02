import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "James Oliver",
      stars: "★★★★★",
      comment: "I couldn't be happier with my Black Friday Shop experience. The deals were incredible, and the quality of the products I purchased exceeded my expectations. I was particularly impressed with the seamless shopping process and the quick, hassle-free delivery."
    },
    {
      id: 2,
      name: "Daniel Taylor",
      stars: "★★★★★",
      comment: "Absolutely thrilled with my experience at this online store! The selection is fantastic, the prices are unbeatable, and the customer service is top-notch. I recently purchased a camera, and not only did it arrive quickly, but the quality exceeded my expectations. Highly recommended!"
    }
  ];

  return (
    <section className="relative h-auto py-20 px-4 md:px-16 overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop')` 
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
          <h4 className="text-red-600 font-serif italic text-xl md:text-2xl mb-2">
            What Our Clients Say
          </h4>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            CUSTOMER TESTIMONIALS
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-4">
              <div className="text-yellow-500 text-xl tracking-tighter">
                {review.stars}
              </div>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium italic">
                "{review.comment}"
              </p>
              <h5 className="text-white font-bold text-lg tracking-wide pt-2">
                {review.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
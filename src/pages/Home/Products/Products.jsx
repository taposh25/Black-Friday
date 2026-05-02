import React, { useEffect, useState } from 'react';

import { Link } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosSecure.get('/products');
        setProducts(response.data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-red-600">Loading Products...</div>;
  }

  return (
    <div className="bg-black py-16 px-4 sm:px-8 lg:px-16 min-h-screen">
      {/* Section Header */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter">
            Featured <span className="text-red-600">Products</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mt-2"></div>
        </div>
        <Link to="/shop" className="text-gray-400 hover:text-white uppercase text-xs tracking-widest transition-all">
          View All Shop →
        </Link>
      </div>

      {/* Product Grid - 2 rows of 3 products each on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div 
            key={product._id} 
            className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-600/30 hover:shadow-[0_0_40px_rgba(220,38,38,0.1)]"
          >
            {/* Product Image */}
            <div className="relative aspect-[4/5] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full italic uppercase tracking-tighter">
                NEW ARRIVAL
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-4">
              <div>
                <p className="text-red-600 text-[10px] uppercase tracking-[0.2em] mb-1 font-bold">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-white uppercase tracking-tighter truncate italic">
                  {product.name}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-white italic">${product.price}</span>
                <span className="text-gray-500 text-sm line-through">${(product.price * 1.5).toFixed(2)}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-white text-black font-black py-3 rounded-lg uppercase text-xs tracking-widest hover:bg-red-600 hover:text-white transition-all active:scale-95">
                  Add to Cart
                </button>
                <Link 
                  to={`/products/${product._id}`}
                  className="flex items-center justify-center w-12 h-12 bg-[#111] border border-white/10 rounded-lg hover:border-red-600 transition-all text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
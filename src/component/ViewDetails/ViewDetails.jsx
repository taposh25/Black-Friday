import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ViewDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axiosSecure.get(`/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black text-red-600 font-bold uppercase italic">Loading Product Details...</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center bg-black text-white">Product not found!</div>;

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-16">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-gray-400 hover:text-red-600 transition-all uppercase text-xs tracking-widest font-bold"
      >
        ← Back to Shop
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        
        {/* Left Side: Product Image */}
        <div className="relative group">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 bg-[#111]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          {/* Discount Badge */}
          <div className="absolute top-6 left-6 bg-red-600 text-white font-black px-4 py-1 rounded-full italic shadow-lg">
            -50%
          </div>
        </div>

        {/* Right Side: Product Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="text-red-600 text-sm uppercase tracking-[0.3em] font-bold mb-2">{product.category}</p>
            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
              {product.name}
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-4xl font-black text-white">${product.price}</span>
            <span className="text-gray-600 text-xl line-through">${(product.price * 1.5).toFixed(2)}</span>
            <span className="text-green-500 text-sm uppercase font-bold tracking-widest">Free Shipping</span>
          </div>

          <p className="text-gray-400 leading-relaxed text-lg max-w-xl">
            {product.description || "Experience the pinnacle of design and sound quality. This product is crafted for those who demand excellence in every detail."}
          </p>

          {/* Features List */}
          <ul className="space-y-3 text-sm uppercase tracking-widest text-gray-300">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> No-Risk Money Back Guarantee
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> Secure Payments via SSL
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> 2 Year International Warranty
            </li>
          </ul>

          {/* Action Area */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl uppercase tracking-widest transition-all active:scale-95 shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
              Add to Shopping Cart
            </button>
            <button className="px-10 bg-white hover:bg-gray-200 text-black font-black py-5 rounded-2xl uppercase tracking-widest transition-all">
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Product Specification Tab (Simplified) */}
      <div className="mt-24 border-t border-white/10 pt-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold uppercase italic text-red-600 mb-6 underline underline-offset-8">Description</h3>
        <p className="text-gray-500 leading-loose">
          {product.description} This item has been rigorously tested to meet the high standards of TradeNest. Whether you're a professional or a casual user, our range of products offers the perfect blend of style and performance. Immerse yourself in the quality you love.
        </p>
      </div>
    </div>
  );
};

export default ViewDetails;
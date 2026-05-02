import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { BsArrowDown } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6); 
  const [loading, setLoading] = useState(true);
  const axioSecure = useAxiosSecure();

  
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axioSecure.get('/products'); 
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setLoading(false);
      }
    };
    fetchAllProducts();
  }, []);

 
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 6); 
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-black text-red-600 italic font-black">LOADING SHOP...</div>;

  return (
    <div className="bg-black min-h-screen py-20 px-6 md:px-16">
      {/* Top Header & Search Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
        <div className="text-center md:text-left">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-xl mt-2">Explore our premium collection</p>
        </div>

        {/* Right Side Search Option */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full bg-[#111] border border-white/10 py-4 pl-6 pr-14 text-white rounded-full focus:outline-none focus:border-red-600 transition-all italic"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <BiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div key={product._id} className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-red-600/40 transition-all duration-500">
            <div className="aspect-square overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6">
              <span className="text-red-600 text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
              <h3 className="text-xl font-bold text-white uppercase italic mt-1 truncate">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-black text-white italic">${product.price}</span>
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

      {/* View More Arrow Button */}
      {visibleCount < filteredProducts.length && (
        <div className="mt-20 flex flex-col items-center justify-center space-y-4">
          <p className="text-gray-500 uppercase text-[10px] tracking-[0.5em] font-bold">View More</p>
          <button 
            onClick={handleViewMore}
            className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all animate-bounce shadow-[0_0_30px_rgba(220,38,38,0.4)]"
          >
            <BsArrowDown size={30} />
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 py-20 uppercase tracking-widest">No products found matching your search.</div>
      )}
    </div>
  );
};

export default Shop;
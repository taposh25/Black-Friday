// import React from 'react';
// import { useForm } from 'react-hook-form';

// const NewProducts = () => {
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();

//   const onSubmit = async (data) => {
    
//     console.log("Product Data:", data);
//     alert("Product Added Successfully!");
//     reset();
//   };

//   return (
//     <div className="min-h-screen bg-black text-white p-6 flex justify-center items-center">
//       <div className="w-full max-w-2xl bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-2xl">
//         <h2 className="text-3xl font-bold mb-6 text-center tracking-tight uppercase italic">
//           Add New Product
//         </h2>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
//           {/* Product Name */}
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Product Name</label>
//             <input
//               {...register("name", { required: "Name is required" })}
//               className={`w-full bg-transparent border-b-2 p-3 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-700 focus:border-white'}`}
//               placeholder="e.g. AUDIOSCULPT ELITE"
//             />
//             {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             {/* Price */}
//             <div>
//               <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Price ($)</label>
//               <input
//                 type="number"
//                 {...register("price", { required: "Price is required" })}
//                 className="w-full bg-transparent border-b-2 border-gray-700 focus:border-white p-3 outline-none transition-all"
//                 placeholder="235.00"
//               />
//             </div>

//             {/* Category */}
//             <div>
//               <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Category</label>
//               <select
//                 {...register("category")}
//                 className="w-full bg-[#222] border border-gray-700 p-3 rounded-md outline-none focus:border-white"
//               >
//                 <option value="headphones">Headphones</option>
//                 <option value="electronics">Electronics</option>
//                 <option value="accessories">Accessories</option>
//               </select>
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Description</label>
//             <textarea
//               rows="4"
//               {...register("description", { required: "Description is required" })}
//               className="w-full bg-[#1a1a1a] border border-gray-700 p-4 rounded-xl outline-none focus:border-white transition-all"
//               placeholder="Tell more about the product..."
//             ></textarea>
//           </div>

//           {/* Image URL / Upload */}
//           <div>
//             <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Product Image URL</label>
//             <input
//               {...register("image", { required: "Image link is required" })}
//               className="w-full bg-transparent border-b-2 border-gray-700 focus:border-white p-3 outline-none transition-all"
//               placeholder="https://image-link.com/photo.jpg"
//             />
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4">
//             <button
//               type="submit"
//               className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full transition-transform active:scale-95 uppercase tracking-tighter"
//             >
//               Add Product
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewProducts;




import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const NewProducts = () => {

    const axiossecure = useAxiosSecure();
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  
 
  const imageUrl = watch("image");

  const onSubmit = async (data) => {
  try {
    const productData = {
      name: data.name,
      price: Number(data.price),
      stock: Number(data.stock),
      category: data.category,
      description: data.description,
      image: data.image,
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    // POST to backend
    const res = await axiossecure.post(
      "/products",
      productData
    );

    console.log("Saved:", res.data);

    alert("Product Added Successfully!");
    reset();
  } catch (error) {
    console.log("Error:", error.message);
    alert("Failed to add product!");
  }
};


  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl">
        
        <div className="mb-10">
          <h2 className="text-4xl font-black tracking-tighter uppercase italic text-white">
            Publish <span className="text-red-600">Product</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Fill in the details to list your item on TradeNest.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Column: Details */}
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Product Title</label>
              <input
                {...register("name", { required: "Title is required" })}
                className="w-full bg-[#111] border border-white/10 p-4 rounded-xl outline-none focus:border-red-600 transition-all"
                placeholder="e.g. SONY WH-1000XM5"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Regular Price ($)</label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  className="w-full bg-[#111] border border-white/10 p-4 rounded-xl outline-none focus:border-red-600"
                  placeholder="299"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Stock Quantity</label>
                <input
                  type="number"
                  {...register("stock", { required: true })}
                  className="w-full bg-[#111] border border-white/10 p-4 rounded-xl outline-none focus:border-red-600"
                  placeholder="10"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Category</label>
              <select {...register("category")} className="w-full bg-[#111] border border-white/10 p-4 rounded-xl outline-none">
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="gadgets">Gadgets</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Description</label>
              <textarea
                rows="5"
                {...register("description")}
                className="w-full bg-[#111] border border-white/10 p-4 rounded-xl outline-none focus:border-red-600"
              ></textarea>
            </div>
          </div>

          {/* Right Column: Media & Submit */}
          <div className="space-y-6 flex flex-col justify-between">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2">Image URL</label>
              <input
                {...register("image", { required: "Image link is required" })}
                className="w-full bg-[#111] border border-white/10 p-4 rounded-xl outline-none focus:border-red-600 mb-4"
                placeholder="https://link-to-image.com"
              />
              
              {/* Image Preview Box
              <div className="aspect-square w-full bg-[#111] border-2 border-dashed border-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                {imageUrl ? (
                  <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <p className="text-gray-600 text-xs uppercase tracking-tighter">Preview will appear here</p>
                  </div>
                )}
              </div> */}

{/* Live Preview / Review Card */}
<div className="space-y-4">
  <label className="block text-[10px] uppercase tracking-widest text-gray-500">Live Preview</label>
  
  <div className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 transition-all hover:border-red-600/30 shadow-xl">
    {/* Product Image Area */}
    <div className="aspect-[4/5] w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt="Preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      ) : (
        <div className="flex flex-col items-center gap-2 opacity-20">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-[10px] uppercase tracking-[0.2em]">No Image Provided</p>
        </div>
      )}
      
      {/* Badge Example (like -57% in shop.JPG) */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <p className="text-[10px] font-bold text-white uppercase italic">Black <i>Friday</i> Select</p>
      </div>
    </div>

    {/* Product Info Review */}
    <div className="p-5 space-y-2 bg-gradient-to-t from-black to-transparent">
      <h3 className="text-lg font-bold truncate uppercase tracking-tighter italic">
        {watch("name") || "Your Product Title"}
      </h3>
      
      <div className="flex items-center gap-3">
        <span className="text-red-600 font-black text-xl">
          ${watch("price") || "0.00"}
        </span>
        <span className="text-gray-600 text-xs line-through">
          ${(Number(watch("price")) * 1.5).toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between items-center pt-2">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">
          Category: <span className="text-white">{watch("category")}</span>
        </span>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-600/50"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  <p className="text-[10px] text-center text-gray-600 italic uppercase">
    * This is how your product will appear in the shop.
  </p>
</div>


            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-5 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all uppercase tracking-widest active:scale-95"
            >
              List Product Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProducts;
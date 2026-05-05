import React from 'react';
import { useForm } from 'react-hook-form';
import { BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi';


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <section className="bg-black text-white py-16 md:py-24 px-6 md:px-12 lg:px-24">
      {/* Upper Header Section */}
      <div className="text-center mb-16 md:mb-24">
        <p className="text-red-600 font-serif italic text-2xl md:text-3xl mb-2">Let's Talk</p>
        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
          CONTACT US
        </h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-6"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Information */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">GET IN TOUCH</h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Have questions or need assistance? Click the 'Contact Us' icon to get in touch with our friendly and responsive customer support team.
            </p>
          </div>

          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4 group">
              <BiMapPin className="text-red-600 mt-1 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Address</h4>
                <p className="text-gray-400">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
              </div>
            </div>
            <div className="w-full h-px bg-white/10"></div>

            {/* Phone */}
            <div className="flex items-start gap-4 group">
              <BiPhone className="text-red-600 mt-1 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h4>
                <p className="text-gray-400">(405) 555-0128</p>
              </div>
            </div>
            <div className="w-full h-px bg-white/10"></div>

            {/* Email */}
            <div className="flex items-start gap-4 group">
              <BiMailSend className="text-red-600 mt-1 group-hover:scale-110 transition-transform" size={28} />
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Email</h4>
                <p className="text-gray-400 font-medium">hello@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">First Name *</label>
                <input 
                  {...register("firstName", { required: "First name is required" })}
                  className={`w-full bg-white text-black p-4 focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.firstName ? 'ring-2 ring-red-500' : ''}`}
                />
                {errors.firstName && <p className="text-red-500 text-xs uppercase">{errors.firstName.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider">Last Name *</label>
                <input 
                  {...register("lastName", { required: "Last name is required" })}
                  className={`w-full bg-white text-black p-4 focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.lastName ? 'ring-2 ring-red-500' : ''}`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Email *</label>
              <input 
                type="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
                })}
                className={`w-full bg-white text-black p-4 focus:outline-none focus:ring-2 focus:ring-red-600 ${errors.email ? 'ring-2 ring-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-xs uppercase">{errors.email.message}</p>}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider">Message</label>
              <textarea 
                rows="5"
                {...register("message")}
                className="w-full bg-white text-black p-4 focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase cursor-pointer tracking-[0.2em] py-5 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
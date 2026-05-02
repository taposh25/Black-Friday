import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
  
   const {registerUser, updateUserProfile} = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

//   const handleRegistration = async(data) => {
//     try{
//       const imageFile = data.photo[0];

//       //firebase register
//       await registerUser(data.email, data.password);
//       const user = result.user;
//       console.log(user);

//       //Upload image to imagebb

//       const formData = new FormData();
//       formData.append("image", imageFile);
//       const imgbbKey = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

//       const imgResponse = await axios.post(imgbbKey, formData);
//       const photoURL = imgResponse.data.data.url;
//     }

//       // 3. Update Firebase Profile

//       await updateUserProfile({
//         displaName: data.firstName + " " + data.lastName,
//         photoURL: photoURL,
//       })

//        // 4. Save User to MongoDB
//        const userInfo ={
//         email: data.email,
//         displaName: data.firstName + " "+ data.lastName,
//         photoURL: photoURL,
//        };

//          await axiosSecure.post("/users", userInfo);

//      // 5. Navigate Home
//     navigate(location.state?.from || "/");

//      } catch (error) {
//     console.error("Register Error:", error.message);
//   }
// };

  const handleRegistration = async (data) => {
  try {
    const imageFile = data.photo[0];

    const result = await registerUser(data.email, data.password);
    const user = result.user;
    console.log(user);

    const formData = new FormData();
    formData.append("image", imageFile);

    const imgbbKey = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host}`;

    const imgResponse = await axios.post(imgbbKey, formData);
    const photoURL = imgResponse.data.data.url;

    await updateUserProfile({
      displayName: data.firstName + " " + data.lastName,
      photoURL: photoURL,
    });

    const userInfo = {
      email: data.email,
      displayName: data.firstName + " " + data.lastName,
      photoURL: photoURL,
    };

    await axiosSecure.post("/users", userInfo);

     navigate("/login", { state: { from: "register-success" } });

  } catch (error) {
    console.error("Register Error:", error.message);
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-slate-800 px-4 py-10">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Register and start your journey today
        </p>

        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-5">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Photo Upload */}

                  <div>
          <input
            type="file"
            accept="image/*"
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20"
            {...register("photo", {
              required: "Photo is required",
            })}
          />
          {errors.photo && (
            <p className="text-red-400 text-sm mt-1">
              {errors.photo.message}
            </p>
          )}
        </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            <span
              className="absolute right-4 top-4 text-white cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 outline-none focus:ring-2 focus:ring-cyan-400"
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span
              className="absolute right-4 top-4 text-white cursor-pointer"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition-all duration-300"
          >
            Register Now
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/20"></div>
          <span className="text-gray-300 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-white/20"></div>
        </div>

        {/* Google Register */}
        <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
          <FaGoogle className="text-red-500" />
          Register with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          If you have an account, please{" "}
          <NavLink to="/login" state={location.state}>
            <span className="text-cyan-400 cursor-pointer hover:underline">
            login now
          </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
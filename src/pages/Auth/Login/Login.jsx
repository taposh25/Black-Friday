import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";

const LoginForm = () => {
  const { signInUser, signInGoogle } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // Email/Password Login
  const handleLogin = async (data) => {
    try {
      await signInUser(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      await signInGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800 px-4 py-10">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Login to continue your journey
        </p>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-white/20"></div>
          <span className="text-gray-300 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-white/20"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition"
        >
          <FaGoogle className="text-red-500" />
          Login with Google
        </button>

        {/* Register */}
        <p className="text-center text-gray-300 mt-6 text-sm">
          If you don't have an account, please{" "}
          <NavLink to="/register">
            <span className="text-cyan-400 cursor-pointer hover:underline">
              register now
            </span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
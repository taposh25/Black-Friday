import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {

  const {user, logOutUser} = useAuth();


   const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <nav className="navbar sticky top-0 z-50 backdrop-blur-lg bg-black/80 px-4 md:px-12 border-b border-white/10">
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="text-2xl md:text-3xl font-black tracking-tighter uppercase cursor-pointer">
          <span className="text-white font-bold">BLACK</span>
          <span className="text-red-600 font-serif italic drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Friday</span>
        </div>
      </div>



      <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal gap-2 font-bold text-[12px] uppercase tracking-[0.15em]">
    <li>
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-white'}`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/shop" 
        className={({ isActive }) => 
          `hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-white'}`
        }
      >
        Shop
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/about" 
        className={({ isActive }) => 
          `hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-white'}`
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => 
          `hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-white'}`
        }
      >
        Contact
      </NavLink>
    </li>
    <li>
      <NavLink 
        to="/dashboard" 
        className={({ isActive }) => 
          `text-red-500 border border-red-500/30 rounded-md hover:bg-red-600 hover:text-white transition-all ${isActive ? 'bg-red-600 text-white' : ''}`
        }
      >
        Dashboard
      </NavLink>
    </li>
  </ul>
</div>

      {/* Right: Cart, Login & Avatar */}
      <div className="navbar-end gap-3">
        {/* Cart */}
        <div className="btn btn-ghost btn-circle hover:bg-white/10">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="badge badge-sm indicator-item bg-red-600 border-none text-white text-[10px]">0</span>
          </div>
        </div>

        {/* User Info */}
        <div className="hidden sm:flex items-center gap-3">
                  {
            user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-sm bg-red-600 hover:bg-red-700 border-none text-white px-5 rounded-sm font-bold uppercase text-[12px]"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm bg-red-600 hover:bg-red-700 border-none text-white px-5 rounded-sm font-bold uppercase text-[12px]"
              >
                Login
              </Link>
            )
          }

          <div className="avatar">
            <div className="w-9 h-9 rounded-full ring-2 ring-red-600 ring-offset-2 ring-offset-black">
              <img src={user?.photoURL} alt="User" />
            </div>
          </div>
          

        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-5 shadow-2xl bg-[#111] rounded-box w-64 border border-white/10 gap-4 uppercase font-bold text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login" className="text-red-500">Login / Signup</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
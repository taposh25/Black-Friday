import React from "react";
import SidebarItem from "./SidebarItem";
import {
  FaHome,
  FaBox,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaCog,
  FaTimes,
} from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { NavLink } from "react-router";
import useRole from "../../hooks/useRole";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const {role} = useRole();
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 lg:hidden z-40"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-72 bg-gradient-to-b from-black via-slate-900 to-slate-800 border-r border-white/10 text-white z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h1 className="text-2xl font-black tracking-tight">
            Black <span className="text-cyan-400">Dashboard</span>
          </h1>

          {/* Close button (mobile) */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">
          <SidebarItem to="/dashboard" icon={<FaHome />} label="Home" />
          <SidebarItem to="/dashboard/products" icon={<FaBox />} label="New Products" />
          <SidebarItem to="/dashboard/orders" icon={<FaShoppingCart />} label="Orders" />
          {/* <SidebarItem to="/dashboard/users" icon={<FaUsers />} label="Users" /> */}
          
             {
          role === "admin" && (
            <SidebarItem to="/dashboard/users"  icon={<MdPeople />} label="Users" />
          )
        }
          
          <SidebarItem to="/dashboard/analytics" icon={<FaChartLine />} label="Analytics" />
          <SidebarItem to="/dashboard/settings" icon={<FaCog />} label="Settings" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
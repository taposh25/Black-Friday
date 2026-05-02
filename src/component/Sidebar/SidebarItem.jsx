import React from "react";
import { NavLink } from "react-router";

const SidebarItem = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium
        ${
          isActive
            ? "bg-cyan-500 text-black shadow-lg"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <span className="text-lg">{icon}</span>
      <span className="text-sm tracking-wide">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
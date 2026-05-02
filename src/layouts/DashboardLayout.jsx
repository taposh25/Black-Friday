import { useState } from "react";

import { Outlet } from "react-router";

import Sidebar from "../component/Sidebar/Sidebar";


const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 text-white overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Area */}
      <div className="flex-1 flex flex-col ">

       

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto ">

          {/* Glass Card Container */}
          <div className="min-h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl">
            <Outlet />
          </div>

        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
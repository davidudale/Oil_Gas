import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Navigation Bar */}
      <nav className="min-w-screen justify-center h-[calc(100vh-90vh)] lg:w-screen border-r border-slate-800 flex flex-col glass-effect z-40 transition-all duration-300 overflow-hidden shrink-0">
        < div className="flex items-center justify-between p-2 lg:p-6 border-b border-slate-800/50 bg-slate-900/30">
          {/* Logo Section */}
          <div className="logo">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-700 rounded-sm flex items-center justify-center transform rotate-45">
                  <div className="w-3 h-3 bg-white rounded-full -rotate-45"></div>
                </div>
                <span className="text-2xl font-syncopate font-bold tracking-tighter text-white">
                  InspectPro<span className="text-orange-500">.</span>
                </span>
              </div>
            </div>
          </div>
          {/*general nav links  */}
          <div className="nav-links space-x-4 items-center">
            <span className="bg-transparent text-white px-6 py-1 rounded-sm text-sm font-bold capitalize tracking-widest transition-all transform hover:scale-105">Administrator</span>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-1 rounded-sm text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105">Generate Report</button>
            <button className="bg-red-900 hover:bg-red-700 text-white px-6 py-1 rounded-sm text-sm font-bold uppercase tracking-widest transition-all transform hover:scale-105">Logout</button>
          </div>
        </div>
      </nav>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 h-screen lg:w-64 border-r border-slate-800 flex flex-col glass-effect z-40 transition-all duration-300 overflow-hidden shrink-0">
          {/* User Identity Section */}
          <div className="p-4 lg:p-6 border-b border-slate-800/50 bg-slate-900/30">
            <div className="flex items-center gap-4">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 p-0.5 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-syncopate font-bold text-sm lg:text-base">
                    AV
                  </div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></div>
              </div>
              <div className="hidden lg:block overflow-hidden">
                <p className="text-sm font-bold text-white uppercase tracking-tight truncate">
                  Alex Vanguard
                </p>
                <div className="flex items-center gap-1.5 mt-0.5"></div>
              </div>
            </div>
          </div>
        </aside>
        <main className="w-full h-screen h-[calc(100vh-90vh)] lg:w-screen md:w-screen border-r border-slate-800 flex flex-col glass-effect z-40 transition-all duration-300 overflow-hidden shrink-0">
          {/* Main content goes here */}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

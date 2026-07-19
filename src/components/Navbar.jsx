import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-soft-peach text-slate-800 p-4 shadow-sm relative z-50">
      <div className="container mx-auto flex justify-between items-center relative min-h-[40px]">
        
        <div className="flex-1"></div>

        <div className="text-2xl font-bold text-kahverengi absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          BejCafe
        </div>

        <div className="flex-1 flex justify-end">
          <div className="text-black-500 bg-white px-3 py-1 rounded-lg font-medium shadow-sm transition-all hover:bg-slate-50 border border-slate-200">
            Masa=?
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
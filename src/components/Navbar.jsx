import React from 'react';
// tableNumber prop'u eklendi. Varsayılan olarak "?" görünecek.
const Navbar = ({ tableNumber = "?" }) => {
  return (
    <nav className="bg-soft-peach p-4 shadow-sm relative z-50 w-full">
      <div className="flex justify-between items-center relative min-h-[40px]">
        
        {/* Sol boşluk (Ortalamanın bozulmaması için) */}
        <div className="flex-1"></div>
        {/* Ortalanmış Kafe İsmi */}
        <div className="text-3xl font-bold text-kahverengi absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap tracking-wide">
          BejCafe
        </div>
        {/* Sağ Taraftaki Masa Kutusu */}
        <div className="flex-1 flex justify-end">
          <div className="text-gray-800 bg-white px-4 py-1.5 rounded-xl font-semibold shadow-sm border border-slate-200">
            Masa: {tableNumber}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
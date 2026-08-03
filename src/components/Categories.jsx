import React, { useState } from 'react';

const Categories = () => {
  // Aktif kategoriyi takip etmek için state. 
  // Görseldeki gibi "Sıcak İçecekler"in seçili gelmesi için varsayılanı 2 yapıyoruz.
  const [activeCategory, setActiveCategory] = useState(2);

  // Kategori verileri (İleride bunu backend'den çekebilirsin)
  // Not: Görseldeki ikonları temsil etmesi için şimdilik emoji kullandım. 
  // Projene react-icons veya kendi SVG'lerini dahil ettiğinde buraları kolayca değiştirebilirsin.
  const categories = [
    { id: 1, name: 'İçecekler', icon: '🥤' },
    { id: 2, name: 'Sıcak İçecekler', icon: '☕' },
    { id: 3, name: 'Soğuk İçecekler', icon: '🍹' },
    { id: 4, name: 'Atıştırmalıklar', icon: '🌯' },
    { id: 5, name: 'Tatlılar', icon: '🍰' },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      {/* 
        overflow-x-auto: Yatay kaydırmayı açar.
        [&::-webkit-scrollbar]:hidden vb.: Mobilde ve PC'de çirkin scroll çubuğunu gizler ama kaydırma çalışmaya devam eder.
      */}
      <div className="flex overflow-x-auto px-4 py-3 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className="flex flex-col items-center min-w-max transition-all duration-200"
          >
            {/* İkon */}
            <div 
              className={`text-2xl mb-1 transition-opacity ${
                activeCategory === category.id ? 'opacity-100' : 'opacity-60 grayscale'
              }`}
            >
              {category.icon}
            </div>
            
            {/* Kategori Adı ve Seçili Olma Durumu (Alt Çizgi) */}
            <div 
              className={`text-sm font-semibold pb-1 border-b-2 transition-colors ${
                activeCategory === category.id 
                  ? 'text-kahverengi border-kahverengi' // Seçiliyse senin belirlediğin kahverengi tonu
                  : 'text-gray-500 border-transparent'  // Seçili değilse gri metin, şeffaf çizgi
              }`}
            >
              {category.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
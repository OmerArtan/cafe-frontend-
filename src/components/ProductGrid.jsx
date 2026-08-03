import React, { useState, useEffect } from 'react';

const ProductGrid = () => {
  // Backend'den gelecek verileri tutacağımız state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // .NET API'mize istek atıyoruz (Localhost port numaran farklı olabilir)
    fetch('https://localhost:5001/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // MSSQL'den gelen veriyi state'e yazıyoruz
        setLoading(false);
      })
      .catch((error) => console.error('Veri çekme hatası:', error));
  }, []);

  if (loading) {
    return <div className="text-center p-4 text-gray-500 font-medium">Ürünler yükleniyor...</div>;
  }

  return (
    // Mobil odaklı 2 sütunlu grid yapımız aynı kalıyor
    <div className="grid grid-cols-2 gap-3 p-4 pb-28 bg-[#fdfbf7]">
      {products.map((product) => (
        <div key={product.Id} className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 flex flex-col">
            
            <img 
              src={product.Image || 'varsayilan-gorsel.jpg'} // DB'de görsel linki tutarsan buradan alacak
              alt={product.Name} 
              className="w-full h-32 object-cover rounded-xl mb-2"
            />
            
            <div className="px-1 flex-1 flex flex-col">
              <h3 className="font-bold text-gray-900 text-sm">{product.Name}</h3>
              <p className="text-xs text-gray-500 line-clamp-2 leading-tight mt-1 mb-2 min-h-[32px]">
                {/* Gerekirse DB'ye açıklama alanı da ekleyebiliriz */}
              </p>
              
              <div className="mt-auto mb-2">
                <span className="font-bold text-gray-900 text-base">{product.Price} TL</span>
              </div>
              
              {/* Daha önce yazdığımız Aksiyon Butonları (- / + / Sepete Ekle) buraya gelecek */}
            </div>
            
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
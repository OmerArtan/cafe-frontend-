import React from 'react';
// Componentlerini kendi klasör yapına göre import et
import Navbar from './components/Navbar'; 
import Categories from './components/Categories'; 
import ProductGrid from './components/ProductGrid'; // Ürün listesini buraya ekledik
function App() {
  return (
    // Tasarımdaki krem/bej arka plan rengiyle uyumlu olması için bg-[#fdfbf7] kullanabilirsin
    <div className="min-h-screen bg-[#fdfbf7]">
      
      {/* 1. Üst Menü (En üstte sabit kalacak veya sayfa ile kayacak kısım) */}
      <Navbar />
      {/* 2. Kategoriler (Hemen menünün altında tam genişlikte yer alır) */}
      <Categories />
      {/* 3. Sayfanın Ana İçeriği: Ürünler */}
      {/* İstersen araya biraz boşluk koymak için <main> etiketine ekstra class verebilirsin */}
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}
export default App;
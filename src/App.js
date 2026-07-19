import React from 'react';
import Navbar from './components/Navbar'; // Navbar'ı içeri aktarıyoruz

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Menüyü sayfanın en üstüne yerleştiriyoruz */}
      <Navbar />

      {/* Sayfanın Ana İçeriği (Yazılar kaldırıldı, sadece kapsayıcı alan kaldı) */}
      <main className="container mx-auto p-4 mt-8">
        {/* İleride menü tıklamalarına göre gelecek içerikler buraya yerleştirilebilir */}
      </main>
    </div>
  );
}

export default App;
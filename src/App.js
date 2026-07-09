import React from 'react';

function App() {
  
  const yonlendir = () => {
    // .NET backend portunu 5141 olarak ayarladık
    fetch('http://localhost:5141/api/yonlendirme')
      .then(cevap => cevap.json())
      .then(veri => {
        window.location.href = veri.url; 
      })
      .catch(hata => console.error("Bağlantı hatası:", hata));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#282c34' }}>
      <button 
        onClick={yonlendir} 
        style={{ 
          padding: '15px 30px', 
          fontSize: '18px', 
          cursor: 'pointer',
          backgroundColor: '#61dafb',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Beni YouTube'a Götür
      </button>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // حاليًا، سينتقل إلى صفحة التصفح. لاحقًا يمكن إضافة منطق الفلترة
    // navigate(`/courts?location=${location}`);
    navigate('/courts'); 
  };

  return (
    <section 
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551958214-2d5e239a28a3?q=80&w=2070')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          احجز ملعبك المفضل بسهولة
        </h1>
        <p className="text-xl mb-8 drop-shadow-md">
          ابحث، قارن، واحجز أفضل الملاعب القريبة منك في دقائق.
        </p>
        
        <form 
          onSubmit={handleSearch}
          className="bg-white rounded-full shadow-2xl p-2 sm:p-3 flex items-center gap-2 max-w-xl mx-auto"
        >
          <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ادخل المدينة أو الحي..." 
            className="flex-grow p-3 text-gray-700 focus:outline-none bg-transparent"
          />
          <button 
            type="submit"
            className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300"
          >
            ابحث
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
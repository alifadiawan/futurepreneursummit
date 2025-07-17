import React from 'react';
import bg from '../../../../public/5185208.jpg';

// You can replace these placeholder URLs with your actual image URLs.
const BG_IMAGE_URL = bg ;
const MAIN_IMAGE_URL = "https://placehold.co/1200x600/FFCCBC/424242?text=Main+Event+Highlight";

// Helper component for individual grid items to keep the main component clean.
const GridItem = ({ imageUrl, title, text }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-40 object-cover"
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/FFCCBC/424242?text=Image+Error'; }}
    />
    <div className="p-4">
      <h3 className="font-bold text-lg text-orange-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-700">{text}</p>
    </div>
  </div>
);

// Main GrandSummitSection Component
const GrandSummitSection = () => {

  // Data for the 4x2 grid. In a real application, this would likely come from an API.
  const gridData = [
    { id: 1, title: "SEMINAR/TALKSHOW", text: "Seminar akan diikutin oleh banyak peserta yang akan dihadiri oleh pembicara/pemateri yang akan langsung disampaikan di depan panggung dengan materi yang telah ditentukan, tentunya mengenai Entrepreneur dan lainya.", imageUrl: "https://placehold.co/400x300/FFE0B2/424242?text=Speaker+1" },
    { id: 2, title: "QUIZ GAME & DOORPRIZE", text: "Quiz Game dan Doorprize diberikan sebagai bentuk hiburan/refresh untuk peserta yang telah antusias mengikuti kegiatan seminar dan akan dipilih melalui keaktifan mengajukan pertanyaan pada saat kegiatan berlangsung.", imageUrl: "https://placehold.co/400x300/FFB74D/424242?text=Workshop" },
    { id: 3, title: "ACCOUSTIC  PERFORMANCE", text: "Pada saat kegiatan Seminar akan kita berikan Hiburan musik meliputi Band, Akustik dll, sebagai Ice breaking agar selama mengikuti kegiatan peserta tetap enjoy and fun.", imageUrl: "https://placehold.co/400x300/FF9800/FAFAFA?text=Networking" },
    { id: 4, title: "BAZAAR UMKM MILLENIAL", text: "Bazaar akan dilaksanakan ketika kegiatan Seminar berlangsung ini dibuat sebagai bentuk konkrit dalam mendukung UMKM agar para UMKM memiliki wadah untuk langsung menjual produknya kepada peserta Seminar.w", imageUrl: "https://placehold.co/400x300/FB8C00/FAFAFA?text=Innovation" },
  ];

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center font-sans" 
      style={{ backgroundImage: `url(${BG_IMAGE_URL})` }}
    >
      <div className="min-h-screen w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        

        {/* Main Image Placeholder */}
        <div className="w-full max-w-2xl my-12 rounded-xl shadow-2xl overflow-hidden">
          <img 
            src={MAIN_IMAGE_URL} 
            alt="Grand Summit main visual" 
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/FFCCBC/424242?text=Image+Not+Found'; }}
          />
        </div>

        {/* 4x2 Grid Section */}
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {gridData.map(item => (
              <GridItem 
                key={item.id} 
                imageUrl={item.imageUrl}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GrandSummitSection;

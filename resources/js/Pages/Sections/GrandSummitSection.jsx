import React from 'react';
import BG_IMAGE_URL from '../../../../public/5185208.jpg';
import bgbg2 from '../../../../public/bg-purple.png'
import MAIN_IMAGE_URL from '../../../../public/programs/grand-summit.png';
import { motion } from "framer-motion"

import BAZAAR from '../../../../public/grand-seminar/BAZAAR.webp';
import DOORPRIZE from '../../../../public/grand-seminar/DOORPRIZE.webp';
import MUSIK from '../../../../public/grand-seminar/MUSIK.webp';
import SEMINAR from '../../../../public/grand-seminar/SEMINAR.webp';


// Helper component for individual grid items to keep the main component clean.
const GridItem = ({ imageUrl, title, text }) => (
  <a
    href=""
    className="group block rounded-2xl shadow-lg mb-12 bg-white overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
  >
    <img
      loading="lazy"
      src={imageUrl}
      alt={title}
      className="w-full object-cover aspect-[16/6]"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/400x225/FFCCBC/424242?text=Image+Error';
      }}
    />

    <div className="p-4 sm:p-6">
      <h3 className="font-bold text-xl text-gray-800">
        {title}
      </h3>
      <p className="mt-1 text-base text-gray-600">
        {text}
      </p>
    </div>
  </a>

);

// Main GrandSummitSection Component
const GrandSummitSection = () => {

  // Data for the 4x2 grid. In a real application, this would likely come from an API.
  const gridData = [
    { id: 1, title: "SEMINAR/TALKSHOW", text: "Seminar akan diikutin oleh banyak peserta yang akan dihadiri oleh pembicara/pemateri yang akan langsung disampaikan di depan panggung dengan materi yang telah ditentukan, tentunya mengenai Entrepreneur dan lainya.", imageUrl: SEMINAR },
    { id: 2, title: "QUIZ GAME & DOORPRIZE", text: "Quiz Game dan Doorprize diberikan sebagai bentuk hiburan/refresh untuk peserta yang telah antusias mengikuti kegiatan seminar dan akan dipilih melalui keaktifan mengajukan pertanyaan pada saat kegiatan berlangsung.", imageUrl: DOORPRIZE },
    { id: 3, title: "ACCOUSTIC  PERFORMANCE", text: "Seminar akan kita berikan Hiburan musik meliputi Band, Akustik dll, sebagai Ice breaking agar selama mengikuti kegiatan peserta tetap enjoy and fun. Selain itu, penampilan hiburan ini juga menjadi momen interaktif yang mempererat suasana ", imageUrl: MUSIK },
    { id: 4, title: "BAZAAR UMKM MILLENIAL", text: "Bazaar akan dilaksanakan ketika kegiatan Seminar berlangsung sebagai bentuk konkrit dalam mendukung UMKM agar UMKM memiliki wadah untuk langsung menjual produknya kepada peserta Seminar", imageUrl: BAZAAR },
  ];

  return (
    <div
      className="min-h-screen w-full bg-center font-sans"
      style={{ backgroundImage: `url(${bgbg2})` }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="min-h-screen w-full flex flex-col items-center py-12 px-6 lg:px-64">

        {/* Main Image Placeholder */}
        <div className="w-full max-w-2xl my-12 rounded-xl overflow-hidden">
          <img
            loading="lazy"
            src={MAIN_IMAGE_URL}
            alt="Grand Summit main visual"
            className="w-full h-auto object-cover"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1200x600/FFCCBC/424242?text=Image+Not+Found'; }}
          />
        </div>

        {/* 4x2 Grid Section */}
        <div
          className="container"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            {gridData.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, ease: "easeOut", delay: index * 0.05 }}
              >
                <GridItem
                  key={item.id}
                  imageUrl={item.imageUrl}
                  title={item.title}
                  text={item.text}
                />
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default GrandSummitSection;
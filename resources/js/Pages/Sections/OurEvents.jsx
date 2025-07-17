import React from 'react'
import CarouselCard from '../Components/CarouselCard'
import { div } from 'framer-motion/client';
import bgbg from '../../../../public/bg-konser.png';
import { motion } from 'framer-motion';

const OurEvents = () => {

  const events = [
    {
      id: 1,
      location: 'Surabaya',
      date: '10 Desember',
      title: 'Future Entrepreneur Summit',
      subtitle: 'The Journey of the Gen Z Futurepreneur',
      imageUrl: 'https://futurepreneursummit.com/storage/SURABAYA.jpg',
      featured_guest_star: 'Fiki Naki',
    },
    {
      id: 2,
      location: 'Purwokerto',
      date: '10 Desember',
      title: 'Future Entrepreneur Summit',
      subtitle: 'The Journey of the Gen Z Futurepreneur',
      imageUrl: 'https://futurepreneursummit.com/storage/SURABAYA.jpg',
      featured_guest_star: 'Fiki Naki',
    },
    {
      id: 3,
      location: 'Purwokerto',
      date: '10 Desember',
      title: 'Future Entrepreneur Summit',
      subtitle: 'The Journey of the Gen Z Futurepreneur',
      imageUrl: 'https://futurepreneursummit.com/storage/SURABAYA.jpg',
      featured_guest_star: 'Fiki Naki',
    },
    {
      id: 4,
      location: 'Purwokerto',
      date: '10 Desember',
      title: 'Future Entrepreneur Summit',
      subtitle: 'The Journey of the Gen Z Futurepreneur',
      imageUrl: 'https://futurepreneursummit.com/storage/SURABAYA.jpg',
      featured_guest_star: 'Fiki Naki',
    },
  ];
  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <section
      className="py-16 md:py-32 relative overflow-hidden"
      id="aboutus"
      style={{
        backgroundImage: `url(${bgbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Optional: for a parallax effect
      }}
    >
      {/* THEME CHANGE: Added a semi-transparent white overlay to ensure text readability over the background image. */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block">
            <motion.h2
              // THEME CHANGE: Text is now dark for readability.
              className="text-2xl md:text-3xl font-black text-white tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Events Now
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-purple-400 to-[#FF7700] rounded-full mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* carousel card */}
        <CarouselCard
          events={events}
        />

      </div>
    </section>

  )
}

export default OurEvents
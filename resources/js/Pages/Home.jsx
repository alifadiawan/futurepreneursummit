import React from 'react'
import Guest from './Layout/Guest'
import logo from '../../../public/Logo-FEST-LIGHT.png';
import bgImage from '../../../public/bg-2.jpg';
// import bgImage from '../assets/bg-konser.png';
import { motion } from "framer-motion";

import AboutUsSection from './Sections/AboutUsSection';
import RangkaianAcaraSection from './Sections/RangkaianAcaraSection';
import GrandSummitSection from './Sections/GrandSummitSection';
import OurEvents from './Sections/OurEvents';

import LogoSlider from './Components/LogoSlider';
import VideoBackground from './Components/VideoBackground';
import PortfolioSection from './Sections/PortfolioSection';
import FuturecompetitionSection from './Sections/FuturecompetitionSection';

const Home = () => {
  return (
    <Guest>

      {/* hero */}
      {/* <section
        className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-black"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center p-8 rounded-lg relative z-10"
        >
          <motion.img
            src={logo}
            alt="FEST Light Logo"
            className="mx-auto lg:max-w-3xl"
            animate={{
              y: [0, -10, 0], // float up and back down
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </section> */}
      <VideoBackground />

      {/* logo slider */}
      <LogoSlider />

      {/* about us */}
      <AboutUsSection />

      {/* Rangkaian Acara */}
      <RangkaianAcaraSection />

      {/* Grand Summit */}
      <GrandSummitSection />

      {/* our events */}
      <OurEvents />

      {/* National Competition */}
      <FuturecompetitionSection />

      {/* portfolio */}
      <PortfolioSection />
      
    </Guest>
  )
}

export default Home
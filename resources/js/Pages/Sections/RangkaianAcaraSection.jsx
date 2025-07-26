import React from 'react'
import bgplaceholder from '../../../../public/Logo-FEST-LIGHT.png'

import { motion } from "framer-motion"
import SpotlightCard from '../Components/SpotlightCard';
import { Link } from '@inertiajs/react';
import PixelTransition from '../Components/PixelTransition';

import grandsummit from '../../../../public/rangkaian_acara/1.webp';
import nationalcompetition from '../../../../public/rangkaian_acara/2.webp';
import webminar from '../../../../public/rangkaian_acara/3.webp';
import bootcamp from '../../../../public/rangkaian_acara/4.webp';
import internationalprogram from '../../../../public/rangkaian_acara/5.webp';


const RangkaianAcaraSection = () => {
  return (
       <section
      className="py-16 md:py-22  relative overflow-hidden"
      id="aboutus"
    // style={{
    //   backgroundImage: `url(${bgabout1})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundAttachment: 'fixed' // Optional: for a parallax effect
    // }}
    >
      <div className="absolute inset-0 bg-white"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-24 relative z-10">
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
              className="text-2xl md:text-3xl font-black text-black tracking-wide"
            >
              Rangkaian Acara
            </motion.h2>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-amber-400 to-[#FF7700] rounded-full mx-auto mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-center gap-3 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
          >
            <div className="w-full">
              <img
                src={grandsummit}
                alt={grandsummit}
                decoding="async"
                loading="lazy"
                fetchPriority="high"
                width="320"
                height="192"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/320x192/000000/FFFFFF?text=Image+Not+Found';
                }}
              />
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
          >
            <div className="w-full">
              <img
                src={nationalcompetition}
                alt={nationalcompetition}
                decoding="async"
                loading="lazy"
                fetchPriority="high"
                width="320"
                height="192"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/320x192/000000/FFFFFF?text=Image+Not+Found';
                }}
              />
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
          >
            <div className="w-full">
              <img
                src={webminar}
                alt={webminar}
                decoding="async"
                loading="lazy"
                fetchPriority="high"
                width="320"
                height="192"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/320x192/000000/FFFFFF?text=Image+Not+Found';
                }}
              />
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
          >
            <div className="w-full">
              <img
                src={bootcamp}
                alt={bootcamp}
                decoding="async"
                loading="lazy"
                fetchPriority="high"
                width="320"
                height="192"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/320x192/000000/FFFFFF?text=Image+Not+Found';
                }}
              />
            </div>
          </motion.div>
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
          >
            <div className="w-full">
              <img
                src={internationalprogram}
                alt={internationalprogram}
                decoding="async"
                loading="lazy"
                fetchPriority="high"
                width="320"
                height="192"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/320x192/000000/FFFFFF?text=Image+Not+Found';
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default RangkaianAcaraSection
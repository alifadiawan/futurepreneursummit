import React from 'react'
import { motion } from "framer-motion";

const PixelTransition = ({ imageUrl, title, ctaText, ctaLink }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="max-w-xs mx-auto overflow-hidden rounded-2xl border border-orange-200 shadow-lg transition-transform"
    >
      <div className="w-full aspect-[9/6]">
        <img
          src={imageUrl}
          alt={title}
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

  )
}

export default PixelTransition
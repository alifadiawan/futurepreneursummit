import React from 'react'

const PixelTransition = ({ imageUrl, title, ctaText, ctaLink }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border shadow-lg border-orange-200 transition-all hover:-translate-y-3.5">
      {/* 1. Image */}
      <img
        loading='lazy'
        src={imageUrl}
        alt={title}
        className="w-full h-56 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found';
        }}
      />
    </div>
  )
}

export default PixelTransition
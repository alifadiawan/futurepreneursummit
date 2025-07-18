import React from 'react'

const PixelTransition = ({ imageUrl, title, ctaText, ctaLink }) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-2xl border shadow-lg border-purple-200">
      {/* 1. Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-44 object-contain"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/000000/FFFFFF?text=Image+Not+Found';
        }}
      />

      {/* Card Content */}
      <div className="p-6 text-center">
        {/* 2. Title */}
        <h2 className="text-2xl font-bold text-black mb-4">
          {title}
        </h2>

        {/* 3. CTA Button */}
        <a
          href={ctaLink}
          className="inline-block bg-purple-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
        >
          {ctaText}
        </a>
      </div>
    </div>
  )
}

export default PixelTransition
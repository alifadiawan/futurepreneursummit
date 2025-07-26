import React from 'react';

import brand1 from '../../../../public/brands/LOGO-1.png'
import brand2 from '../../../../public/brands/LOGO-2.png'
import brand3 from '../../../../public/brands/LOGO-3.png'
import brand4 from '../../../../public/brands/LOGO-4.png'
import brand5 from '../../../../public/brands/LOGO-5.png'

const logos = [
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
];

const LogoSlider = () => {
    const extendedLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <>
            <style>
                {`
                @keyframes slide-infinite {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-${logos.length * 200}px);
                    }
                }

                .animate-slide-infinite {
                    animation: slide-infinite 20s linear infinite;
                    will-change: transform;
                }

                .slider-container:hover .animate-slide-infinite {
                    animation-play-state: paused;
                }

                /* Smooth fade edges */
                .fade-edges {
                    -webkit-mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 100%,
                        transparent
                    );
                    mask-image: linear-gradient(
                        to right,
                        transparent,
                        black 10%,
                        black 100%,
                        transparent
                    );
                }

                /* Hover effects for individual logos */
                .logo-item {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    filter: grayscale(0.3) opacity(0.8);
                }

                .logo-item:hover {
                    filter: grayscale(0) opacity(1);
                    transform: scale(1.1);
                }

                /* Add subtle glow effect */
                .logo-glow {
                    position: relative;
                }

                .logo-glow::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 120%;
                    height: 120%;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    pointer-events: none;
                    z-index: -1;
                }

                .logo-item:hover .logo-glow::after {
                    opacity: 1;
                }
                `}
            </style>

            <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 lg:py-0 antialiased overflow-hidden">
                <div className=" mx-auto px-4">

                    {/* Logo Slider */}
                    <div className="slider-container relative">
                        <div className="fade-edges overflow-hidden whitespace-nowrap">
                            <div className="flex animate-slide-infinite">
                                {extendedLogos.map((logo, index) => (
                                    <div
                                        key={`${logo.alt}-${index}`}
                                        className="logo-item flex-shrink-0 flex items-center justify-center mx-12"
                                        style={{ width: '200px' }}
                                    >
                                        <img
                                            className="h-24 lg:h-48 w-auto object-contain max-w-full"
                                            src={logo.src}
                                            alt={logo.alt}
                                            width="160"
                                            height="64"
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Subtle gradient overlays for better visual flow */}
                        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
                        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

const GlobalStyles = () => (
    <style>{`
    .group:hover .pause-animation {
      animation-play-state: paused;
    }
  `}</style>
);


export default function App() {
    return (
        <LogoSlider />
    );
}

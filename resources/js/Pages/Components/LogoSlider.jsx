import React from 'react';
import brand1 from '../../../../public/brands/width_200.webp'
import brand2 from '../../../../public/brands/brands2.webp'
import brand3 from '../../../../public/brands/brands3.webp'
import brand4 from '../../../../public/brands/brand4.png'
import brand5 from '../../../../public/brands/brand4.webp'

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
    return (
        <>
            {/* This style block injects the custom animation keyframes into Tailwind CSS.
              It's a neat way to keep component-specific styles self-contained.
            */}
            <style>
                {`
                @keyframes slide-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
                .animate-slide-left {
                    animation: slide-left 30s linear infinite;
                }
                `}
            </style>

            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">
                        Trusted by the World's Most Innovative Teams
                    </h2>
                    <p className="text-center text-lg text-gray-500 mb-10">
                        Our partners and clients are at the forefront of their industries.
                    </p> */}

                    {/* The mask-image provides the fade-out effect on the left and right edges,
                      making the continuous loop appear more natural.
                    */}
                    <div
                        className="group relative overflow-hidden whitespace-nowrap py-4"
                        style={{
                            maskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 128px, black calc(100% - 128px), transparent 100%)',
                        }}
                    >
                        <div className="flex w-max animate-slide-left group-hover:pause-animation">

                            {/* First set of logos */}
                            {logos.map((logo, index) => (
                                <div key={`logo-${index}`} className="mx-12 flex-shrink-0">
                                    <img
                                        className="h-24 w-auto object-contain"
                                        src={logo.src}
                                        alt={logo.alt}
                                    />
                                </div>
                            ))}

                            {/* Second set of logos (for the seamless loop) */}
                            {logos.map((logo, index) => (
                                <div key={`logo-duplicate-${index}`} className="mx-12 flex-shrink-0">
                                    <img
                                        className="h-24 w-auto object-contain"
                                        loading='lazy'
                                        src={logo.src}
                                        alt={logo.alt}
                                    />
                                </div>
                            ))}
                        </div>
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

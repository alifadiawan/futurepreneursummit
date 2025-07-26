import React, { useState, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';

// --- Arrow SVG Component ---
const Arrow = ({ direction, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-1/2 -translate-y-1/2 ${direction === 'left' ? '-left-4 md:-left-8' : '-right-4 md:-right-8'} z-20 bg-white/30 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
        aria-label={direction === 'left' ? 'Previous Slide' : 'Next Slide'}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {direction === 'left' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            )}
        </svg>
    </button>
);


// --- Event Card Component ---
// Now accepts individual props for better reusability.
const EventCard = ({ title, date, location, subtitle, imagePath, status, slug }) => {
    const formattedDate = date ? dayjs(date).format('D MMMM YYYY') : 'Tanggal tidak tersedia';

    // A simple helper to split the date string for styling.
    const [dateNum, ...dateMonth] = formattedDate.split(' ');

    return (
        <div className="flex-shrink-0 w-full  h-full">
            <div
                className={`rounded-3xl overflow-hidden flex flex-col transition-all duration-300
      ${status === 'Done' ? 'bg-black' : 'bg-gray-900'}
    `}
            >
                <div
                    className={`relative flex-grow text-white ${status === 'Done' ? 'opacity-50' : ''
                        }`}
                    style={{ aspectRatio: '210 / 297' }}
                >
                    <img
                        src={`/storage/${imagePath}`}
                        alt={title}
                        className="absolute top-0 left-0 w-full object-contain z-0"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/600x800/333/FFF?text=Image+Error';
                        }}
                    />
                </div>

                <div
                    className={`p-4 bg-gray-800/50 backdrop-blur-sm border-t border-white/10 text-white ${status === 'Done' ? 'bg-opacity-60' : ''
                        }`}
                >
                    <header className="flex justify-between items-start mb-5">
                        <h3 className="font-extrabold text-2xl uppercase tracking-wider drop-shadow-lg">{location}</h3>
                        <div className="text-center">
                            <p
                                className={`font-bold text-md rounded-full px-4 inline-block text-white
              ${status === 'Available'
                                        ? 'bg-green-600'
                                        : status === 'Done'
                                            ? 'bg-gray-500'
                                            : status === 'Upcoming'
                                                ? 'bg-yellow-500'
                                                : 'bg-gray-300'
                                    }
            `}
                            >
                                {status}
                            </p>
                        </div>
                    </header>

                    <footer className="drop-shadow-lg">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="text-center bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                                <p className="text-4xl font-bold leading-none">{dateNum}</p>
                                <p className="text-md font-semibold">{dateMonth.join(' ')}</p>
                            </div>
                            <div className="flex-1 min-h-[6rem]">
                                <h2 className="text-xl font-bold leading-tight">{title}</h2>
                                <p className="text-sm text-gray-300">{subtitle}</p>
                            </div>
                        </div>
                    </footer>

                    {status == 'Done' ? (
                        <p
                            href={route('event.detail', slug)}
                            className="block text-center text-white font-bold py-3 px-4 rounded-xl"
                        >
                            Sudah Selesai
                        </p>
                    ) : status == 'Available' ? (
                        <a
                            href={route('event.detail', slug)}
                            className="block text-center bg-purple-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
                        >
                            DAFTAR
                        </a>
                    ) : (
                        <a
                            className="block text-center bg-yellow-400 text-black/90 font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Segera Hadir
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Main Carousel Component ---
// Now accepts an 'events' prop and uses the mock data as a fallback.
export default function CarouselCard({ events = defaultEvents }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Effect to detect mobile view on mount and on window resize.
    useEffect(() => {
        const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    // useMemo recalculates values only when isMobile or the events prop changes.
    const { itemsPerPage, lastIndex } = useMemo(() => {
        const items = isMobile ? 1 : 3;
        const last = events.length > items ? events.length - items : 0;
        return { itemsPerPage: items, lastIndex: last };
    }, [isMobile, events.length]);

    // This effect ensures the index is valid if the view changes or data changes.
    useEffect(() => {
        if (currentIndex > lastIndex) {
            setCurrentIndex(lastIndex);
        }
    }, [currentIndex, lastIndex]);

    // Navigation functions now use the dynamically calculated lastIndex.
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? lastIndex : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === lastIndex ? 0 : currentIndex + 1);
    };

    // The transform style is now calculated based on the viewport.
    const transformStyle = useMemo(() => {
        if (isMobile) {
            return { transform: `translateX(-${currentIndex * 100}%)` };
        }

        // For desktop view
        const cardWidthPercent = 100 / itemsPerPage;
        const gapRem = 1;

        // Simple centering for 1-2 items
        if (events.length <= 2) {
            return {
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem'
            };
        }

        // Normal sliding behavior for 3+ items
        return {
            transform: `translateX(calc(-${currentIndex * cardWidthPercent}% - ${currentIndex * gapRem}rem))`
        };
    }, [currentIndex, itemsPerPage, isMobile, events.length]);

    return (
        <div className="w-full mx-auto relative p-4 md:p-8">
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform duration-500"
                    style={transformStyle}
                >
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`${events.length <= 2
                                    ? 'w-full md:w-[400px]' // Fixed width for 1-2 items
                                    : 'w-full md:w-1/3'     // Flexible width for 3+ items
                                } flex-shrink-0 px-2 flex`}
                        >
                            <EventCard {...event} />
                        </div>
                    ))}
                </div>
            </div>
            {events.length > 1 && (
                <>
                    <Arrow direction="left" onClick={prevSlide} />
                    <Arrow direction="right" onClick={nextSlide} />
                </>
            )}
        </div>
    );
}

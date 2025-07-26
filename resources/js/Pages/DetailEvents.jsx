import React from 'react';
import { motion } from 'framer-motion';

import { Calendar, Clock, ExternalLink, MapPin, Ticket, Users } from 'lucide-react';

import Guest from '../Pages/Layout/Guest'
import bgImage from '../../../public/bg-slider.png'; 
// import eventPoster from '../assets/bandung.webp';

const EventDetail = () => {
    // Centralized event data for easy management
    const event = {
        title: 'Futurepreneursummit Surabaya',
        attendees: '850+ expected',
        date: 'July 28, 2025',
        time: '10:00 AM - 5:00 PM',
        location: 'Main Hall, ABC University',
        description: 'Join us for an exciting day of workshops, guest speakers, networking, and fun! This event is perfect for students, developers, and tech enthusiasts who want to grow their skills and connect with the community.',
        highlights: [
            "Interactive Workshops",
            "Expert Speakers",
            "Networking Sessions",
            "Skill Development"
        ],
    };

    // Framer Motion variants for staggered list animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    // A reusable info card component for cleanliness
    const InfoCard = ({ icon, label, value, fullWidth = false }) => (
        <motion.div
            variants={itemVariants}
            className={`flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 ${fullWidth ? 'sm:col-span-2' : ''}`}
        >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                {React.cloneElement(icon, { className: 'w-6 h-6' })}
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium">{label}</p>
                <p className="text-gray-900 font-semibold text-lg">{value}</p>
            </div>
        </motion.div>
    );

    return (
        <Guest>
            <section className="w-full flex flex-col items-center bg-gray-50 overflow-x-hidden">
                {/* --- 1. Hero Section with Overlapping Poster --- */}
                <div
                    className="w-full h-[50vh] md:h-[60vh] relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    {/* Subtle gradient overlay for better text contrast if needed later */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/10 to-transparent"></div>
                </div>

                {/* --- 2. Main Content Card --- */}
                {/* This card sits "below" the hero but is pulled up with a negative margin */}
                <div className="w-full max-w-7xl px-4 md:px-8 -mt-[30vh] md:-mt-[35vh] z-10 mb-24">
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-gray-300/30 border border-gray-200/80"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                            {/* --- Left Column: Poster & CTA --- */}
                            <div className="lg:col-span-1 p-6 flex flex-col items-center">
                                <motion.img
                                    src={eventPoster}
                                    alt="Event Poster"
                                    className="w-full max-w-[300px] lg:max-w-full rounded-2xl shadow-xl -mt-16 lg:-mt-20"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: '#1E40AF' /* blue-800 */ }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full mt-8 bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-blue-300 transition-all"
                                >
                                    <Ticket className="w-6 h-6" />
                                    <span>Register Now</span>
                                </motion.button>
                                <a
                                    href="#"
                                    className="mt-4 text-sm text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center space-x-1.5"
                                >
                                    <span>Learn More</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>

                            {/* --- Right Column: Event Details --- */}
                            <div className="lg:col-span-2 p-8 lg:p-12">
                                <motion.h1
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="text-3xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
                                >
                                    {event.title}
                                </motion.h1>

                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="flex items-center space-x-2 text-gray-600 mb-8"
                                >
                                    <Users className="w-5 h-5 text-blue-500" />
                                    <span className="font-medium">{event.attendees}</span>
                                </motion.div>

                                {/* --- Info Blocks --- */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                                >
                                    <InfoCard icon={<Calendar />} label="Date" value={event.date} />
                                    <InfoCard icon={<Clock />} label="Time" value={event.time} />
                                    <InfoCard icon={<MapPin />} label="Location" value={event.location} fullWidth />
                                </motion.div>

                                {/* --- Description & Highlights --- */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    <h2 className="text-xl font-bold text-gray-800 mb-3">About This Event</h2>
                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {event.description}
                                    </p>

                                    <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-6">
                                        <h3 className="font-bold text-gray-800 mb-4">What You'll Experience ✨</h3>
                                        <motion.div
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            className="grid grid-cols-2 gap-x-4 gap-y-3"
                                        >
                                            {event.highlights.map((item) => (
                                                <motion.div key={item} variants={itemVariants} className="flex items-center space-x-3">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                                    <span className="text-gray-700 font-medium">{item}</span>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </Guest>
    );
};



export default EventDetail;
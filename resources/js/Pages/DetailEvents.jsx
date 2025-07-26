import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, ExternalLink, MapPin, Ticket, User, Users, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Guest from '../Pages/Layout/Guest'
import bgImage from '../../../public/bg-slider.png';

const EventDetail = ({ event }) => {
    const [selectedSpeaker, setSelectedSpeaker] = useState(null);
    const [currentSpeakerIndex, setCurrentSpeakerIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 120, damping: 12 }
        }
    };

    const speakerVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: 'spring', stiffness: 150, damping: 15 }
        },
        hover: {
            scale: 1.05,
            y: -10,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    };

    // Modal variants
    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 }
        }
    };

    // Navigate speakers in modal
    const nextSpeaker = () => {
        if (event.speakers && event.speakers.length > 1) {
            const nextIndex = (currentSpeakerIndex + 1) % event.speakers.length;
            setCurrentSpeakerIndex(nextIndex);
            setSelectedSpeaker(event.speakers[nextIndex]);
        }
    };

    const prevSpeaker = () => {
        if (event.speakers && event.speakers.length > 1) {
            const prevIndex = currentSpeakerIndex === 0 ? event.speakers.length - 1 : currentSpeakerIndex - 1;
            setCurrentSpeakerIndex(prevIndex);
            setSelectedSpeaker(event.speakers[prevIndex]);
        }
    };

    const openSpeakerModal = (speaker, index) => {
        setSelectedSpeaker(speaker);
        setCurrentSpeakerIndex(index);
    };

    // Info card component
    const InfoCard = ({ icon, label, value, fullWidth = false }) => (
        <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`flex items-start space-x-4 p-5 rounded-2xl bg-white border border-black/10 hover:shadow-lg transition-all ${fullWidth ? 'sm:col-span-2' : ''}`}
        >
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white border border-black/30">
                {React.cloneElement(icon, { className: 'w-7 h-7' })}
            </div>
            <div>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                <p className="text-gray-900 font-bold text-lg mt-1">{value}</p>
            </div>
        </motion.div>
    );

    return (
        <Guest>
            <section className="w-full flex flex-col items-center bg-white overflow-x-hidden min-h-screen">
                {/* Hero Section */}
                <div
                    className="w-full h-[45vh] md:h-[55vh] relative bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-black/20"></div>
                </div>

                {/* Main Content */}
                <div className="w-full max-w-[96rem] md:px-8 -mt-[25vh] md:-mt-[30vh] z-10 mb-12">
                    <motion.div
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-white backdrop-blur-xl rounded-3xl border border-white/50"
                    >
                        {/* Change: Adjusted grid layout to align items at the top */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:items-start">

                            {/* Left Column: Highlighted Event Image & Info */}
                            {/* Change: Added sticky positioning and top offset for the column */}
                            <div className="lg:col-span-2 p-8 flex flex-col items-center gap-8 lg:sticky lg:top-8">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                    animate={{
                                        scale: imageLoaded ? 1 : 0.8,
                                        opacity: imageLoaded ? 1 : 0.3,
                                        y: imageLoaded ? 0 : 20
                                    }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative group w-full max-w-[350px] lg:max-w-full"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <img
                                        src={`/storage/${event.imagePath}`}
                                        alt="Event Poster"
                                        className="relative w-full h-[28rem] md:h-full rounded-2xl -mt-16 lg:-mt-20 border border-black/10"
                                        onLoad={() => setImageLoaded(true)}
                                    />
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.div>

                                {/* Change: Moved InfoCards here from the right column */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-1 gap-5 w-full max-w-[350px] lg:max-w-full"
                                >
                                    <InfoCard icon={<Calendar />} label="Date" value={event.date} />
                                    <InfoCard icon={<Clock />} label="Time" value={event.time} />
                                    <InfoCard icon={<MapPin />} label="Location" value={event.location} />
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full max-w-[350px] lg:max-w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg inline-flex items-center justify-center space-x-3 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 border border-blue-500/20"
                                >
                                    <Ticket className="w-6 h-6" />
                                    <span>Register Now</span>
                                </motion.button>
                            </div>

                            {/* Right Column: Event Details */}
                            <div className="lg:col-span-3 p-8 lg:p-12">
                                <motion.h1
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-3xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-tight text-center"
                                >
                                    {event.title}
                                </motion.h1>

                                <motion.div
                                    initial={{ x: -30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6, duration: 0.6 }}
                                    className="flex items-center space-x-3 text-gray-600 mb-10 bg-blue-50/50 rounded-full px-6 py-3 w-fit"
                                >
                                    <Users className="w-6 h-6 text-blue-500" />
                                    <span className="font-bold text-lg">{event.attendees}</span>
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="mb-12"
                                >
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-3">
                                        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
                                        <span>About This Event</span>
                                    </h2>
                                    <div
                                        className="text-gray-700 leading-relaxed text-lg prose prose-lg max-w-none"
                                        dangerouslySetInnerHTML={{ __html: event.description }}
                                    ></div>
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex flex-col w-full p-8">

                            {/* Highlighted Speaker Section */}
                            {event.speakers && event.speakers.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 0.6 }}
                                    className="mb-12"
                                >
                                    <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                                            <User className="w-7 h-7 text-white" />
                                        </div>
                                        <span>Featured Speakers</span>
                                    </h3>

                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid grid-cols-1 md:grid-cols-4  gap-8"
                                    >
                                        {event.speakers.map((speaker, index) => (
                                            <motion.div
                                                key={index}
                                                variants={speakerVariants}
                                                whileHover="hover"
                                                onClick={() => openSpeakerModal(speaker, index)}
                                                className="relative bg-gradient-to-br from-white to-blue-50/30 border-2 border-gray-100 rounded-3xl p-8 cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden"
                                            >
                                                {/* Background decoration */}
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                                                <div className="relative flex flex-col items-center text-center">
                                                    <div className="relative mb-6">
                                                        {speaker.image ? (
                                                            <img
                                                                src={`/storage/${speaker.image}`}
                                                                alt={speaker.name}
                                                                className="w-48 h-80 rounded-2xl object-cover bg-gray-200 shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-300"
                                                            />
                                                        ) : (
                                                            <div className="w-32 h-40 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-300">
                                                                <User className="w-16 h-16 text-blue-600" />
                                                            </div>
                                                        )}
                                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            <Play className="w-4 h-4 text-white ml-0.5" />
                                                        </div>
                                                    </div>

                                                    <h4 className="font-black text-gray-900 text-xl mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                        {speaker.name}
                                                    </h4>
                                                    <p className="text-blue-600 font-bold text-sm mb-3 bg-blue-50 px-4 py-2 rounded-full">
                                                        {speaker.title}
                                                    </p>
                                                    <p className="text-gray-600 text-sm leading-relaxed">
                                                        Click to learn more about this speaker
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}

                            {/* Event Highlights */}
                            {event.highlights && event.highlights.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.6 }}
                                    className="bg-gradient-to-r from-blue-50 to-purple-50/50 border border-blue-100 rounded-3xl p-8"
                                >
                                    <h3 className="font-black text-gray-800 mb-6 text-xl flex items-center space-x-3">
                                        <span className="text-2xl">✨</span>
                                        <span>What You'll Experience</span>
                                    </h3>
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {event.highlights.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                variants={itemVariants}
                                                className="flex items-center space-x-4 p-4 bg-white/70 rounded-2xl hover:bg-white/90 transition-colors duration-300"
                                            >
                                                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 shadow-lg"></div>
                                                <span className="text-gray-800 font-semibold">{item.value}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Speaker Modal */}
                <AnimatePresence>
                    {selectedSpeaker && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedSpeaker(null)}
                        >
                            <motion.div
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
                            >
                                <button
                                    onClick={() => setSelectedSpeaker(null)}
                                    className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex flex-col items-center text-center">
                                    <div className="relative mb-8">
                                        {selectedSpeaker.image ? (
                                            <img
                                                src={`/storage/${selectedSpeaker.image}`}
                                                alt={selectedSpeaker.name}
                                                className="w-full h-96 rounded-3xl object-cover shadow-2xl border-4 border-gray-100"
                                            />
                                        ) : (
                                            <div className="w-48 h-60 rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-2xl border-4 border-gray-100">
                                                <User className="w-24 h-24 text-blue-600" />
                                            </div>
                                        )}
                                    </div>

                                    <h2 className="text-3xl font-black text-gray-900 mb-4">{selectedSpeaker.name}</h2>
                                    <p className="text-blue-600 font-bold text-lg mb-6 bg-blue-50 px-6 py-3 rounded-full">
                                        {selectedSpeaker.title}
                                    </p>

                                    {selectedSpeaker.bio && (
                                        <p className="text-gray-700 leading-relaxed text-lg max-w-xl">
                                            {selectedSpeaker.bio}
                                        </p>
                                    )}
                                </div>

                                {/* Navigation arrows for multiple speakers */}
                                {event.speakers && event.speakers.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevSpeaker}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                                        >
                                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                                        </button>
                                        <button
                                            onClick={nextSpeaker}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                                        >
                                            <ChevronRight className="w-6 h-6 text-gray-600" />
                                        </button>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </Guest>
    );
};

export default EventDetail;
import React from 'react'
import { motion } from "framer-motion"

import bgbg from '../../../../public/bg-purple.jpg'
import bgbg2 from '../../../../public/bg-purple-2.jpg'



import bgabout1 from '../../../../public/bg-about.jpg'
import bgabout2 from '../../../../public/about-2.jpeg'
import bgabout3 from '../../../../public/bg-about-3.webp'


const AboutUsSection = () => {
    return (
        // THEME CHANGE: Background is now a placeholder image with cover and center properties.
        <section
            className="py-16 md:py-32 relative overflow-hidden"
            id="aboutus"
            style={{
                backgroundImage: `url(${bgbg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed' // Optional: for a parallax effect
            }}
        >
            {/* THEME CHANGE: Added a semi-transparent white overlay to ensure text readability over the background image. */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
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
                            className="text-2xl md:text-3xl font-black text-white tracking-wide"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            ABOUT OUR COMPANY
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

                {/* Content Section with Image Gallery */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Image Gallery */}
                    <motion.div className="xl:col-span-7 space-y-6">
                        {/* Main featured image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative group"
                        >
                            {/* THEME CHANGE: Removed dark 'glow' div, replaced with a direct shadow on the image for a cleaner light theme look. */}
                            <motion.img
                                src={bgabout2}
                                alt="FES Event Highlight"
                                className="relative w-full h-80 object-cover rounded-2xl shadow-2xl border border-gray-200"
                                whileHover={{ scale: 1.02, y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.1)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </motion.div>

                        {/* Image grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="relative group"
                            >
                                <motion.img
                                    src={bgabout3}
                                    alt="Futurepreneursimmit X Kapal Api"
                                    className="relative w-full h-48 object-cover rounded-xl shadow-xl border border-gray-200"
                                    whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                className="relative group"
                            >
                                <motion.img
                                    src="foto-2.jpeg"
                                    alt="Team Collaboration"
                                    className="relative w-full h-48 object-cover rounded-xl shadow-xl border border-gray-200"
                                    whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="xl:col-span-5"
                    >
                        {/* THEME CHANGE: Card styling updated for light theme. */}
                        <div className="bg-white backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-orange-200/50 hover:border-orange-300 transition-all duration-300">
                            <motion.h3
                                className="text-xl md:text-2xl font-bold mb-4 text-orange-700 border-b border-orange-200 pb-3"
                                whileHover={{ color: "#c2410c" /* orange-800 */ }}
                                transition={{ duration: 0.3 }}
                            >
                                Our Story Since 2020
                            </motion.h3>
                            <div className="space-y-4 mt-4">
                                <motion.p
                                    className="text-sm md:text-base text-slate-600 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Future Entrepreneur Summit (FESt) is an entrepreneurial seminar where several entrepreneurs and practitioners will present and share their entrepreneurial experiences with participants. We focus on how they dare to start, collaborate, and develop creative ideas to innovate in their businesses.
                                </motion.p>
                                <motion.p
                                    className="text-sm md:text-base text-slate-600 leading-relaxed"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    This summit serves as a forum for sharing entrepreneurial trends that evolve with technology and the Millennial Generation. Featuring speakers from academia and industry, we require support from various parties to ensure this activity can run successfully and inspire the next wave of entrepreneurs.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }}
                    className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {[
                        { number: "20+", text: "Partners", icon: "🤝" },
                        { number: "25,000+", text: "Attendees", icon: "👥" },
                        { number: "50+", text: "Projects", icon: "🎯" },
                        { number: "100+", text: "Team Members", icon: "⭐" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 15px 30px rgba(255, 119, 0, 0.15)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            // THEME CHANGE: Card styling updated for light theme.
                            className="bg-white backdrop-blur-md p-4 md:p-6 rounded-xl border border-gray-200/80 transition-all duration-300 text-center group shadow-md hover:shadow-orange-200/50"
                        >
                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">{item.number}</div>
                            <div className="text-sm md:text-base text-slate-500">{item.text}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Features Section - This section was removed as it was redundant with the trust indicators and main text.
                    If you want to add it back, it would follow the same light-theme card styling. */}
            </div>
        </section>
    )
}

export default AboutUsSection
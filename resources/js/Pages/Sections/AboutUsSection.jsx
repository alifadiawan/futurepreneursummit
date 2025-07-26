import React from 'react'
import { motion } from "framer-motion"

import bgbg from '../../../../public/bg-purple.jpg'
import bgbg2 from '../../../../public/bg-purple-2.jpg'



import bgabout1 from '../../../../public/bg-about.jpg'
import bgabout2 from '../../../../public/about-2.jpeg'
import bgabout3 from '../../../../public/bg-about-3.webp'
import bgabout4 from '../../../../public/YK-160.jpg'


const AboutUsSection = () => {
    const imageMotion = (delay = 0) => ({
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.4, ease: 'easeOut', delay },
        viewport: { once: true, amount: 0.4 }
    });

    const dataStats = [
        { number: '20+', text: 'Partners', icon: '🤝' },
        { number: '25,000+', text: 'Attendees', icon: '👥' },
        { number: '50+', text: 'Projects', icon: '🎯' },
        { number: '100+', text: 'Team Members', icon: '⭐' },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section
            id="aboutus"
            className="py-16 md:py-28 relative overflow-hidden"
            style={{
                backgroundImage: `url(${bgbg2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* <div className="absolute inset-0 bg-black/20"></div> */}

            <div className="container lg:px-24 px-6 mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={fadeInUp}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-wide">
                        GET TO KNOW US
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-amber-400 to-[#FF7700] rounded-full mx-auto mt-2" />
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
                    {/* Left images */}
                    <div className="xl:col-span-7 space-y-6">
                        <motion.div {...imageMotion()}>
                            <img
                                src={bgabout2}
                                loading="lazy"
                                alt="FES Event Highlight"
                                className="w-full h-80 object-cover rounded-2xl shadow-lg border border-gray-200/20"
                            />
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {[bgabout3, bgabout4].map((src, idx) => (
                                <motion.div key={idx} {...imageMotion(0.2 + idx * 0.1)}>
                                    <img
                                        src={src}
                                        loading="lazy"
                                        alt="Gallery"
                                        className="w-full h-48 object-cover rounded-xl shadow-md border border-gray-200/20"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="xl:col-span-5"
                    >
                        <div className="bg-white/95 p-6 md:p-10 rounded-2xl shadow-md border flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-orange-700 border-b border-orange-200 pb-3">
                                    Our Story Since 2020
                                </h3>
                                <div className="space-y-4 mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                                    <p>
                                        Future Entrepreneur Summit (FESt) is a seminar where entrepreneurs and practitioners share their entrepreneurial journeys, emphasizing creativity, collaboration, and innovation.
                                    </p>
                                    <p>
                                        Featuring speakers from academia and industry, the summit highlights evolving trends in entrepreneurship, supported by various communities to foster growth and innovation.
                                    </p>
                                    <p>
                                        The event also serves as a networking hub for aspiring entrepreneurs, students, and professionals to connect, exchange ideas, and explore potential collaborations. Through interactive sessions and engaging discussions.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6">
                                <button className="px-6 py-2 bg-green-600 rounded-full text-white font-bold text-sm">
                                    More Information
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {dataStats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: index * 0.1 }}
                            variants={fadeInUp}
                            className="bg-white/95 p-4 rounded-xl border text-center text-slate-700 shadow transition-shadow duration-300 hover:shadow-orange-200/50"
                        >
                            <div className="text-2xl mb-1">{item.icon}</div>
                            <div className="text-xl md:text-2xl font-bold text-orange-600">{item.number}</div>
                            <div className="text-sm">{item.text}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
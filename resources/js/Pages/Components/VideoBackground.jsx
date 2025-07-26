import { motion } from 'framer-motion'
import logo from '../../../../public/Logo-FEST-LIGHT.png';
import React from 'react'

const VideoBackground = () => {
    return (
        <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Optional black overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 bg-black"
                />
            </motion.div>

            {/* Animated Logo */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center p-8 rounded-lg relative z-10"
            >
                <motion.img
                    src={logo}
                    alt="FEST Light Logo"
                    className="mx-auto lg:max-w-3xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </section>
    )
}

export default VideoBackground  
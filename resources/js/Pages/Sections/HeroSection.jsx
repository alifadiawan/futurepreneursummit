import React from 'react'
import { motion } from 'framer-motion'
import logo from '../../../../public/Logo-FEST-LIGHT.png';
import bgImage from '../../../../public/bg-slider.png';

const HeroSection = () => {
    return (
        <section
            className="hero-section relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Preload for LCP optimization */}
            <img src={bgImage} alt="" style={{ display: 'none' }} loading="eager" />

            {/* Background with subtle parallax and zoom effect */}
            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    willChange: 'transform, opacity',
                }}
            >
                {/* Animated overlay with gradient pulse */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.3, 0.2, 0.25, 0.2],
                    }}
                    transition={{
                        duration: 4,
                        times: [0, 0.3, 0.6, 0.8, 1],
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"
                />
            </motion.div>

            {/* Logo container with enhanced entrance */}
            <motion.div
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                    duration: 1.2,
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-center p-8 rounded-lg relative z-10"
            >
                <motion.img
                    src={logo}
                    alt="FEST Light Logo"
                    className="mx-auto lg:max-w-2xl"
                    initial={{ scale: 0.8, filter: "blur(4px)" }}
                    animate={{
                        scale: 1,
                        filter: "blur(0px)",
                        rotateY: [0, 2, -2, 0]
                    }}
                    transition={{
                        scale: { duration: 1.2, delay: 0.5 },
                        filter: { duration: 1.2, delay: 0.5 },
                        rotateY: {
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: 2
                        }
                    }}
                />
            </motion.div>

            {/* CTA Button with enhanced hover and floating animation */}
            <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="text-center pb-8 rounded-lg relative z-10"
            >
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <motion.a
                        className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-white font-bold shadow-lg cursor-pointer relative overflow-hidden"
                        whileHover={{
                            scale: 1.08,
                            boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)",
                            background: "linear-gradient(135deg, #16a34a, #15803d)",
                        }}
                        whileTap={{
                            scale: 0.96,
                            transition: { duration: 0.1 }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                        }}
                    >
                        {/* Animated shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Button text with subtle animation */}
                        <motion.span
                            initial={{ opacity: 0.8 }}
                            animate={{ opacity: 1 }}
                            className="relative z-10"
                        >
                            REGISTER NOW
                        </motion.span>

                        {/* Pulsing glow effect */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-green-400"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0, 0.3, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeOut"
                            }}
                        />
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Optional: Floating particles effect */}
            <div className="absolute inset-0 pointer-events-none z-5">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 3) * 20}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: i * 0.8,
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

export default HeroSection
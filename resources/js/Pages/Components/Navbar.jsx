import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants for the main navbar container
    const navVariants = {
        hidden: { y: -25, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    };

    // Variants for the mobile menu container (for opening/closing)
    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                // Stagger the animation of child elements
                staggerChildren: 0.05,
            },
        },
    };

    // Variants for individual menu items (both desktop and mobile)
    const menuItemVariants = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };


    return (
        <motion.nav
            className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 bg-transparent backdrop-blur-lg"
            // Apply nav variants for initial load animation
            variants={navVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="px-4 sm:px-6 lg:px-48">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex-shrink-0"
                        // Simple fade-in for the logo
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img
                            src="https://futurepreneursummit.com/__landing/images/logo.png"
                            alt="Logo"
                            className="w-36"
                        />
                    </motion.div>

                    {/* Desktop Links */}
                    <motion.div
                        className="hidden md:flex space-x-10 font-bold text-lg"
                        // Stagger children for a sequential animation effect
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                        }}
                    >
                        <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Home</motion.a>
                        <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>What We Do</motion.a>
                        <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Latest Event</motion.a>
                        <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Career</motion.a>
                        <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Contact</motion.a>
                    </motion.div>

                    {/* Mobile Hamburger Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden py-4 flex flex-col space-y-4 text-center"
                            // Apply variants for mobile menu open/close
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Home</motion.a>
                            <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>What We Do</motion.a>
                            <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Latest Event</motion.a>
                            <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Career</motion.a>
                            <motion.a href="#" className="text-white  hover:text-gray-300" variants={menuItemVariants}>Contact</motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;
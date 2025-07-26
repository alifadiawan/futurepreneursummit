import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../../public/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    // bg navbar
    useEffect(() => {
        const handleScroll = () => {
            // Set isScrolled to true if user has scrolled more than 10px
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once


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
            // Conditionally apply classes based on the scroll state
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0b0c46]' : 'bg-transparent'}`}
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
                            src={logo}
                            alt="Logo"
                            className="w-36"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/144x40/000000/FFFFFF?text=Logo'; }}
                        />
                    </motion.div>

                    {/* Desktop Links */}
                    <motion.div
                        className="hidden md:flex space-x-12 font-bold text-lg"
                        // Stagger children for a sequential animation effect
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
                        }}
                    >
                        <motion.a href="/" className="text-white hover:text-gray-300" variants={menuItemVariants}>Home</motion.a>
                        <motion.a href="#aboutus" className="text-white hover:text-gray-300" variants={menuItemVariants}>About</motion.a>
                        <motion.a href="/#events" className="text-white hover:text-gray-300" variants={menuItemVariants}>Events</motion.a>
                        <motion.a href="/news" className="text-white hover:text-gray-300" variants={menuItemVariants}>News</motion.a>
                        <motion.a href="#" className="text-white hover:text-gray-300" variants={menuItemVariants}>Contact</motion.a>
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
                            className="md:hidden py-4 flex flex-col space-y-4 text-center bg-[#0b0c46] rounded-lg"
                            // Apply variants for mobile menu open/close
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <motion.a href="/" className="text-white hover:text-gray-300" variants={menuItemVariants}>Home</motion.a>
                            <motion.a href="#aboutus" className="text-white hover:text-gray-300" variants={menuItemVariants}>About</motion.a>
                            <motion.a href="/#events" className="text-white hover:text-gray-300" variants={menuItemVariants}>Events</motion.a>
                            <motion.a href="#" className="text-white hover:text-gray-300" variants={menuItemVariants}>News</motion.a>
                            <motion.a href="#" className="text-white hover:text-gray-300" variants={menuItemVariants}>Contact</motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Navbar;
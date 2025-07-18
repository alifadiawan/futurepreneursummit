import React from 'react';
import natinalcompetition from '../../../../public/programs/national_competition.png';
import backgroundImage from '../../../../public/bg-green.jpeg';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion'; // Add this import for animations

import startupfounder from '../../../../public/programs/startup_founder.png';
import visioncraft from '../../../../public/programs/vision_craft.png';
import futureminds from '../../../../public/programs/futureminds.png';
import twibbonchampion from '../../../../public/programs/twibbon_champion.png';
import hadiah from '../../../../public/20jt.png';



const CompetitionCard = ({ logo, title, description, link = "#" }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col items-center shadow-xl hover:shadow-2xl transition-all duration-300"
    >
        <div className="p-4 mb-6">
            <img src={logo} alt={`${title} logo`} className="h-56 w-56 object-contain" />
        </div>
        <h3 className="font-bold text-2xl text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-lg mb-8">{description}</p>
        <a href={link}
            className="mt-auto w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 py-3 px-6 text-center font-bold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Daftar Sekarang
        </a>
    </motion.div>
);

const FuturecompetitionSection = () => {
    return (
        <>
            <Head title="Futurepreneur National Competition" />
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Hero Section */}
                <main className="relative overflow-hidden">
                    {/* This is likely for a background image or effect, leaving as is */}
                    <div className="absolute inset-0"></div>

                    <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-32">

                        {/* --- Section 1: Introduction --- */}
                        {/* Added `items-center` to center the logo horizontally */}
                        <div className="flex flex-col w-full items-center justify-center gap-12 mb-24">
                            <img src={natinalcompetition} className="max-w-lg w-full" alt="logo_national" />

                            {/* REVISED: This container is now responsive */}
                            <div className="flex flex-col md:flex-row gap-8 items-center w-full">

                                {/* Text Block: Takes up 2/3 of the width on medium screens and up */}
                                <div className="md:w-2/3">
                                    <p className="p-6 text-xl md:text-2xl bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-gray-800">
                                        Futurepreneur National Competition adalah ajang wirausaha kekinian untuk generasi muda yang mencakup empat kategori seru: kompetisi ide bisnis inovatif, kompetisi esai inspiratif, kompetisi poster kreatif, dan kompetisi post twibbon yang viral, semuanya untuk mengasah kreativitas dan semangat entrepreneur digital di era sekarang.
                                    </p>
                                </div>

                                {/* Image Block: Takes up 1/3 of the width on medium screens and up */}
                                <div className="md:w-1/3 w-full">
                                    {/* Added styling to the image to ensure it fits the container */}
                                    <img src={hadiah} alt="Total Hadiah" className="w-full h-auto object-contain rounded-lg" />
                                </div>
                            </div>
                        </div>

                        {/* --- Section 2: Call to Action (Hero) --- */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mx-auto max-w-3xl text-center"
                        >
                            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl mb-16">
                                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                                    Total Hadiah <span className="text-yellow-500">Rp 20.000.000</span>
                                </h2>
                                <p className="text-xl text-emerald-600 font-semibold mb-8">Plus Mentoring dari Top Entrepreneurs!</p>

                                {/* IMPROVED: Made the button group responsive */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href="#guidebook" className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-colors duration-300">
                                        Download Guidebook
                                    </a>
                                    <a href="#daftar" className="rounded-full bg-white px-8 py-4 text-lg font-bold text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50 transition-colors duration-300">
                                        Daftar Sekarang
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* --- Section 3: Competition Categories --- */}
                        {/* This section was already well-designed and responsive. No changes needed. */}
                        <section id="kompetisi" className="py-20">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-white mb-4">Pilih Kategorimu</h2>
                                <p className="text-xl text-white">Empat kategori yang akan menguji kreativitas dan inovasimu</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <CompetitionCard
                                    logo={startupfounder}
                                    title="Startup Founder"
                                    description="Presentasikan ide bisnismu dan dapatkan pendanaan"
                                />
                                <CompetitionCard
                                    logo={visioncraft}
                                    title="Visioncraft"
                                    description="Kompetisi Desain Poster"
                                />
                                <CompetitionCard
                                    logo={futureminds}
                                    title="Futureminds"
                                    description="Kompetisi Menulis Essay"
                                />
                                <CompetitionCard
                                    logo={twibbonchampion}
                                    title="Twibbon Champion"
                                    description="Kompetisi Post Twibbon"
                                />
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </>
    );
};

export default FuturecompetitionSection;
import React from 'react';
import natinalcompetition from '../../../../public/programs/national_competition-3.png';
import backgroundImage3 from '../../../../public/IMG_0389.PNG';

import { motion } from 'framer-motion';

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
            {/* <Head title="Futurepreneur National Competition" /> */}
            <div
                className="min-h-screen"
                style={{
                    backgroundImage: `url(${backgroundImage3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Hero Section */}
                <main className="relative overflow-hidden">
                    {/* This is likely for a background image or effect, leaving as is */}
                    {/* <div className="absolute inset-0"></div> */}

                    <div className="container mx-auto px-6 lg:px-24 md:px-12 pt-20 pb-32">

                        {/* --- Section 1: Introduction --- */}
                        <div className="flex flex-col w-full items-center justify-center gap-12 mb-2 mt-12">
                            <img src={natinalcompetition} className="max-w-2xl w-full" alt="logo_national" />

                            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                                <div className="flex flex-col gap-6 w-full md:w-2/3">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-gray-700 p-6 text-justify text-xl md:text-2xl">
                                        Futurepreneur National Competition adalah ajang wirausaha kekinian untuk generasi muda yang mencakup empat kategori seru: kompetisi ide bisnis inovatif, kompetisi esai inspiratif, kompetisi poster kreatif, dan kompetisi post twibbon yang viral, semuanya untuk mengasah kreativitas dan semangat entrepreneur digital di era sekarang.

                                        Ayo tunjukkan potensimu untuk menjadi entrepreneur masa depan!
                                    </div>
                                    <div className="flex flex-col lg:flex-row text-center gap-2">
                                        <a href="#guidebook" className="rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-colors duration-300">
                                            Download Guidebook
                                        </a>
                                        <a href="#guidebook" className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-colors duration-300">
                                            Daftar Sekarang
                                        </a>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <img src={hadiah} alt="Total Hadiah" className="w-[40rem] h-auto object-contain rounded-lg" />
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">


                            </div>
                        </div>

                        {/* --- Section 3: Competition Categories --- */}
                        <section id="kompetisi" className="py-2">
                            <hr className="mb-12 border-t-2 border-zinc-200 w-full mx-auto" />

                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-white mb-4">Pilih Kategorimu</h2>
                                <p className="text-xl text-white">Empat kategori yang akan menguji kreativitas dan inovasimu</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <CompetitionCard
                                    logo={startupfounder}
                                    title="Startup Founder Clash"
                                    description="Presentasikan ide bisnismu dan dapatkan pendanaan"
                                />
                                <CompetitionCard
                                    logo={visioncraft}
                                    title="Visioncraft Poster Challenge"
                                    description="Ekspresikan ide cemerlangmu lewat poster dan rebut juara!"
                                />
                                <CompetitionCard
                                    logo={futureminds}
                                    title="Future Minds Essay Contest"
                                    description="Tulis ide terbaikmu dan menangkan kompetisinya!"
                                />
                                <CompetitionCard
                                    logo={twibbonchampion}
                                    title="Twibbon Champion Hunt"
                                    description="Tunjukkan semangatmu lewat Twibbon dan jadilah inspirasi!"
                                />
                            </div>
                        </section>

                    </div>
                </main>
            </div>
        </>


        // <div class="relative w-full overflow-hidden bg-gradient-to-tr from-[#CDE361] via-[#58B44B] to-[#13785A]">
        //     <div class="aspect-video p-10 md:p-16">
        //         <main className="relative overflow-hidden">

        //             <div className="container mx-auto lg:px-24 md:px-12 pt-20 pb-32">

        //                 {/* --- Section 1: Introduction --- */}
        //                 <div className="flex flex-col w-full items-center justify-center gap-12 mb-2 mt-12">
        //                     <img src={natinalcompetition} className="max-w-2xl w-full" alt="logo_national" />

        //                     <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        //                         <div className="flex flex-col gap-6 w-full md:w-2/3">
        //                             <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg text-gray-700 p-6 text-justify text-xl md:text-2xl">
        //                                 Futurepreneur National Competition adalah ajang wirausaha kekinian untuk generasi muda yang mencakup empat kategori seru: kompetisi ide bisnis inovatif, kompetisi esai inspiratif, kompetisi poster kreatif, dan kompetisi post twibbon yang viral, semuanya untuk mengasah kreativitas dan semangat entrepreneur digital di era sekarang.

        //                                 Ayo tunjukkan potensimu untuk menjadi entrepreneur masa depan!
        //                             </div>
        //                             <div className="flex flex-col lg:flex-row text-center gap-2">
        //                                 <a href="#guidebook" className="rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-700 px-8 py-4 text-lg font-bold text-white transition-colors duration-300">
        //                                     Download Guidebook
        //                                 </a>
        //                                 <a href="#guidebook" className="rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white hover:bg-emerald-700 transition-colors duration-300">
        //                                     Daftar Sekarang
        //                                 </a>
        //                             </div>
        //                         </div>

        //                         <div className="lg:w-1/2">
        //                             <img src={hadiah} alt="Total Hadiah" className="w-[40rem] h-auto object-contain rounded-lg" />
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-col sm:flex-row gap-4">


        //                     </div>
        //                 </div>

        //                 {/* --- Section 3: Competition Categories --- */}
        //                 <section id="kompetisi" className="py-2">
        //                     <hr className="mb-12 border-t-2 border-zinc-200 w-full mx-auto" />

        //                     <div className="text-center mb-16">
        //                         <h2 className="text-4xl font-bold text-white mb-4">Pilih Kategorimu</h2>
        //                         <p className="text-xl text-white">Empat kategori yang akan menguji kreativitas dan inovasimu</p>
        //                     </div>
        //                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        //                         <CompetitionCard
        //                             logo={startupfounder}
        //                             title="Startup Founder Clash"
        //                             description="Presentasikan ide bisnismu dan dapatkan pendanaan"
        //                         />
        //                         <CompetitionCard
        //                             logo={visioncraft}
        //                             title="Visioncraft Poster Challenge"
        //                             description="Ekspresikan ide cemerlangmu lewat poster dan rebut juara!"
        //                         />
        //                         <CompetitionCard
        //                             logo={futureminds}
        //                             title="Future Minds Essay Contest"
        //                             description="Tulis ide terbaikmu dan menangkan kompetisinya!"
        //                         />
        //                         <CompetitionCard
        //                             logo={twibbonchampion}
        //                             title="Twibbon Champion Hunt"
        //                             description="Tunjukkan semangatmu lewat Twibbon dan jadilah inspirasi!"
        //                         />
        //                     </div>
        //                 </section>

        //             </div>
        //         </main>
        //     </div>

        //     <div class="absolute -top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full border-2 border-white/20"></div>
        //     <div class="absolute -top-1/3 -left-1/3 h-2/3 w-2/3 rounded-full border border-white/10"></div>

        //     <div class="absolute top-12 left-12 h-24 w-24 overflow-hidden rounded-full bg-white/25">
        //         <div class="flex h-full w-full flex-col justify-around">
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //             <div class="h-[2px] w-full bg-white"></div>
        //         </div>
        //     </div>

        //     <div class="absolute bottom-10 right-20 h-20 w-20 overflow-hidden rounded-full bg-white/20">
        //         <div class="flex h-full w-full flex-col justify-around">
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //             <div class="h-px w-full bg-white"></div>
        //         </div>
        //     </div>

        //     <div class="absolute right-16 top-20 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,transparent_60%,#FFF_62%)] bg-[length:10px_10px] opacity-40"></div>

        //     <div class="absolute bottom-24 left-1/3 h-6 w-6 rounded-full border border-white/50"></div>
        //     <div class="absolute right-1/4 top-1/2 h-4 w-4 rounded-full border border-white/50"></div>

        //     <span class="absolute left-1/3 top-16 text-2xl font-thin text-white/60">+</span>
        //     <span class="absolute bottom-16 left-1/2 text-xl font-thin text-white/60">x</span>
        //     <span class="absolute right-1/3 bottom-24 text-2xl font-thin text-white/60">+</span>

        // </div>
    );
};

export default FuturecompetitionSection;
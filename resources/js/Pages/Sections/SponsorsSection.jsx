import React from 'react'
import { motion } from "framer-motion"
import PixelTransition from '../Components/PixelTransition';

import golda from '../../../../public/sponsors/golda.png';
import wardah from '../../../../public/sponsors/wardah.png';
import pandalovely from '../../../../public/sponsors/pandalovely.png';
import miesedap from '../../../../public/sponsors/miesedap.png';
import kahf from '../../../../public/sponsors/kahf.png';
import bening from '../../../../public/sponsors/bening.png';
import yamaha from '../../../../public/sponsors/yamaha.png';

import sponsor20 from '../../../../public/sponsors/20.png';
import sponsor21 from '../../../../public/sponsors/21.png';
import sponsor22 from '../../../../public/sponsors/22.png';
import sponsor23 from '../../../../public/sponsors/23.png';
import sponsor24 from '../../../../public/sponsors/24.png';
import sponsor25 from '../../../../public/sponsors/25.png';
import sponsor26 from '../../../../public/sponsors/26.png';


const SponsorsSection = () => {
  return (
    <section
      className="py-16 md:py-22  relative overflow-hidden"
      id="aboutus"
    // style={{
    //   backgroundImage: `url(${bgabout1})`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundAttachment: 'fixed' // Optional: for a parallax effect
    // }}
    >
      {/* THEME CHANGE: Added a semi-transparent white overlay to ensure text readability over the background image. */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="container mx-auto lg:px-24 px-6 md:px-24 relative z-10">
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
              className="text-2xl md:text-3xl font-black text-black tracking-wide"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Sponsors
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

        <div className="grid grid-cols-2 lg:grid-cols-6 justify-center gap-3 w-full">
          <PixelTransition
            imageUrl={golda}
            title="Futurepreneur National Competition"
            ctaText="More"
            ctaLink="#"
          />
          <PixelTransition
            imageUrl={wardah}
            title="Futurepreneur Grand Summit Seminar"
            ctaText="More"
            ctaLink="#"
          />
          <PixelTransition
            imageUrl={pandalovely}
            title="Futurepreneur Online Webinar Soft Skill"
            ctaText="More"
            ctaLink="#"
          />
          <PixelTransition
            imageUrl={kahf}
            title="Futurepreneur Bootcamp Soft Skill Training"
            ctaText="More"
            ctaLink="#"
          />
          <PixelTransition
            imageUrl={miesedap}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
          <PixelTransition
            imageUrl={bening}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
          <PixelTransition
            imageUrl={yamaha}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor20}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor21}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor22}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor23}  
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor24}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor25}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
           <PixelTransition
            imageUrl={sponsor26}
            title="Futurepreneur International Program"
            ctaText="More"
            ctaLink="#"
          />
        </div>

        {/* <div className="flex flex-row gap-3">
            <SpotlightCard 
              className="border border-orange-400 bg-white" 
              spotlightColor="rgba(255, 165, 0, 0.35)"
               imageSrc="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            >
              <div className="flex flex-col justify-around h-48">
                <h2 className="text-3xl font-bold">Futurepreneur Competition</h2>
              <Link className="p-2 bg-orange-400 rounded-lg hover:bg-orange-600 transition-all">Learn More</Link>
              </div>
            </SpotlightCard>
            <SpotlightCard 
              className="border border-orange-400 bg-white" 
              spotlightColor="rgba(255, 165, 0, 0.35)"
            >
              <div className="flex flex-col justify-around h-48">
                <h2 className="text-3xl font-bold">Futurepreneur Competition</h2>
              <Link className="p-2 bg-orange-400 rounded-lg hover:bg-orange-600 transition-all">Learn More</Link>
              </div>
            </SpotlightCard>
            <SpotlightCard 
              className="border border-orange-400 bg-white" 
              spotlightColor="rgba(255, 165, 0, 0.35)"
            >
              <div className="flex flex-col justify-around h-48">
                <h2 className="text-3xl font-bold">Futurepreneur Competition</h2>
              <Link className="p-2 bg-orange-400 rounded-lg hover:bg-orange-600 transition-all">Learn More</Link>
              </div>
            </SpotlightCard>
            <SpotlightCard 
              className="border border-orange-400 bg-white" 
              spotlightColor="rgba(255, 165, 0, 0.35)"
            >
              <div className="flex flex-col justify-around h-48">
                <h2 className="text-3xl font-bold">Futurepreneur Competition</h2>
              <Link className="p-2 bg-orange-400 rounded-lg hover:bg-orange-600 transition-all">Learn More</Link>
              </div>
            </SpotlightCard>
            <SpotlightCard 
              className="border border-orange-400 bg-white" 
              spotlightColor="rgba(255, 165, 0, 0.35)"
            >
              <div className="flex flex-col justify-around h-48">
                <h2 className="text-3xl font-bold">Futurepreneur Competition</h2>
              <Link className="p-2 bg-orange-400 rounded-lg hover:bg-orange-600 transition-all">Learn More</Link>
              </div>
            </SpotlightCard>
        </div> */}

      </div>
    </section>
  )
}

export default SponsorsSection
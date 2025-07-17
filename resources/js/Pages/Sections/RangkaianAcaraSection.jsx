import React from 'react'
import bgabout1 from '../../../../public/bg-konser.png'

import { motion } from "framer-motion"
import SpotlightCard from '../Components/SpotlightCard';
import { Link } from '@inertiajs/react';
import PixelTransition from '../Components/PixelTransition';

const RangkaianAcaraSection = () => {
  return (
    <section
      className="py-16 md:py-32 relative overflow-hidden"
      id="aboutus"
      style={{
        backgroundImage: `url(${bgabout1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Optional: for a parallax effect
      }}
    >
      {/* THEME CHANGE: Added a semi-transparent white overlay to ensure text readability over the background image. */}
      <div className="absolute inset-0 bg-black/50"></div>

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
              Rangkaian Acara
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

        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center gap-3 w-full">
          <PixelTransition
            firstContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111"
                }}
              >
                <p>Futurepreneur Competition</p>
                <Link className="p-2 bg-orange-400 rounded-lg">Learn more</Link>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111"
                }}
              >
                <p>Futurepreneur Competition</p>
                <Link className="p-2 bg-orange-400 rounded-lg">Learn more</Link>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111"
                }}
              >
                <p>Futurepreneur Competition</p>
                <Link className="p-2 bg-orange-400 rounded-lg">Learn more</Link>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111"
                }}
              >
                <p>Futurepreneur Competition</p>
                <Link className="p-2 bg-orange-400 rounded-lg">Learn more</Link>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <PixelTransition
            firstContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            secondContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111"
                }}
              >
                <p>Futurepreneur Competition</p>
                <Link className="p-2 bg-orange-400 rounded-lg">Learn more</Link>
              </div>
            }
            gridSize={12}
            pixelColor='#ffffff'
            animationStepDuration={0.4}
            className="custom-pixel-card"
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

export default RangkaianAcaraSection
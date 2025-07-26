import React from 'react'
import Guest from './Layout/Guest'
import { motion } from "framer-motion";

import AboutUsSection from './Sections/AboutUsSection';
import RangkaianAcaraSection from './Sections/RangkaianAcaraSection';
import GrandSummitSection from './Sections/GrandSummitSection';
import OurEvents from './Sections/OurEvents';

import LogoSlider from './Components/LogoSlider';
import PortfolioSection from './Sections/PortfolioSection';
import HeroSection from './Sections/HeroSection'
import FuturecompetitionSection from './Sections/FuturecompetitionSection';
import SponsorsSection from './Sections/SponsorsSection';
import OrganizationsSection from './Sections/OrganizationsSection';

const Home = ({ events }) => {

  return (
    <Guest>

      <HeroSection />

      {/* logo slider */}
      <LogoSlider />

      {/* about us */}
      <AboutUsSection />

      {/* Rangkaian Acara */}
      <RangkaianAcaraSection />

      {/* Grand Summit */}
      <GrandSummitSection />
      
      {/* our events */}
      <OurEvents events={events} />

      {/* National Competition */}
      <FuturecompetitionSection />

      {/* portfolio */}
      <PortfolioSection />

      {/* Organization  */}
      <OrganizationsSection />

      {/* Sponsors */}
      <SponsorsSection />



    </Guest>
  )
}

export default Home
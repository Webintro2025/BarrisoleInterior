"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutBanner from '@/components/AboutBanner';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import WhyChooseUs from '@/components/WhyChooseUs';

const AboutPage = () => {
  return (
    <div>
       <AboutBanner />
       <div className='mt-48'>
      <About />
      </div>
      <WhatWeDo />
      <WhyChooseUs />
   
    </div>
  );
};

export default AboutPage;

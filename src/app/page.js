import React from "react";
import Navbar from "@/components/Navbar.jsx";
import HomeBanner from "@/components/HomeBanner.jsx";
import About from "@/components/About.jsx";
import WhatWeDo from "@/components/WhatWeDo.jsx";
import Slides from "@/components/Slides.jsx";
import GetInTouch from "@/components/GetInTouch.jsx";
import WhyChooseUs from "@/components/WhyChooseUs.jsx";
import Maps from "@/components/Maps.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {
  return (
    <>
     
      <HomeBanner />
      <About />
      <WhatWeDo />
      <Slides />
      <GetInTouch />
      <WhyChooseUs />
      <Maps />
    
    </>
  );
}

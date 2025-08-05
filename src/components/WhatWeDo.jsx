'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhatWeDo = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const asideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const services = [
    {
      image: "/3dstrechceling.png",
      title: "3D Stretch Ceiling Solutions",
      alt: "3D Stretch Ceiling Solutions"
    },
    {
      image: "/PRINTED PANEL CEILING.png",
      title: "Printed & Decorative Ceilings",
      alt: "Printed Panel Ceiling"
    },
    {
      image: "/RGBWpROGRAMMINGsTRETCHcEILING.png",
      title: "RGBW Programming Stretch Ceilings",
      alt: "RGBW Programming Stretch Ceiling"
    },
    {
      image: "/DREAMSOL VIRTUAL FRENCH CEILING.png",
      title: "Dreamsol Virtual French Ceiling",
      alt: "Dreamsol Virtual French Ceiling"
    },
    {
      image: "/MURAL CEILING ART.png",
      title: "3D Mural & Wall Art Solutions",
      alt: "Mural Ceiling Art"
    },
    {
      image: "/textile.png",
      title: "Epoxy Flooring & Surface Coating",
      alt: "Textile and Surface Solutions"
    },
    {
      image: "/star.png",
      title: "Star Fiber Optic Ceilings",
      alt: "Star Fiber Optic Ceiling"
    },
    {
      image: "/TUNNABLEdIMMABLEsTRETCHcEILING.png",
      title: "Tunable Dimmable Stretch Ceilings",
      alt: "Tunable Dimmable Stretch Ceiling"
    },
    {
      image: "/TRANSLUCENT STRETCH CEILING.png",
      title: "Translucent Stretch Ceilings",
      alt: "Translucent Stretch Ceiling"
    }
  ];

  return (
    <div className="bg-[#fffefb] text-black font-sans antialiased py-8 sm:py-12 md:py-16">
      <main className="max-w-[1200px] mx-auto px-3 sm:px-4" role="main">
        {/* Header Section */}
        <motion.section 
          className="flex flex-col lg:flex-row lg:justify-between mt-6 sm:mt-8 md:mt-12 mb-8 sm:mb-10 md:mb-12 gap-6 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Main Title */}
            <motion.h1 
            className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[5.5rem] leading-[1.05] max-w-full lg:max-w-[600px] m-0 font-montserrat order-2 lg:order-1"
            variants={titleVariants}
            whileHover={{ 
              scale: 1.02,
              background: "linear-gradient(to right, #dc2626, #2563eb)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              What We Do – Barrisol Interior Solution
            </span>
          </motion.h1>          {/* Aside Content */}
          <motion.aside 
            className="w-full lg:max-w-[320px] font-normal text-sm sm:text-base leading-5 sm:leading-6 font-sans order-1 lg:order-2"
            variants={asideVariants}
          >
            <motion.h3 
              className="uppercase font-bold text-xs tracking-wide sm:tracking-widest mb-2 pb-1 border-b-2 border-gradient-to-r from-red-600 to-blue-600 relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </span>
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </motion.h3>
            
            <motion.p 
              className="mb-4 sm:mb-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ color: "#2563eb" }}
            >
              We specialize in end-to-end interior surface and lighting innovation, covering ceilings, walls, floors, and decorative art. From 3D stretch ceilings to fiber optic lighting systems.
            </motion.p>
            
            <motion.a 
              className="inline-flex items-center gap-2 text-black font-normal text-sm sm:text-base no-underline hover:underline focus:underline group"
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ 
                x: 10,
                color: "#dc2626"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-semibold group-hover:from-blue-600 group-hover:to-red-600">
                All Services
              </span>
              <motion.svg 
                aria-hidden="true" 
                className="w-3 h-3 sm:w-4 sm:h-4 stroke-red-600 group-hover:stroke-blue-600" 
                fill="none" 
                focusable="false" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
                animate={{ rotate: [0, 45, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <polyline points="15 6 18 6 18 9" />
              </motion.svg>
            </motion.a>
          </motion.aside>
        </motion.section>

        {/* Services Grid */}
        <motion.section 
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-6 md:gap-y-8 lg:gap-y-10 mb-12 sm:mb-14 md:mb-16 max-w-full justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.article 
              key={index}
              className="w-full max-w-[380px] mx-auto group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                rotateY: 5
              }}
              transition={{ duration: 0.4 }}
            >
              {/* Service Image */}
              <motion.div
                className="relative overflow-hidden h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 bg-gradient-to-br from-red-50 to-blue-50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-all duration-500"
                  src={service.image}
                  initial={{ opacity: 0, scale: 1.2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.1,
                    filter: "brightness(1.1) contrast(1.1)"
                  }}
                />
                
                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                
                {/* Service Number Badge */}
                <motion.div
                  className="absolute top-1.5 sm:top-2 md:top-3 lg:top-4 right-1.5 sm:right-2 md:right-3 lg:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>

              {/* Service Content */}
              <motion.div 
                className="p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              >
                {/* Service Title */}
                <motion.h2 
                  className="font-extrabold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-2 sm:mb-2.5 md:mb-3 lg:mb-4 font-montserrat group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h2>

                {/* Learn More Link */}
                <motion.div
                  className="flex items-center justify-center text-red-600 group-hover:text-blue-600 font-semibold text-xs transition-colors duration-300"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Learn More</span>
                  <motion.svg
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ml-1 sm:ml-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.div>
              </motion.div>

              {/* Decorative Bottom Border */}
              <motion.div
                className="h-1 bg-gradient-to-r from-red-600 to-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                whileHover={{ height: 4 }}
              />
            </motion.article>
          ))}
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="text-center mt-12 sm:mt-14 md:mt-16 py-8 sm:py-10 md:py-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-6 sm:p-7 md:p-8 text-white max-w-xl sm:max-w-2xl mx-auto"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-3 md:mb-4 font-montserrat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Ready to Transform Your Space with Barrisol Solutions?
            </motion.h3>
            <motion.p 
              className="text-xs sm:text-sm md:text-base mb-4 sm:mb-5 md:mb-6 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              From 3D stretch ceilings to fiber optic lighting - let's create something extraordinary together.
            </motion.p>
            <motion.button
              className="bg-white text-red-600 font-semibold py-2 sm:py-2.5 md:py-3 px-4 sm:px-6 md:px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 font-montserrat text-xs sm:text-sm md:text-base"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.section>
      </main>

      {/* Custom Styles for Montserrat Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default WhatWeDo;

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // All available images from public folder
  const images = [
 {
      src: "/TEXTILE BARRISOL SKY STRETCH CEILING.png",
      alt: "TEXTILE BARRISOL SKY STRETCH CEILING",
      title: "TEXTILE BARRISOL SKY STRETCH CEILING"
    },
    {
      src: "/CHANDELIER  TEXTILE  BARRISOL CEILING.png",
      alt: "CHANDELIER TEXTILE BARRISOL CEILING",
      title: "CHANDELIER TEXTILE BARRISOL CEILING"
    },
    {
      src: "/TEXTILE BARRISOL FABRIC CEILING.png",
      alt: "TEXTILE BARRISOL FABRIC CEILING",
      title: "TEXTILE BARRISOL FABRIC CEILING"
    },
    {
      src: "/TEXTILE BARRISOL TRANSLUCENT STRETCH CEILING.png",
      alt: "TEXTILE BARRISOL TRANSLUCENT STRETCH CEILING",
      title: "TEXTILE BARRISOL TRANSLUCENT STRETCH CEILING"
    },
    {
      src: "/TEXTILE BARRISOL MOVING CLOUD STRERCH CEILING.png",
      alt: "TEXTILE BARRISOL MOVING CLOUD STRERCH CEILING",
      title: "TEXTILE BARRISOL MOVING CLOUD STRERCH CEILING"
    },
    {
      src: "/TEXTILE BARRISOL DECORATIVE CEILING.png",
      alt: "TEXTILE BARRISOL DECORATIVE CEILING",
      title: "TEXTILE BARRISOL DECORATIVE CEILING"
    },
    {
      src: "/TEXTILE BARRISOL FRANCH ROOF  STRERCH CEILING.png",
      alt: "TEXTILE BARRISOL FRENCH ROOF STRERCH CEILING",
      title: "TEXTILE BARRISOL FRENCH ROOF STRERCH CEILING"
    },
    {
      src: "/BARRISOL 2X2 PANEL PRINTED TILE.png",
      alt: "BARRISOL 2X2 PANEL PRINTED TILE",
      title: "BARRISOL 2X2 PANEL PRINTED TILE"
    },
    {
      src: "/TEXTILE MURAL ART WALL and CEILING.png",
      alt: "TEXTILE MURAL ART WALL and CEILING",
      title: "TEXTILE MURAL ART WALL and CEILING"
    },
    {
      src: "/RGBWW PIXEL ASIFTEXTILE BARRISOL  STRETCH CEILING.png",
      alt: "RGBWW PIXEL ASIFTEXTILE BARRISOL STRETCH CEILING",
      title: "RGBWW PIXEL ASIFTEXTILE BARRISOL STRETCH CEILING"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants
  const slideVariants = {
    enter: {
      y: -1000,
      opacity: 0,
      scale: 0.8
    },
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      y: 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const titleVariants = {
    enter: {
      y: 50,
      opacity: 0
    },
    center: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <div className="relative w-full h-[50vh] xs:h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] overflow-hidden bg-black">
      {/* Main Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.img
            src={images[currentSlide].src}
            alt={images[currentSlide].alt}
            className="w-full h-full object-contain bg-black"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          
          {/* Title */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 md:p-6 lg:p-8 text-white"
            variants={titleVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.h2 
              className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-1 xs:mb-2 sm:mb-3 lg:mb-4 font-montserrat"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                {images[currentSlide].title}
              </span>
            </motion.h2>
            <motion.p 
              className="text-2xs xs:text-xs sm:text-sm md:text-base lg:text-lg opacity-80 max-w-xs sm:max-w-md lg:max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Innovative ceiling and interior solutions by TEXTILE BARRISOL STRETCH CEILING INDUSTRIES
            </motion.p>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        className="absolute left-2 xs:left-3 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 xs:p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        onClick={handlePrev}
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        className="absolute right-2 xs:right-3 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1.5 xs:p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300"
        onClick={handleNext}
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-2 xs:bottom-3 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1.5 xs:space-x-2 sm:space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-gradient-to-r from-red-500 to-blue-500' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${((currentSlide + 1) / images.length) * 100}%` }}
        transition={{ duration: 0.5 }}
      />

      {/* Slide Counter */}
      <motion.div
        className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 bg-black/40 text-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <span className="font-semibold text-2xs xs:text-xs sm:text-sm">
          {currentSlide + 1} / {images.length}
        </span>
      </motion.div>

      {/* Auto-play indicator */}
      <motion.div
        className="absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 flex items-center gap-1 xs:gap-1.5 sm:gap-2 bg-black/40 text-white px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-full backdrop-blur-sm"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <motion.div
          className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-red-500 rounded-full"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
        <span className="text-3xs xs:text-2xs sm:text-xs font-medium">Auto Play</span>
      </motion.div>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap');
        .font-montserrat {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  );
};

export default Slides;

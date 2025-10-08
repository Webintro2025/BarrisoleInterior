"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const banners = [
    {
      id: 1,
      image: "/banner1.png", 
      title: "From Ceilings to Floors",
      subtitle: "We Create Living Art",
      description: "Elegant and artistic designs perfect for premium home interiors and showrooms. Experience the beauty of architectural innovation.",
      category: "Artistic Excellence"
    },
    {
      id: 2,
      image: "  /banner4.png",
      title: "Redefining Spaces",
      subtitle: "with 3D Ceilings, Walls & Floors",
      description: "Professional & modern solutions for luxury projects. Transform your space with our cutting-edge ceiling and interior technologies.",
      category: "Professional Solutions"
    },
    {
      id: 3,
      image: "/banner5.png",
      title: "India's Most Trusted",
      subtitle: "Name in Stretch Ceilings & Epoxy Floors",
      description: "Building trust through quality craftsmanship and innovative solutions. Your premier destination for interior transformation.",
      category: "Trusted Partner"
    }
    
    ,
    
    {
      id: 4,
      image: "/banner7.png",
      title: "Elevate Your Interiors",
      subtitle: "with Barrisol & More",
      description: "Discover premium interior solutions with Barrisol stretch ceilings, 3D walls, and epoxy floors. Elevate your space with elegance and innovation.",
      category: "Elevated Interiors"

    },
    {

      id: 5,
      image: "/banner8.png",
      title: "Transforming Spaces",
      subtitle: "with Barrisol & More",
      description: "Discover the art of interior transformation with Barrisol stretch ceilings, 3D walls, and epoxy floors. Elevate your space today.",
      category: "Interior Excellence"

    }
,
    {
      id: 9,
      image: "/banner1.jpg ",
      title: "Innovate Your Interiors",
      subtitle: "with Barrisol & More",
      description: "Explore cutting-edge interior solutions with Barrisol stretch ceilings, 3D walls, and epoxy floors. Transform your space today.",
      category: "Innovative Solutions"
    
    },


    {

      id: 10,
      image: "/banner3.jpeg",
      title: "Transforming Spaces",
      subtitle: "with Barrisol & More",
      description: "Discover the art of interior transformation with Barrisol stretch ceilings, 3D walls, and epoxy floors. Elevate your space today.",
      category: "Interior Excellence"
    }
    ,
    {
      id: 6,
      image: "/banner6.png",
      title: "Elevate Your Environment",
      subtitle: "with Premium Interior Solutions",
      description: "Transform your living and working spaces with our expert interior solutions. From ceilings to floors, we bring your vision to life.",
      category: "Premium Interiors"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderColor: "rgba(255, 255, 255, 0.8)",
      transition: {
        duration: 0.3
      }
    }
  };

  const navVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 1
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 1.2
      }
    }
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh] bg-black text-white font-sans overflow-hidden">
      {/* Background Images with Slide Animation */}
      <AnimatePresence mode="wait">
        <motion.img
          key={banners[currentSlide].id}
          src={banners[currentSlide].image}
          alt={`${banners[currentSlide].title} - ${banners[currentSlide].subtitle}`}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.45]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main 
          key={`content-${banners[currentSlide].id}`}
          className="relative z-10 max-w-[1200px] mx-auto h-full flex flex-col justify-center px-3 sm:px-4 md:px-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
        <motion.div 
          className="uppercase text-[10px] sm:text-xs md:text-sm font-bold tracking-wider sm:tracking-widest mb-1 sm:mb-1.5 max-w-[150px] sm:max-w-[200px] text-red-400"
          variants={textVariants}
        >
          {banners[currentSlide].category}
        </motion.div>
        
        <motion.h1 
          className="font-extrabold leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-[280px] sm:max-w-[350px] md:max-w-[450px] mb-1.5 sm:mb-2"
          variants={textVariants}
        >
          <span className="bg-gradient-to-r from-white via-blue-200 to-red-200 bg-clip-text text-transparent">
            {banners[currentSlide].title}
          </span>
          <br />
          <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            {banners[currentSlide].subtitle}
          </span>
        </motion.h1>
        
        <motion.div 
          className="flex max-w-[280px] sm:max-w-[350px] md:max-w-[450px] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-5 flex-col md:flex-row"
          variants={textVariants}
        >
          <div className="md:border-b md:border-b-white/30 md:pb-1.5 md:mr-3 mb-2 md:mb-0">
            {banners[currentSlide].description}
          </div>
        </motion.div>
        
        <motion.button
          className="border border-white/30 rounded-md px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 max-w-[120px] sm:max-w-[150px] md:max-w-[180px] text-xs sm:text-sm font-bold uppercase tracking-wide sm:tracking-wider flex items-center justify-center transition-all duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <span className="block sm:hidden">About</span>
          <span className="hidden sm:block">About Us</span>
          <motion.svg 
            className="ml-1 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.button>
        </motion.main>
      </AnimatePresence>

      {/* Desktop Left Navigation */}
      <motion.nav
        className="absolute top-1/2 left-3 md:left-5 lg:left-10 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3 z-20"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Slide Indicators */}
        {banners.map((_, index) => (
          <motion.div
            key={index}
            className={`cursor-pointer transition-all duration-300 ${
              index === currentSlide 
                ? 'w-5 h-5 md:w-6 md:h-6 rounded-full border border-white flex items-center justify-center opacity-100' 
                : 'w-1.5 h-1.5 rounded-full bg-white opacity-30 hover:opacity-60'
            }`}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentSlide && (
              <motion.div 
                className="w-2 h-2 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
        
        <div className="mt-4 md:mt-5 flex flex-col gap-2 font-bold text-base md:text-lg text-white">
          <span className="opacity-60 text-sm md:text-base">0{currentSlide + 1}</span>
          <span className="opacity-100 text-sm md:text-base">0{banners.length}</span>
        </div>
        
        <motion.button
          className="mt-3 w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/30 flex items-center justify-center text-white text-lg md:text-xl cursor-pointer hover:border-white transition-all duration-300"
          onClick={prevSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        
        <motion.button
          className="mt-2 md:mt-3 w-10 h-10 md:w-12 md:h-12 rounded-lg border border-white/30 flex items-center justify-center text-white text-lg md:text-xl cursor-pointer hover:border-white transition-all duration-300"
          onClick={nextSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        className="absolute bottom-14 left-1/2 -translate-x-1/2 flex sm:hidden items-center justify-center gap-4 z-20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Previous Button */}
        <motion.button
          className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center text-white cursor-pointer hover:border-white transition-all duration-300"
          onClick={prevSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {banners.map((_, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-4 h-4 rounded-full border border-white flex items-center justify-center opacity-100' 
                  : 'w-1 h-1 rounded-full bg-white opacity-30 hover:opacity-60'
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === currentSlide && (
                <motion.div 
                  className="w-1.5 h-1.5 bg-gradient-to-r from-red-400 to-blue-400 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Next Button */}
        <motion.button
          className="w-8 h-8 rounded-lg border border-white/30 flex items-center justify-center text-white cursor-pointer hover:border-white transition-all duration-300"
          onClick={nextSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </motion.nav>

      {/* Bottom Right Social */}
      <motion.div
        className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-10 right-3 sm:right-4 md:right-5 lg:right-10 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 z-20"
        variants={socialVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="font-bold text-[10px] sm:text-xs uppercase tracking-wide sm:tracking-widest hidden sm:block">Follow Us</div>
        <div className="flex gap-1.5 sm:gap-2">
          <motion.a
            href="https://twitter.com/barrisolinterior"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/15 rounded-lg sm:rounded-xl w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-white cursor-pointer transition-all duration-300"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://instagram.com/barrisolinterior"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/15 rounded-lg sm:rounded-xl w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-white cursor-pointer transition-all duration-300"
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              boxShadow: "0 5px 15px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 z-20"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear",
          repeatDelay: 0
        }}
        key={currentSlide}
        style={{ display: isAutoPlaying ? 'block' : 'none' }}
      />
    </div>
  );
};

export default HomeBanner;
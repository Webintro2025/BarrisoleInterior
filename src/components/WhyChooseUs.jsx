'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhyChooseUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reasonsData = [
    {
      id: 1,
      title: "15+ Years of Specialised Experience",
      description: "Backed by A2Z Architectural and Engineering Company (AEC), we bring over a decade of domain expertise in 3D stretch ceilings, optical lighting, and epoxy floor design, ensuring flawless results every time.",
      icon: "🏆",
      backgroundImage: "/3dstrechceling.png"
    },
    {
      id: 2,
      title: "India's Leading In-House Manufacturer",
      description: "We are a top-volume producer of ceiling and wall materials in India, with complete in-house manufacturing, from PVC stretch fabric and epoxy resins to LED modules and installation accessories.",
      icon: "🏭",
      backgroundImage: "/PRINTED PANEL CEILING.png"
    },
    {
      id: 3,
      title: "Diverse Product Portfolio – All Under One Roof",
      description: "From shooting star optic ceilings to 3D murals, water bubble walls, stretch walls, epoxy tables, and aqua art, our catalog serves all interior segments — residential, retail, hospitality, and corporate.",
      icon: "🎨",
      backgroundImage: "/RGBWpROGRAMMINGsTRETCHcEILING.png"
    },
    {
      id: 4,
      title: "No MOQ – Perfect for Every Project Size",
      description: "Whether you're a single-room home renovation client or a commercial builder, we accommodate every scale of order with no minimum quantity requirement.",
      icon: "📏",
      backgroundImage: "/DREAMSOL VIRTUAL FRENCH CEILING.png"
    },
    {
      id: 5,
      title: "Strong R&D and Design Innovation",
      description: "Our dedicated R&D team constantly develops new designs, lighting integrations, and structural enhancements — keeping you ahead in aesthetic trends and technology.",
      icon: "🔬",
      backgroundImage: "/MURAL CEILING ART.png"
    },
    {
      id: 6,
      title: "Complete A-to-Z Execution",
      description: "We handle everything: Material Production, Customization & Prototyping, Installation Accessories & Lighting, Site Installation Support, Post-sale Assistance. You get one vendor for the entire job.",
      icon: "✅",
      backgroundImage: "/star.png"
    },
    {
      id: 7,
      title: "Affordable Excellence",
      description: "We deliver international-quality decorative and structural solutions at competitive Indian pricing, making artistic luxury accessible for every space.",
      icon: "💎",
      backgroundImage: "/TRANSLUCENT STRETCH CEILING.png"
    },
    {
      id: 8,
      title: "Trusted Leadership & Quality Process",
      description: "Under the guidance of Mr. Asif Ali, our processes follow a strict QC chain — from raw material sourcing to final packaging and delivery, ensuring quality, consistency, and client satisfaction.",
      icon: "👨‍💼",
      backgroundImage: "/CLOUDSTRETCHCEILING.png"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasonsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [reasonsData.length]);

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

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0,
      scale: 0.8
    },
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      x: -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % reasonsData.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + reasonsData.length) % reasonsData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-[95vw] mx-auto px-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Title */}
        <motion.div 
          className="text-center mb-16"
          variants={titleVariants}
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Barrisol Interior Solution - Creating immersive environments through cutting-edge ceiling, wall, flooring, and aqua art systems
          </motion.p>
        </motion.div>

        {/* Main Slideshow */}
        <div className="relative h-[80vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.2, rotate: 2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={reasonsData[currentSlide].backgroundImage}
                  alt={reasonsData[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                />
                {/* Animated overlay patterns */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-blue-500/20"
                  animate={{ 
                    background: [
                      "linear-gradient(45deg, rgba(239, 68, 68, 0.2), transparent, rgba(59, 130, 246, 0.2))",
                      "linear-gradient(90deg, rgba(59, 130, 246, 0.2), transparent, rgba(239, 68, 68, 0.2))",
                      "linear-gradient(135deg, rgba(239, 68, 68, 0.2), transparent, rgba(59, 130, 246, 0.2))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="absolute inset-0 flex items-center"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              >
                <div className="max-w-4xl ml-16 text-white">
                  <motion.div
                    className="text-8xl mb-8 filter drop-shadow-2xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      textShadow: "0 0 30px rgba(255, 255, 255, 0.8)"
                    }}
                  >
                    {reasonsData[currentSlide].icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                    }}
                  >
                    <span className="bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
                      {reasonsData[currentSlide].title}
                    </span>
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-3xl"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ 
                      color: "#ffffff",
                      textShadow: "0 0 10px rgba(255, 255, 255, 0.3)"
                    }}
                  >
                    {reasonsData[currentSlide].description}
                  </motion.p>

                  <motion.div
                    className="mt-10 flex items-center gap-6"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.span 
                      className="text-4xl font-bold text-red-400"
                      whileHover={{ 
                        scale: 1.2,
                        textShadow: "0 0 15px rgba(239, 68, 68, 0.8)"
                      }}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✅
                    </motion.span>
                    <motion.span 
                      className="text-lg text-gray-300 font-medium"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      Reason #{currentSlide + 1} of {reasonsData.length}
                    </motion.span>
                    <motion.div
                      className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-red-500/30 to-transparent hover:from-red-500/50 text-white p-5 rounded-full backdrop-blur-md transition-all duration-300 group border border-white/20"
            onClick={handlePrev}
            whileHover={{ 
              scale: 1.2, 
              x: -15,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
            }}
            whileTap={{ scale: 0.8 }}
            aria-label="Previous reason"
            animate={{ 
              y: [-5, 5, -5],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg className="w-8 h-8 group-hover:text-red-400 transition-colors filter drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-l from-blue-500/30 to-transparent hover:from-blue-500/50 text-white p-5 rounded-full backdrop-blur-md transition-all duration-300 group border border-white/20"
            onClick={handleNext}
            whileHover={{ 
              scale: 1.2, 
              x: 15,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.8 }}
            aria-label="Next reason"
            animate={{ 
              y: [5, -5, 5],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg className="w-8 h-8 group-hover:text-blue-400 transition-colors filter drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <motion.div 
          className="flex justify-center mt-10 space-x-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {reasonsData.map((_, index) => (
            <motion.button
              key={index}
              className={`w-5 h-5 rounded-full transition-all duration-500 border-2 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-red-500 to-blue-500 scale-150 border-white shadow-lg' 
                  : 'bg-white/20 hover:bg-white/40 border-white/30 hover:border-white/60'
              }`}
              onClick={() => goToSlide(index)}
              whileHover={{ 
                scale: index === currentSlide ? 1.7 : 1.4,
                boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.8 }}
              aria-label={`Go to reason ${index + 1}`}
              animate={index === currentSlide ? {
                boxShadow: [
                  "0 0 0 0 rgba(255, 255, 255, 0.7)",
                  "0 0 0 10px rgba(255, 255, 255, 0)",
                  "0 0 0 0 rgba(255, 255, 255, 0)"
                ]
              } : {}}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            />
          ))}
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
        >
          {[
            { number: "15+", label: "Years Experience", icon: "⏰" },
            { number: "1000+", label: "Projects Completed", icon: "🏗️" },
            { number: "50+", label: "Product Varieties", icon: "🎨" },
            { number: "100%", label: "Client Satisfaction", icon: "😊" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center group cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="text-3xl mb-2"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                whileHover={{ color: "#ef4444" }}
              >
                {stat.number}
              </motion.div>
              <motion.div 
                className="text-gray-300 text-sm"
                whileHover={{ color: "#3b82f6" }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Auto-play indicator */}
        <motion.div
          className="absolute top-8 right-8 flex items-center gap-2 bg-black/40 text-white px-4 py-2 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            className="w-2 h-2 bg-red-500 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
          <span className="text-sm font-medium">Auto Slide</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyChooseUs;

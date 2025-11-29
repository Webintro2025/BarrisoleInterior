'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image gallery data for auto-scroll
  const galleryImages = [
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

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % galleryImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const text = "TEXTILE BARRISOL STRETCH CEILING INDUSTRIES";
  const tabs = ['History', 'Mission', 'Vision'];
  
  // Animation variants for different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
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

  const slideInRight = {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const tabContent = {
    0: {
      content: [
        "At Interique Interior Design, we believe that your space should tell your story. Our team of creative and skilled designers is committed to transforming your vision into a reality, creating environments that reflect your personality, style, and functional needs.",
        "With years of experience and a passion for innovative design, we specialize in both residential and commercial interiors.",
        "From conceptualization to execution, we manage every aspect of the design process with attention to detail."
      ],
      progress: [
        { label: 'Renovation', value: 75 },
        { label: 'Architecture', value: 95 },
        { label: 'Functional Spaces', value: 85 }
      ]
    },
    1: {
      content: ["Our mission is to create exceptional interior spaces that enhance the quality of life for our clients while maintaining sustainability and innovation in every project."],
      progress: []
    },
    2: {
      content: ["Our vision is to become the leading interior design company in India, known for our creativity, quality, and commitment to client satisfaction."],
      progress: []
    }
  };

  return (
    <div className="bg-[#fffefa] text-black overflow-hidden">
      <motion.div 
        className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5 py-6 sm:py-3  md:py-10 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Main Image Section - Scale In Animation */}
        <motion.div 
          className="w-full lg:flex-1 lg:min-w-[320px] lg:max-w-[480px] relative overflow-hidden rounded-lg order-2 lg:order-1"
          variants={scaleIn}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div>
          <motion.img
            src="/About.jpeg"
            alt="TEXTILE BARRISOL STRETCH CEILING INDUSTRIES - Premium Ceiling and Wall Solutions"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover pb-6 rounded-lg"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1)"
            }}
          />
           <motion.img
           
            src="/owner.png"
            alt="Mr. Asif Ali - Founder of TEXTILE BARRISOL STRETCH CEILING INDUSTRIES"
            className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-lg"
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              filter: "brightness(1.1)"
            }}
          />
          </div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
         Mr. Asif Ali 
            </h3>
            <p className="text-xs sm:text-sm opacity-90"> Founder of TEXTILE BARRISOL STRETCH CEILING INDUSTRIES</p>
          </motion.div>
        </motion.div>
        
        {/* About Content Section - Slide In Right Animation */}
        <motion.div 
          className="w-full lg:flex-1 lg:min-w-[320px] lg:max-w-[480px] flex flex-col justify-start order-1 lg:order-2"
          variants={slideInRight}
        >
          <motion.h2 
            className="uppercase font-extrabold text-xs sm:text-sm md:text-[14px] tracking-wide sm:tracking-wider md:tracking-widest pb-1 sm:pb-1.5 md:pb-2 mb-3 sm:mb-4 max-w-max relative"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              About Us – TEXTILE BARRISOL STRETCH CEILING INDUSTRIES
            </span>
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-red-600 to-blue-600 w-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed mb-4 sm:mb-5 md:mb-6 max-w-[280px] sm:max-w-[350px] md:max-w-[400px] font-normal text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ color: "#2563eb" }}
          >
            Mr. Asif Ali, the visionary behind Textile Barrisol, has dedicated his expertise and passion to transforming modern interiors with innovative ceiling and wall solutions. With a strong foundation in design and technology, he introduced world-class stretch ceiling systems to the Indian market, offering clients a perfect blend of elegance, durability, and functionality.

Under his leadership, Textile Barrisol has grown into a trusted name, delivering premium-quality ceilings, acoustic solutions, and customized designs that redefine spaces in homes, offices, hotels, and commercial projects.
          </motion.p>
          
          <motion.p 
            className="text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-[280px] sm:max-w-[350px] md:max-w-[400px] font-normal text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ color: "#2563eb" }}
          >
            Mr. Asif Ali’s mission is simple – to provide creative, sustainable, and aesthetic solutions that bring imagination to life. His focus on innovation, quality craftsmanship, and customer satisfaction has positioned Textile Barrisol as a leader in the stretch ceiling industry.

At Textile Barrisol, every project reflects a commitment to luxury, precision, and timeless design – turning ordinary ceilings into extraordinary masterpieces.
          </motion.p>
          
          <motion.a 
            href="#" 
            className="text-sm sm:text-base md:text-[16px] lg:text-[18px] font-normal inline-flex items-center gap-2 max-w-max group relative overflow-hidden"
            aria-label="Company Info link"
            whileHover={{ x: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              Company Info
            </span>
            <motion.svg 
              className="w-3 h-3 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 stroke-red-600 group-hover:stroke-blue-600 transition-all duration-300" 
              fill="none" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24" 
              aria-hidden="true" 
              focusable="false"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Interior Design Section */}
      <motion.div 
        className="bg-white text-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.div 
          className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5 py-6 sm:py-8 md:py-10 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          variants={staggerContainer}
        >
          {/* Image Gallery Section - Auto-Scroll Carousel */}
          <motion.section 
            className="relative w-full lg:flex-1 lg:min-w-[280px] lg:max-w-[600px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden order-2 lg:order-1"
            variants={slideInLeft}
          >
            {/* Main Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <motion.img
                    src={galleryImages[currentImageIndex].src}
                    alt={galleryImages[currentImageIndex].alt}
                    className="w-[95%] h-[90%] object-cover rounded-lg shadow-2xl"
                    whileHover={{ 
                      scale: 1.03,
                      rotateY: 3,
                      rotateX: 3,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Title Overlay */}
              <motion.div
                className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 bg-black/70 backdrop-blur-sm rounded-lg p-2 sm:p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.h3 
                  key={currentImageIndex}
                  className="text-white font-bold text-sm sm:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {galleryImages[currentImageIndex].title}
                </motion.h3>
                <motion.p 
                  className="text-gray-300 text-xs mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  Premium Interior Solutions
                </motion.p>
              </motion.div>

              {/* Navigation Dots */}
              <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                {galleryImages.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Previous/Next Arrows */}
              <motion.button
                onClick={() => setCurrentImageIndex(
                  (currentImageIndex - 1 + galleryImages.length) % galleryImages.length
                )}
                className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 text-white hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => setCurrentImageIndex(
                  (currentImageIndex + 1) % galleryImages.length
                )}
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2 text-white hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Progress Bar */}
              <div className="absolute top-2 sm:top-3 left-2 sm:left-3 right-2 sm:right-3 h-0.5 sm:h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentImageIndex + 1) / galleryImages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.section>

          {/* Content and Tabs Section - Slide In Right */}
          <motion.section 
            className="w-full lg:flex-1 lg:min-w-[280px] lg:max-w-[600px] flex flex-col order-1 lg:order-2"
            variants={slideInRight}
          >
            {/* Tab Navigation - Stagger Animation */}
            <motion.nav 
              className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg font-semibold"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`border-b-2 pb-1 focus:outline-none transition-all duration-300 ${
                    activeTab === index
                      ? 'border-red-600 text-red-600'
                      : 'text-gray-400 border-transparent hover:text-blue-600'
                  }`}
                  variants={staggerItem}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.1,
                    color: activeTab === index ? "#dc2626" : "#2563eb"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab}
                </motion.button>
              ))}
            </motion.nav>

            {/* Tab Content - Fade In Up Animation */}
            <motion.article 
              className="text-gray-700 font-light text-sm sm:text-base"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="mb-4 sm:mb-5 md:mb-6 space-y-3 sm:space-y-4"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {tabContent[activeTab].content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="hover:text-blue-600 transition-colors duration-300"
                    variants={staggerItem}
                    whileHover={{ 
                      x: 10,
                      color: "#2563eb"
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              {/* Progress Bars - Scale and Width Animation */}
              {tabContent[activeTab].progress.length > 0 && (
                <motion.div 
                  className="space-y-4 sm:space-y-5 md:space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {tabContent[activeTab].progress.map((item, index) => (
                    <motion.div 
                      key={item.label} 
                      className="space-y-1.5 sm:space-y-2"
                      variants={staggerItem}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                      >
                        <span className="font-semibold text-xs sm:text-sm text-red-600">{item.label}</span>
                        <motion.span 
                          className="font-semibold text-xs sm:text-sm text-blue-600"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ 
                            delay: index * 0.2 + 0.5, 
                            duration: 0.3,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          {item.value}%
                        </motion.span>
                      </motion.div>
                      <div className="relative h-[2px] sm:h-[3px] bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 to-blue-600 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.value}%` }}
                          transition={{ 
                            delay: index * 0.2 + 0.8, 
                            duration: 1.5, 
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.article>
          </motion.section>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const text = "Barrisol Interior Solution";
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
        className="max-w-[1200px] mx-auto px-5 py-10 flex flex-wrap gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {/* Main Image Section - Scale In Animation */}
        <motion.div 
          className="flex-1 min-w-[320px] max-w-[480px] relative overflow-hidden rounded-lg"
          variants={scaleIn}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src="/star.png"
            alt="Barrisol Interior Solution - Premium Ceiling and Wall Solutions"
            className="w-full h-[400px] object-cover rounded-lg"
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
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <motion.div
            className="absolute bottom-6 left-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
              Barrisol Interior Solution
            </h3>
            <p className="text-sm opacity-90">Premium Architectural Finishes</p>
          </motion.div>
        </motion.div>
        
        {/* About Content Section - Slide In Right Animation */}
        <motion.div 
          className="flex-1 min-w-[320px] max-w-[480px] flex flex-col justify-start"
          variants={slideInRight}
        >
          <motion.h2 
            className="uppercase font-extrabold text-[14px] tracking-widest pb-2 mb-4 max-w-max relative"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              About Us – Barrisol Interior Solution
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
            className="text-[16px] md:text-[18px] leading-relaxed mb-6 max-w-[400px] font-normal text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ color: "#2563eb" }}
          >
            Barrisol Interior Solution is a pioneering force in India's interior design and architectural finishing industry, offering cutting-edge ceiling, wall, flooring, and aqua art solutions.
          </motion.p>
          
          <motion.p 
            className="text-[16px] md:text-[18px] leading-relaxed mb-12 max-w-[400px] font-normal text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ color: "#2563eb" }}
          >
            As a trusted division of A2Z Architectural and Engineering Company (AEC), we bring over 15 years of manufacturing and service excellence to projects of every scale — residential, commercial, and institutional.
          </motion.p>
          
          <motion.a 
            href="#" 
            className="text-[16px] md:text-[18px] font-normal inline-flex items-center gap-2 max-w-max group relative overflow-hidden"
            aria-label="Company Info link"
            whileHover={{ x: 10, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <span className="relative z-10 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              Company Info
            </span>
            <motion.svg 
              className="w-4.5 h-4.5 stroke-red-600 group-hover:stroke-blue-600 transition-all duration-300" 
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
          className="max-w-[1200px] mx-auto px-5 py-10 flex flex-wrap gap-10"
          variants={staggerContainer}
        >
          {/* Image Gallery Section - Slide In Left with Stagger */}
          <motion.section 
            className="relative flex-1 min-w-[280px] max-w-[600px] h-[400px] md:h-[320px]"
            variants={slideInLeft}
          >
            <motion.img
              src="star.png"
              alt="Interior room with a beige armchair"
              className="absolute top-10 left-0 z-10 w-[400px] max-w-full h-[320px] object-cover md:top-5 md:left-10 md:w-[280px] md:h-[220px] rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                zIndex: 40,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            />
            <motion.img
              src="Textle.png"
              alt="Cozy living room with sofa"
              className="absolute top-5 left-10 z-20 w-[400px] max-w-full h-[320px] object-cover md:top-2 md:left-7 md:w-[280px] md:h-[220px] rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: -2,
                zIndex: 40,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            />
            <motion.img
              src="/RGBWpROGRAMMINGsTRETCHcEILING.png"
              alt="Beige armchair with decorative vase"
              className="absolute top-0 left-20 z-30 w-[400px] max-w-full h-[320px] object-cover md:top-0 md:left-14 md:w-[280px] md:h-[220px] rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 3,
                zIndex: 40,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            />
          </motion.section>

          {/* Content and Tabs Section - Slide In Right */}
          <motion.section 
            className="flex-1 min-w-[280px] max-w-[600px] flex flex-col"
            variants={slideInRight}
          >
            {/* Tab Navigation - Stagger Animation */}
            <motion.nav 
              className="flex gap-10 mb-6 text-lg font-semibold"
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
              className="text-gray-700 font-light text-base"
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="mb-6 space-y-4"
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
                  className="space-y-6"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {tabContent[activeTab].progress.map((item, index) => (
                    <motion.div 
                      key={item.label} 
                      className="space-y-2"
                      variants={staggerItem}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="flex items-center justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                      >
                        <span className="font-semibold text-sm text-red-600">{item.label}</span>
                        <motion.span 
                          className="font-semibold text-sm text-blue-600"
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
                      <div className="relative h-[3px] bg-gray-200 rounded-full overflow-hidden">
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
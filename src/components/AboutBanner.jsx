"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AboutBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Transform scroll position for parallax effect
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  // Banner slides data
  const slides = [
    {
      image: "/banner1.jpg",
      title: "About Barrisol Interior",
      subtitle: "Transforming Spaces Since 2014",
      description: "Leading provider of innovative ceiling solutions with over 1000+ successful installations.",
      buttonText: "Our Story",
      buttonLink: "#about"
    },
    {
      image: "/banner2.jpg", 
      title: "Our Mission",
      subtitle: "Excellence in Every Installation",
      description: "Committed to delivering premium quality ceiling solutions that exceed expectations.",
      buttonText: "Learn More",
      buttonLink: "#mission"
    },
    {
      image: "/banner3.jpg",
      title: "Why Choose Us",
      subtitle: "10+ Years of Expertise",
      description: "Trusted by 500+ clients for our quality, innovation, and professional service.",
      buttonText: "Discover",
      buttonLink: "#why-choose"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const slideIn = {
    initial: { opacity: 0, x: -100 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section 
      className="relative h-screen overflow-hidden flex items-center justify-center"
      style={{ y: backgroundY, opacity }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        key={currentSlide}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-gray-900/80 to-blue-900/90" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 bg-white/30 rounded-full"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 left-16 w-6 h-6 bg-red-500/40 rounded-full"
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500/50 rounded-full"
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            key={`content-${currentSlide}`}
            variants={slideIn}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              variants={fadeInUp}
              whileHover={{
                scale: 1.02,
                textShadow: "0 0 30px rgba(255,255,255,0.8)",
                transition: { duration: 0.3 }
              }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-red-400 font-semibold"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={slides[currentSlide].buttonLink}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                {slides[currentSlide].buttonText}
              </motion.a>
              
              <motion.a
                href="tel:+919718921229"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Statistics Cards */}
          <motion.div 
            className="space-y-6"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
          >
            {[
              { number: "1000+", label: "Projects Completed", color: "from-red-500 to-red-600" },
              { number: "500+", label: "Happy Clients", color: "from-blue-500 to-blue-600" },
              { number: "10+", label: "Years Experience", color: "from-green-500 to-green-600" },
              { number: "98%", label: "Satisfaction Rate", color: "from-purple-500 to-purple-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 + 1, duration: 0.6 }
                }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white font-bold text-lg">{stat.number}</span>
                  </motion.div>
                  <div>
                    <div className="text-white font-semibold text-lg">{stat.label}</div>
                    <div className="text-gray-300 text-sm">and counting...</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-red-500 scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 right-8 z-20"
        animate={{ 
          y: [0, 10, 0],
          transition: { duration: 2, repeat: Infinity }
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.3, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutBanner;

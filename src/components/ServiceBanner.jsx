'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone, FiMail, FiMapPin, FiClock, FiStar, FiTool, FiAward, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ServiceBanner = ({ service }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);

  // Auto-slide functionality
  useEffect(() => {
    const slides = [
      {
        title: service?.title || "Premium Service",
        subtitle: "Professional Quality & Excellence",
        image: service?.image || "/banner1.jpg"
      },
      {
        title: "Expert Installation",
        subtitle: "Skilled Craftsmen & Latest Technology",
        image: "/banner2.jpg"
      },
      {
        title: "Customer Satisfaction",
        subtitle: "Guaranteed Results & Support",
        image: "/banner3.jpg"
      }
    ];

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [service]);

  const slides = [
    {
      title: service?.title || "Premium Service",
      subtitle: "Professional Quality & Excellence",
      image: service?.image || "/banner1.jpg"
    },
    {
      title: "Expert Installation",
      subtitle: "Skilled Craftsmen & Latest Technology",
      image: "/banner2.jpg"
    },
    {
      title: "Customer Satisfaction",
      subtitle: "Guaranteed Results & Support",
      image: "/banner3.jpg"
    }
  ];

  // Animation variants
  const bannerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const slideVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: { duration: 0.8 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, scale: 0.8, rotateY: -15 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  return (
    <motion.section
      className="relative h-[70vh] overflow-hidden"
      variants={bannerVariants}
      initial="initial"
      animate="animate"
      style={{ y: heroY, opacity: heroOpacity }}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial="initial"
            animate={currentSlide === index ? "animate" : "exit"}
            variants={slideVariants}
            style={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-purple-900/70 to-blue-900/80 z-10" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-15">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-40 right-20 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "4s" }}
          className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-20 h-full flex items-center"
        style={{ y: contentY }}
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              variants={contentVariants}
              className="text-white space-y-8"
            >
              <motion.div variants={itemVariants}>
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p 
                  className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6"
                  variants={itemVariants}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p 
                  className="text-base text-gray-300 leading-relaxed"
                  variants={itemVariants}
                >
                  {service?.description ? service.description.substring(0, 150) + "..." : "Experience premium quality and professional service with our expert team."}
                </motion.p>
              </motion.div>

              {/* Quick Benefits */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={contentVariants}
              >
                {(service?.benefits || ["Quality Service", "Expert Team", "Best Prices", "24/7 Support"]).slice(0, 4).map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="flex items-center p-3 rounded-lg backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    <FiCheck className="text-green-400 mr-2 text-base" />
                    <span className="text-xs font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={contentVariants}
              >
                <motion.a
                  href="https://wa.me/919718921229"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                  <span className="text-sm">WhatsApp Now</span>
                </motion.a>
                
                <motion.a
                  href="tel:+919718921229"
                  variants={hoverVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <FiPhone className="text-lg" />
                  <span className="text-sm">Call Now</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Service Info Cards */}
            <motion.div
              variants={contentVariants}
              className="space-y-6"
            >
              {/* Service Highlights */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <FiStar className="text-yellow-400 text-xl mr-2" />
                  <h3 className="text-lg font-bold text-white">Premium Quality</h3>
                </div>
                <p className="text-gray-200 text-xs leading-relaxed">
                  Experience the finest quality materials and expert craftsmanship with our professional service.
                </p>
              </motion.div>

              {/* Expert Team */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, rotateY: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <FiTool className="text-blue-400 text-xl mr-2" />
                  <h3 className="text-lg font-bold text-white">Expert Installation</h3>
                </div>
                <p className="text-gray-200 text-xs leading-relaxed">
                  Our skilled craftsmen ensure perfect installation with attention to every detail.
                </p>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                variants={cardVariants}
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className="bg-gradient-to-r from-red-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-center mb-3">
                  <FiPhone className="text-green-400 text-xl mr-2" />
                  <h3 className="text-lg font-bold text-white">Get Free Quote</h3>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-200 text-xs">📞 +91 97189 21229</p>
                  <p className="text-gray-200 text-xs">📧 info@barrisolinterior.com</p>
                  <p className="text-gray-200 text-xs">⏰ 24/7 Available</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        variants={contentVariants}
      >
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-8 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-xs mb-1">Scroll</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ServiceBanner;

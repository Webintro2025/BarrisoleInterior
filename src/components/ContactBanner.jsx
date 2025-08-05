"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Transform scroll position for parallax effect
  const backgroundY = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  // Banner slides data
  const slides = [
    {
      image: "/banner1.jpg",
      title: "Get In Touch",
      subtitle: "Let's Create Something Amazing Together",
      description: "Ready to transform your space? Contact us for a free consultation and quote.",
      highlight: "Free Consultation"
    },
    {
      image: "/banner2.jpg", 
      title: "Contact Us",
      subtitle: "24/7 Customer Support",
      description: "Our expert team is here to help you with all your ceiling solution needs.",
      highlight: "Expert Support"
    },
    {
      image: "/banner3.jpg",
      title: "Visit Our Office",
      subtitle: "Experience Our Showroom",
      description: "See our premium ceiling solutions in person at our Noida showroom.",
      highlight: "Live Demo"
    }
  ];

  // Contact information
  const contactInfo = [
    {
      icon: FiPhone,
      title: "Call Us",
      details: ["+91-9718921229", "+91-9548829492"],
      color: "from-red-500 to-red-600",
      link: "tel:+919718921229"
    },
    {
      icon: FiMail,
      title: "Email Us", 
      details: ["illusionbarrisol@gmail.com"],
      color: "from-blue-500 to-blue-600",
      link: "mailto:illusionbarrisol@gmail.com"
    },
    {
      icon: FiMapPin,
      title: "Visit Us",
      details: ["D-304, Sector 10", "Noida 201301"],
      color: "from-green-500 to-green-600",
      link: "#map"
    },
    {
      icon: FiClock,
      title: "Working Hours",
      details: ["Mon - Sat: 9AM - 6PM", "Sunday: By Appointment"],
      color: "from-purple-500 to-purple-600"
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

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-gray-900/85 to-blue-900/90" />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            key={`content-${currentSlide}`}
            variants={slideIn}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-red-500/20 backdrop-blur-sm rounded-full border border-red-500/30"
              variants={fadeInUp}
            >
              <span className="text-red-400 font-semibold">{slides[currentSlide].highlight}</span>
            </motion.div>

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
              className="text-2xl md:text-3xl text-blue-400 font-semibold"
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
                href="https://wa.me/919718921229"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </motion.a>
              
              <motion.a
                href="tel:+919718921229"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 border-2 border-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <FiPhone className="text-xl" />
                Call Now
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Info Cards */}
          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  x: 10,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: index * 0.1 + 0.8, duration: 0.6 }
                }}
              >
                {info.link ? (
                  <a href={info.link} className="block">
                    <ContactCard info={info} />
                  </a>
                ) : (
                  <ContactCard info={info} />
                )}
              </motion.div>
            ))}

            {/* Quick Message Button */}
            <motion.div
              className="pt-4"
              variants={fadeInUp}
              transition={{ delay: 1.2 }}
            >
              <motion.a
                href="#contact-form"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300"
              >
                <FiMessageCircle className="text-xl" />
                Send us a Message
              </motion.a>
            </motion.div>
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

// Contact Card Component
const ContactCard = ({ info }) => (
  <div className="flex items-center space-x-4">
    <motion.div 
      className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <info.icon className="text-white text-xl" />
    </motion.div>
    <div className="flex-1">
      <div className="text-white font-semibold text-lg mb-1">{info.title}</div>
      {info.details.map((detail, idx) => (
        <motion.div 
          key={idx}
          className="text-gray-300 text-sm"
          whileHover={{ color: "#ffffff", x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {detail}
        </motion.div>
      ))}
    </div>
  </div>
);

export default ContactBanner;

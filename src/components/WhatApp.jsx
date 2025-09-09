'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Replace with your actual WhatsApp number (include country code without +)
    const phoneNumber = '9718921229'; // Your phone number
    const message = encodeURIComponent('Hello! I am interested in your ceiling solutions. Please provide more information.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Try multiple methods to ensure it works
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback method
      window.location.href = whatsappUrl;
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1.2,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full mb-2 right-0 px-3 py-1.5 bg-green-600 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
      </motion.div>

      {/* Main Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer z-10"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(34, 197, 94, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
        style={{ pointerEvents: 'auto' }}
      >
        {/* Background pulse animation */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full opacity-75 pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.75, 0.2, 0.75]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* WhatsApp Icon */}
        <motion.div
          className="relative z-20 pointer-events-none"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaWhatsapp className="text-2xl sm:text-3xl" />
        </motion.div>

        {/* Online indicator */}
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border-2 border-white pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.button>

      {/* Chat bubbles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-300 rounded-full"
            style={{
              right: `${15 + i * 10}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [-8, -16, -8],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Notification badge */}
      <motion.div
        className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        !
      </motion.div>

      {/* Ripple effect on hover */}
      <motion.div
        className="absolute inset-0 bg-green-400 rounded-full opacity-0 group-hover:opacity-30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0, 0.3, 0]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default WhatsAppButton;

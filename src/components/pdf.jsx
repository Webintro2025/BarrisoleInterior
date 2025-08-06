'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const PDFDownloader = () => {
  const handlePDFOpen = () => {
    // Open PDF from public folder in new tab
    const pdfUrl = '/brochureee.pdf'; // Put your PDF file in the public folder
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      className="fixed bottom-4 left-4 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 20
      }}
    >
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        View Brochure
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </motion.div>

      {/* Main Button */}
      <motion.button
        onClick={handlePDFOpen}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 10px 30px rgba(239, 68, 68, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="View PDF Brochure"
      >
        {/* Background pulse animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-full opacity-75"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.75, 0.3, 0.75]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaFilePdf className="text-lg sm:text-xl" />
          </motion.div>
          
          {/* Download indicator */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
            animate={{
              y: [0, -3, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaDownload className="text-white text-xs" />
          </motion.div>
        </div>
      </motion.button>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [-10, -20, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PDFDownloader;

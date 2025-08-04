'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform scroll position to background opacity
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const navItems = [
    { name: 'HOME', hasDropdown: false },
    { name: 'ABOUT US', hasDropdown: false },
    { name: 'SERVICES', hasDropdown: false },
    { name: 'CONTACT US', hasDropdown: false },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      }}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className={`text-[20px] font-bold select-none tracking-widest transition-colors duration-300 ${
            isScrolled 
              ? 'bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent' 
              : 'text-white'
          }`}
          aria-label="Barrisol Interior Solution logo"
          variants={logoVariants}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        >
          BARRISOL INTERIOR SOLUTION
        </motion.div>

        {/* Navigation Menu */}
        <motion.nav 
          className="flex items-center space-x-7 text-[14px] font-bold select-none"
          variants={itemVariants}
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href="#"
              className={`relative flex items-center transition-all duration-300 ${
                isScrolled
                  ? 'text-red-600 hover:text-blue-600'
                  : 'text-white hover:text-red-300'
              }`}
              aria-current={item.name === 'HOME' ? 'page' : undefined}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* WhatsApp Contact Button */}
        <motion.div
          className="flex items-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/919718921229"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 font-semibold text-sm transition-all duration-300 ${
              isScrolled
                ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600'
                : 'border-white text-white hover:bg-white hover:text-red-600 hover:border-white'
            }`}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Animated border bottom */}
      <motion.div
        className={`h-[1px] ${
          isScrolled 
            ? 'bg-gradient-to-r from-red-600 to-blue-600' 
            : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.header>
  );
};

export default Navbar;

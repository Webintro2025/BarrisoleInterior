'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import { CEILING_SERVICES } from '@/data/servicesData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
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
    { name: 'SERVICES', hasDropdown: true },
    { name: 'CONTACT US', hasDropdown: false },
  ];

  // Dynamically get services from CEILING_SERVICES data
  const servicesDropdownItems = CEILING_SERVICES.map(service => ({
    name: service.title.toUpperCase(),
    slug: service.slug
  }));

  // Handle dropdown hover effects
  const handleServicesHover = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    const timeout = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150); // Reduced delay for better UX
    setHoverTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownLeave = () => {
    setServicesDropdownOpen(false);
  };

  // Dropdown animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05
      }
    }
  };

  const dropdownItemVariants = {
    hidden: {
      opacity: 0,
      x: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

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
        <Link href="/">
          <motion.div
            className={`text-[20px] font-bold select-none tracking-widest transition-colors duration-300 cursor-pointer ${
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
        </Link>

        {/* Navigation Menu */}
        <motion.nav 
          className="flex items-center space-x-7 text-[14px] font-bold select-none relative"
          variants={itemVariants}
        >
          {navItems.map((item, index) => (
            <div key={item.name} className="relative">
              {item.name === 'HOME' ? (
                <Link href="/">
                  <motion.div
                    className={`relative flex items-center transition-all duration-300 cursor-pointer ${
                      isScrolled
                        ? 'text-red-600 hover:text-blue-600'
                        : 'text-white hover:text-red-300'
                    }`}
                    aria-current="page"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ) : item.name === 'ABOUT US' ? (
                <Link href="/about">
                  <motion.div
                    className={`relative flex items-center transition-all duration-300 cursor-pointer ${
                      isScrolled
                        ? 'text-red-600 hover:text-blue-600'
                        : 'text-white hover:text-red-300'
                    }`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ) : item.name === 'CONTACT US' ? (
                <Link href="/contact">
                  <motion.div
                    className={`relative flex items-center transition-all duration-300 cursor-pointer ${
                      isScrolled
                        ? 'text-red-600 hover:text-blue-600'
                        : 'text-white hover:text-red-300'
                    }`}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  href="#"
                  className={`relative flex items-center transition-all duration-300 ${
                    isScrolled
                      ? 'text-red-600 hover:text-blue-600'
                      : 'text-white hover:text-red-300'
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={item.name === 'SERVICES' ? handleServicesHover : undefined}
                  onMouseLeave={item.name === 'SERVICES' ? handleServicesLeave : undefined}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <motion.svg
                      className="ml-1 w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  )}
                </motion.a>
              )}

              {/* Services Dropdown */}
              {item.name === 'SERVICES' && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-80 z-50"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                  initial="hidden"
                  animate={servicesDropdownOpen ? "visible" : "hidden"}
                  variants={dropdownVariants}
                >
                  <div className={`rounded-lg shadow-2xl border backdrop-blur-md p-4 ${
                    isScrolled 
                      ? 'bg-white/95 border-gray-200' 
                      : 'bg-black/80 border-white/20'
                  }`}>
                    <motion.div
                      className="grid grid-cols-1 gap-2"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate={servicesDropdownOpen ? "visible" : "hidden"}
                    >
                      {servicesDropdownItems.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={`/${service.slug}`}
                          className="block"
                        >
                          <motion.div
                            className={`block px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer ${
                              isScrolled
                                ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                                : 'text-white hover:bg-white/10 hover:text-red-300'
                            }`}
                            variants={dropdownItemVariants}
                            whileHover={{
                              scale: 1.02,
                              x: 5,
                              backgroundColor: isScrolled ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                              transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="flex items-center">
                              <motion.div
                                className={`w-2 h-2 rounded-full mr-2 ${
                                  isScrolled ? 'bg-red-500' : 'bg-white'
                                }`}
                                whileHover={{ scale: 1.3 }}
                                transition={{ duration: 0.2 }}
                              />
                              {service.name}
                            </span>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
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

'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { CEILING_SERVICES } from '@/data/servicesData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const servicesDropdownItems = [
    { name: "TEXTILE BARRISOL SKY STRETCH CEILING", slug: "textile-barrisol-sky-stretch-ceiling" },
    { name: "CHANDELIER  TEXTILE  BARRISOL CEILING", slug: "chandelier-textile-barrisol-ceiling" },
    { name: "TEXTILE BARRISOL FABRIC CEILING", slug: "textile-barrisol-fabric-ceiling" },
    { name: "TEXTILE BARRISOL TRANSLUCENT STRETCH CEILING", slug: "textile-barrisol-translucent-stretch-ceiling" },
    { name: "TEXTILE BARRISOL MOVING CLOUD STRERCH CEILING", slug: "textile-barrisol-moving-cloud-strerch-ceiling" },
    { name: "TEXTILE BARRISOL DECORATIVE CEILING", slug: "textile-barrisol-decorative-ceiling" },
    { name: "TEXTILE BARRISOL FRANCH ROOF  STRERCH CEILING", slug: "textile-barrisol-franch-roof-strerch-ceiling" },
    { name: "BARRISOL 2X2 PANEL PRINTED TILE", slug: "barrisol-2x2-panel-printed-tile" },
    { name: "TEXTILE MURAL ART WALL & CEILING", slug: "textile-mural-art-wall-ceiling" },
    { name: "RGBWW PIXEL ASIFTEXTILE BARRISOL  STRETCH CEILING", slug: "rgbww-pixel-asiftextile-barrisol-stretch-ceiling" },
  ];

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
      <div className="max-w-[1200px] mx-auto px-3 sm:px-4 md:px-5 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div
            className={`flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold select-none tracking-wide md:tracking-widest transition-colors duration-300 cursor-pointer ${
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
            <img
              src="/log.png"
              alt="Logo"
              className="w-10 h-6 sm:w-12 sm:h-10 object-contain rounded shadow-md bg-white"
              style={{marginRight: 4}}
            />
            <span className="block sm:hidden">TEXTILE BARRISOL</span>
            <span className="hidden sm:block md:hidden">TEXTILE BARRISOL</span>
            <span className="hidden md:block">TEXTILE BARRISOL</span>
          </motion.div>
        </Link>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <HiX className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-red-600' : 'text-white'}`} />
          ) : (
            <HiMenu className={`w-5 h-5 sm:w-6 sm:h-6 ${isScrolled ? 'text-red-600' : 'text-white'}`} />
          )}
        </motion.button>

        {/* Desktop Navigation Menu */}
        <motion.nav 
          className="hidden lg:flex items-center space-x-4 xl:space-x-7 text-[12px] xl:text-[14px] font-bold select-none relative"
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
            </div>
          ))}
        </motion.nav>

        {/* Desktop WhatsApp Contact Button */}
        <motion.div
          className="hidden sm:flex items-center"
          variants={itemVariants}
        >
          <motion.a
            href="https://wa.me/919718921229"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
            className={`flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full border-2 font-semibold text-[10px] sm:text-[12px] md:text-[14px] transition-all duration-300 ${
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
            <FaWhatsapp className="text-sm md:text-lg" />
            <span className="hidden md:block">WhatsApp</span>
            <span className="block md:hidden">Call</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        className={`lg:hidden fixed inset-0 z-40 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <motion.div
          className={`absolute top-14 sm:top-16 left-0 right-0 mx-3 sm:mx-4 rounded-lg shadow-2xl border backdrop-blur-md ${
            isScrolled 
              ? 'bg-white/95 border-gray-200' 
              : 'bg-black/90 border-white/20'
          }`}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0, 
            y: mobileMenuOpen ? 0 : -20,
            scale: mobileMenuOpen ? 1 : 0.95
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-3">
            {/* Mobile Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.name === 'HOME' ? (
                    <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div
                        className={`block px-3 py-2 rounded-lg text-2xs font-medium transition-all duration-200 ${
                          isScrolled
                            ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                            : 'text-white hover:bg-white/10 hover:text-red-300'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ) : item.name === 'ABOUT US' ? (
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div
                        className={`block px-3 py-2 rounded-lg text-2xs font-medium transition-all duration-200 ${
                          isScrolled
                            ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                            : 'text-white hover:bg-white/10 hover:text-red-300'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ) : item.name === 'CONTACT US' ? (
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      <motion.div
                        className={`block px-3 py-2 rounded-lg text-2xs font-medium transition-all duration-200 ${
                          isScrolled
                            ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                            : 'text-white hover:bg-white/10 hover:text-red-300'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  ) : item.name === 'SERVICES' ? (
                    <div>
                      <motion.button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-2xs font-medium transition-all duration-200 ${
                          isScrolled
                            ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                            : 'text-white hover:bg-white/10 hover:text-red-300'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>{item.name}</span>
                        <motion.svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ rotate: servicesDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </motion.button>
                      
                      {/* Mobile Services Dropdown */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: servicesDropdownOpen ? 'auto' : 0,
                          opacity: servicesDropdownOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pt-1 space-y-1">
                          {servicesDropdownItems.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={`/${service.slug}`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <motion.div
                                className={`block px-2 py-1.5 rounded-md text-3xs font-medium transition-all duration-200 ${
                                  isScrolled
                                    ? 'text-gray-600 hover:bg-red-50 hover:text-red-600'
                                    : 'text-gray-300 hover:bg-white/10 hover:text-red-300'
                                }`}
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <span className="flex items-center">
                                  <div className={`w-0.5 h-0.5 rounded-full mr-1.5 ${
                                    isScrolled ? 'bg-red-500' : 'bg-white'
                                  }`} />
                                  {service.name}
                                </span>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            
            {/* Mobile WhatsApp Button */}
            <div className="mt-3 pt-3 border-t border-gray-200/20">
              <motion.a
                href="https://wa.me/919718921229"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border-2 font-semibold text-2xs transition-all duration-300 ${
                  isScrolled
                    ? 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-red-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="text-xs" />
                <span>WhatsApp Now</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Services Dropdown for Desktop */}
      {navItems.map((item, index) => (
        item.name === 'SERVICES' && (
          <motion.div
            key="services-dropdown"
            className="hidden lg:block absolute top-full mt-1 z-50"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              marginLeft: '120px' // Shifted more to the left
            }}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
            initial="hidden"
            animate={servicesDropdownOpen ? "visible" : "hidden"}
            variants={dropdownVariants}
          >
            <div className={`w-80 rounded-lg shadow-2xl border backdrop-blur-md p-4 ${
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
                      className={`block px-3 py-2 rounded-md text-[11px] xl:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                        isScrolled
                          ? 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                          : 'text-white hover:bg-white/10 hover:text-red-300'
                      }`}
                      variants={dropdownItemVariants}
                      whileHover={{
                        scale: 1.02,
                        x: 3,
                        backgroundColor: isScrolled ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center">
                        <motion.div
                          className={`w-1.5 h-1.5 rounded-full mr-2 ${
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
        )
      ))}

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

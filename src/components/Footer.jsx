"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CEILING_SERVICES } from '@/data/servicesData';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-red-900 via-gray-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20"
          animate={{ 
            background: [
              "linear-gradient(45deg, rgba(239, 68, 68, 0.2), transparent, rgba(59, 130, 246, 0.2))",
              "linear-gradient(90deg, rgba(59, 130, 246, 0.2), transparent, rgba(239, 68, 68, 0.2))",
              "linear-gradient(135deg, rgba(239, 68, 68, 0.2), transparent, rgba(59, 130, 246, 0.2))"
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      {/* Main Footer Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          
          {/* Company Information */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
            whileHover={{ 
              y: -15, 
              scale: 1.02,
              transition: { duration: 0.3 } 
            }}
          >
            <div className="mb-6">
              <Link href="/">
                <motion.div className="flex items-center space-x-4 mb-4 cursor-pointer">
                  <motion.img 
                    alt="Barrisol Interior Solution logo" 
                    className="object-contain rounded-lg shadow-lg" 
                    height={60} 
                    src="/logo.png" 
                    width={80}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.15,
                      filter: "brightness(1.2)",
                      boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)",
                      transition: { duration: 0.6 }
                    }}
                    animate={{
                      y: [-2, 2, -2],
                      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  <motion.h1 
                    className="text-2xl md:text-3xl font-bold" 
                    style={{fontFamily: 'Montserrat, sans-serif'}}
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <span className="bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
                      Barrisol Interior
                    </span>
                    <br />
                    <span className="text-lg bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                      Solution
                    </span>
                  </motion.h1>
                </motion.div>
              </Link>
              <motion.p 
                className="text-sm font-medium mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ 
                  color: "#60A5FA",
                  textShadow: "0 0 10px rgba(96, 165, 250, 0.5)"
                }}
              >
                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  Premium Ceiling & Interior Solutions
                </span>
              </motion.p>
              <motion.div 
                className="text-gray-300 text-sm leading-relaxed space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.p
                  whileHover={{ x: 10, color: "#ef4444" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-red-400">GST:</strong> 09BKKPA1993B1ZB
                </motion.p>
                <motion.p
                  whileHover={{ x: 10, color: "#3b82f6" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-blue-400">Address:</strong> D-304, Sector 10 Noida 201301
                </motion.p>
                <motion.p
                  whileHover={{ x: 10, color: "#8b5cf6" }}
                  transition={{ duration: 0.3 }}
                >
                  Creating immersive environments through cutting-edge ceiling, wall, flooring, and aqua art systems.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Services and Quick Links - Side by Side on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:contents">
            {/* Services */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
            >
              <motion.h3 
                className="text-lg lg:text-xl font-semibold mb-2"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
                  Our Ceiling Solutions
                </span>
              </motion.h3>
              <motion.div 
                className='w-20 lg:w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 mb-4'
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                    "0 0 0 10px rgba(239, 68, 68, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 10px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity },
                  width: { delay: 0.8, duration: 1, ease: "easeOut" }
                }}
              />
              <motion.div 
                className="h-48 overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-gradient-to-r scrollbar-thumb-from-red-500 scrollbar-thumb-to-blue-500"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#ef4444 #1f2937'
                }}
              >
                <motion.ul 
                  className="text-gray-300 text-sm space-y-2 pr-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {CEILING_SERVICES.map((service, index) => (
                    <motion.li 
                      key={index}
                      className="cursor-pointer p-3 rounded-lg border border-gray-700/50 bg-gray-800/30"
                      variants={listItemVariants}
                      whileHover={{ 
                        backgroundColor: "rgba(239, 68, 68, 0.1)",
                        borderColor: "rgba(239, 68, 68, 0.5)",
                        x: 10,
                        scale: 1.02,
                        boxShadow: "0 5px 15px rgba(239, 68, 68, 0.2)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Link href={`/${service.slug}`}>
                        <motion.span
                          className="block text-gray-200 font-medium"
                          whileHover={{ 
                            color: "#60A5FA",
                            textShadow: "0 0 10px rgba(96, 165, 250, 0.5)"
                          }}
                        >
                          {service.title}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
            >
              <motion.h3 
                className="text-lg lg:text-xl font-semibold mb-2"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                  Quick Links
                </span>
              </motion.h3>
              <motion.div 
                className='w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-red-500 mb-4'
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                    "0 0 0 10px rgba(239, 68, 68, 0)"
                  ]
                }}
                transition={{ 
                  boxShadow: { duration: 3, repeat: Infinity, delay: 1 },
                  width: { delay: 1.0, duration: 1, ease: "easeOut" }
                }}
              />
              <motion.ul 
                className="text-gray-300 text-sm space-y-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { name: "Home", link: "/" },
                  { name: "About Us", link: "/about" },
                  { name: "Our Services", link: "/services" },
                
                  { name: "Contact Us", link: "/contact" },
             
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    variants={listItemVariants}
                  >
                    <Link href={link.link}>
                      <motion.span
                        className="cursor-pointer block p-3 rounded-lg border border-gray-700/50 bg-gray-800/30 font-medium"
                        whileHover={{ 
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                          borderColor: "rgba(59, 130, 246, 0.5)",
                          x: 10,
                          scale: 1.02,
                          color: "#60A5FA",
                          textShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                          boxShadow: "0 5px 15px rgba(59, 130, 246, 0.2)",
                          transition: { duration: 0.3 }
                        }}
                      >
                        {link.name}
                      </motion.span>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Contact Info and Follow Us - Side by Side on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:block">
            {/* Contact Information */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
            >
              <motion.h3 
                className="text-lg lg:text-xl font-semibold mb-2"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-red-400 to-blue-400 bg-clip-text text-transparent">
                  Contact Info
                </span>
              </motion.h3>
              <motion.div 
                className='w-20 lg:w-24 h-1 bg-gradient-to-r from-purple-500 via-red-500 to-blue-500 mb-4'
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              />
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-center space-x-4 p-3 rounded-xl border border-red-500/20"
                  variants={listItemVariants}
                  whileHover={{ 
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderColor: "rgba(239, 68, 68, 0.5)",
                    scale: 1.05,
                    x: 10,
                    boxShadow: "0 10px 25px rgba(239, 68, 68, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center"
                    variants={iconVariants}
                    whileHover="hover"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone Numbers</p>
                    <motion.p 
                      className="text-white font-semibold"
                      whileHover={{ 
                        color: "#ef4444",
                        textShadow: "0 0 10px rgba(239, 68, 68, 0.5)"
                      }}
                    >
                      +91-9718921229
                    </motion.p>
                    <motion.p 
                      className="text-white font-semibold"
                      whileHover={{ 
                        color: "#3b82f6",
                        textShadow: "0 0 10px rgba(59, 130, 246, 0.5)"
                      }}
                    >
                      +91-9548829492
                    </motion.p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 p-3 rounded-xl border border-blue-500/20"
                  variants={listItemVariants}
                  whileHover={{ 
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    scale: 1.05,
                    x: 10,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center"
                    variants={iconVariants}
                    whileHover="hover"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <motion.a 
                      href="mailto:illusionbarrisol@gmail.com" 
                      className="text-white font-semibold"
                      whileHover={{ 
                        color: "#60A5FA",
                        textShadow: "0 0 10px rgba(96, 165, 250, 0.5)"
                      }}
                    >
                      illusionbarrisol@gmail.com
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Follow Us - Below Contact Info on Desktop Only */}
              <motion.div 
                className="hidden lg:block mt-6 lg:mt-8"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-base lg:text-lg font-semibold text-white mb-1"
                  whileHover={{ 
                    color: "#60A5FA",
                    transition: { duration: 0.3 }
                  }}
                >
                  Follow Us
                </motion.h3>
                <motion.div 
                  className='w-16 lg:w-20 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mb-3.5'
                  initial={{ width: 0 }}
                  whileInView={{ width: "4rem" }}
                  transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                ></motion.div>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { href: "#", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", color: "from-blue-500 to-blue-600" },
                    { href: "#", icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", color: "from-blue-500 to-blue-600" },
                    { href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "from-blue-500 to-blue-600" },
                    { href: "https://wa.me/919821575784", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488", color: "from-green-500 to-green-600" }
                  ].map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.href} 
                      className={`w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}
                      variants={iconVariants}
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon}/>
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Follow Us - Mobile/Tablet Side by Side */}
            <motion.div 
              className="lg:hidden"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-base font-semibold text-white mb-1"
                whileHover={{ 
                  color: "#60A5FA",
                  transition: { duration: 0.3 }
                }}
              >
                Follow Us
              </motion.h3>
              <motion.div 
                className='w-16 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 mb-3.5'
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
              ></motion.div>
              <motion.div 
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { href: "#", icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", color: "from-blue-500 to-blue-600" },
                  { href: "#", icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z", color: "from-blue-500 to-blue-600" },
                  { href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", color: "from-blue-500 to-blue-600" },
                  { href: "https://wa.me/919821575784", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488", color: "from-green-500 to-green-600" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className={`w-6 h-6 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}
                    variants={iconVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon}/>
                    </svg>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="border-t border-gray-700 bg-gradient-to-r from-gray-900 to-blue-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
            <motion.div 
              className="text-gray-400 mb-2 md:mb-0 text-center md:text-left"
              whileHover={{ 
                color: "#60A5FA",
                transition: { duration: 0.3 }
              }}
            >
              © 2025 Barrisol Interior Solution. All rights reserved. | Your premium ceiling & interior partner
            </motion.div>
            <motion.div 
              className="flex flex-wrap items-center justify-center md:justify-end text-gray-400 text-xs md:text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span>Developed with</span>
              <motion.svg 
                className="w-3 h-3 md:w-4 md:h-4 text-red-500 mx-1" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </motion.svg>
              <span>by</span>
              <motion.a 
                href="https://webintro.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 font-medium mx-1"
                whileHover={{ 
                  color: "#60A5FA",
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Webintro.in
              </motion.a>
              <span>and</span>
              <motion.a 
                href="https://webintro.in/delhi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 font-medium mx-1"
                whileHover={{ 
                  color: "#60A5FA",
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                Google Promotion Services
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
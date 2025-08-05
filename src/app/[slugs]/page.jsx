"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceBanner from '@/components/ServiceBanner';
import { getServiceBySlug, getRelatedServices } from '@/data/servicesData';
import { FiCheck, FiStar, FiTool, FiAward } from 'react-icons/fi';

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { opacity: 0, y: -20 }
};

const leftToRightVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const rightToLeftVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const scaleUpVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUpVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const rotateInVariants = {
  initial: { opacity: 0, rotate: -10, scale: 0.9 },
  animate: { 
    opacity: 1, 
    rotate: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const slideUpVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Enhanced scroll-based animations
const scrollFadeUp = {
  initial: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  animate: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const scrollSlideLeft = {
  initial: { 
    opacity: 0, 
    x: -80,
    rotate: -5
  },
  animate: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const scrollSlideRight = {
  initial: { 
    opacity: 0, 
    x: 80,
    rotate: 5
  },
  animate: { 
    opacity: 1, 
    x: 0,
    rotate: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const scrollStagger = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
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

// Enhanced hover animations
const cardHoverVariants = {
  rest: { scale: 1, y: 0, rotateX: 0, rotateY: 0 },
  hover: { 
    scale: 1.05, 
    y: -10,
    rotateX: 5,
    rotateY: 5,
    transition: { 
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const imageHoverVariants = {
  rest: { scale: 1, filter: "brightness(1)" },
  hover: { 
    scale: 1.1, 
    filter: "brightness(1.2)",
    transition: { duration: 0.4 }
  }
};

const buttonHoverVariants = {
  rest: { 
    scale: 1, 
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(to right, #ef4444, #3b82f6)"
  },
  hover: { 
    scale: 1.1, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    background: "linear-gradient(to right, #dc2626, #2563eb)",
    transition: { 
      duration: 0.2,
      type: "spring",
      stiffness: 400
    }
  }
};

const textHoverVariants = {
  rest: { color: "#374151" },
  hover: { 
    color: "#ef4444",
    transition: { duration: 0.2 }
  }
};

const iconBounceVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: 360,
    transition: { 
      duration: 0.5,
      type: "spring",
      stiffness: 300
    }
  }
};

// Magnetic effect for buttons
const magneticVariants = {
  rest: { x: 0, y: 0 },
  hover: { x: 0, y: 0 }
};

// Scroll progress animation component
const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default function ServicePage({ params }) {
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const benefitsRef = useRef(null);
  const galleryRef = useRef(null);
  const relatedRef = useRef(null);
  
  // In-view hooks for scroll animations
  const heroInView = useInView(heroRef, { once: true, threshold: 0.3 });
  const contentInView = useInView(contentRef, { once: true, threshold: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, threshold: 0.3 });
  const galleryInView = useInView(galleryRef, { once: true, threshold: 0.4 });
  const relatedInView = useInView(relatedRef, { once: true, threshold: 0.1 });
  
  // Scroll progress for hero parallax
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  useEffect(() => {
    const fetchService = async () => {
      // Await params in Next.js 15
      const resolvedParams = await params;
      const serviceData = getServiceBySlug(resolvedParams.slugs);
      
      if (!serviceData) {
        notFound();
        return;
      }

      setService(serviceData);
      setRelatedServices(getRelatedServices(resolvedParams.slugs));
      setLoading(false);
    };

    fetchService();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!service) {
    notFound();
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-gray-50"
    >
    
      <ServiceBanner service={service} />
         
      {/* Content Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <motion.div
              variants={leftToRightVariants}
              className="space-y-8"
            >
              <motion.div variants={fadeInUpVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About This Service
                </h2>
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <motion.p 
                    variants={fadeInUpVariants}
                    className="mb-4"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div 
                variants={staggerContainer}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <motion.h3 
                  variants={fadeInUpVariants}
                  className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                >
                  <FiStar className="mr-3 text-red-500" />
                  Key Benefits
                </motion.h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUpVariants}
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(239, 68, 68, 0.05)",
                        transition: { duration: 0.2 }
                      }}
                      className="flex items-center p-3 rounded-lg hover:bg-red-50 transition-all duration-200"
                    >
                      <FiCheck className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Gallery & Specs */}
            <motion.div
              variants={rightToLeftVariants}
              className="space-y-8"
            >
              {/* Image Gallery */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                <div className="relative">
                  <motion.div 
                    className="aspect-video rounded-xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-full">
                      <Image
                        src={service.image}
                        alt={`${service.title} Gallery`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <motion.section 
        variants={fadeInUpVariants}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={leftToRightVariants}
            className="text-4xl font-bold text-center text-gray-900 mb-16"
          >
            Related Services
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {relatedServices.map((relatedService, index) => (
              <motion.div
                key={relatedService.slug}
                variants={fadeInUpVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/${relatedService.slug}`}>
                  <div className="relative h-48 overflow-hidden cursor-pointer">
                    <Image
                      src={relatedService.image}
                      alt={relatedService.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </Link>
                
                <div className="p-6">
                  <Link href={`/${relatedService.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors cursor-pointer">
                      {relatedService.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {relatedService.description.substring(0, 100)}...
                  </p>
                  
                  <Link href={`/${relatedService.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-200"
                    >
                      Learn More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

   
    </motion.div>
  );
}
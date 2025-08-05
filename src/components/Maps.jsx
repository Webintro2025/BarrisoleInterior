'use client';  
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Maps = () => {
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const mapInstance = useRef(null);

  const destinationLatLng = [ 28.570354 ,77.3928311];
  const destinationAddress = 'D- 304, Sector 10 Noida 201301';
    
  

  useEffect(() => {
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
    document.head.appendChild(leafletCSS);

    // Load Leaflet JS
    const leafletScript = document.createElement('script');
    leafletScript.src = 'https://unpkg.com/leaflet/dist/leaflet.js';
    leafletScript.async = true;

    leafletScript.onload = () => {
      if (window.L && mapRef.current && !mapInstance.current) {
        const L = window.L;

        const map = L.map(mapRef.current).setView(destinationLatLng, 13);
        mapInstance.current = map;

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        const destMarker = L.marker(destinationLatLng).addTo(map);
        destMarker.bindPopup(destinationAddress).openPopup();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLocation([latitude, longitude]);

              L.marker([latitude, longitude])
                .addTo(map)
                .bindPopup('You are here');
            },
            (error) => {
              console.warn('Geolocation error:', error);
            },
            { enableHighAccuracy: true }
          );
        }
      }
    };

    document.body.appendChild(leafletScript);

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
      document.head.removeChild(leafletCSS);
      document.body.removeChild(leafletScript);
    };
  }, []);

  const handleGetDirections = () => {
    let url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLatLng.join(',')}`;
    if (userLocation) {
      url += `&origin=${userLocation.join(',')}`;
    }
    window.open(url, '_blank');
  };

  return (
    <motion.div 
      className="w-full mb-4 sm:mb-6 lg:mb-8 px-4 sm:px-6 lg:px-8"
      style={{ minHeight: 300 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="mb-3 sm:mb-4 lg:mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="font-bold text-gray-800 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-1 sm:mb-2"
          whileHover={{ 
            scale: 1.05,
            color: "#b07f52",
            transition: { duration: 0.3 }
          }}
        >
          Visit Our Office
        </motion.h2>
        <motion.p 
          className="font-semibold text-[#b07f52] text-xs xs:text-sm sm:text-base md:text-lg"
          whileHover={{ 
            scale: 1.02,
            textShadow: "0 0 10px rgba(176, 127, 82, 0.5)",
            transition: { duration: 0.3 }
          }}
        >
          Destination: {destinationAddress}
        </motion.p>
      </motion.div>
      
      <motion.div
        className="relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl lg:shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(176, 127, 82, 0.2)",
          transition: { duration: 0.3 }
        }}
      >
        <div
          ref={mapRef}
          style={{
            width: '100%',
            height: 250, // Mobile height
          }}
          className="sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px]"
        />
        
        {/* Map overlay with gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </motion.div>
      
      <motion.div 
        className="text-center mt-3 sm:mt-4 lg:mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={handleGetDirections}
          className="bg-gradient-to-r from-[#b07f52] to-[#9a6a3f] hover:from-[#9a6a3f] hover:to-[#8a5a2f] text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl text-xs xs:text-sm sm:text-base lg:text-lg font-semibold transform transition-all duration-300"
          whileHover={{ 
            scale: 1.05,
            y: -2,
            boxShadow: "0 10px 25px rgba(176, 127, 82, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 5px 15px rgba(176, 127, 82, 0.2)",
              "0 8px 20px rgba(176, 127, 82, 0.3)",
              "0 5px 15px rgba(176, 127, 82, 0.2)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.span className="flex items-center justify-center gap-2">
            <svg 
              className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            Get Directions
          </motion.span>
        </motion.button>
        
        {/* Additional contact info */}
        <motion.div 
          className="mt-3 sm:mt-4 lg:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 lg:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="tel:+919718921229"
            className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-[#b07f52] text-xs xs:text-sm sm:text-base transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            +91-9718921229
          </motion.a>
          
          <motion.a 
            href="mailto:textilebarrisol@gmail.com"
            className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-[#b07f52] text-xs xs:text-sm sm:text-base transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            Email Us
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Maps;

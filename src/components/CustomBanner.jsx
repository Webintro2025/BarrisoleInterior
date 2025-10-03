"use client";
import React from "react";

const CustomBanner = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <img
        src="/banner1.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.5]"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <div className="uppercase text-xs md:text-sm font-bold tracking-widest text-red-400 mb-2">
          Premium Interiors
        </div>
        <h1 className="text-2xl md:text-4xl font-extrabold mb-2 bg-gradient-to-r from-white via-blue-200 to-red-200 bg-clip-text text-transparent">
          Transform Your Space with Barrisol Interior
        </h1>
        <div className="text-sm md:text-lg mb-4">
          Modern stretch ceilings, 3D walls & epoxy floors for homes, offices, showrooms and more. Experience luxury and innovation together.
        </div>
        <a
          href="/about"
          className="inline-block bg-gradient-to-r from-red-500 to-blue-500 px-6 py-2 rounded-md font-bold uppercase tracking-wide text-white shadow-lg hover:scale-105 transition"
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default CustomBanner;
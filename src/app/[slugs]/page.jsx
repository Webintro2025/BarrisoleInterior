"use client";

import { getServiceBySlug } from "@/data/servicesData";
import { motion } from "framer-motion";
import ServiceBanner from "@/components/ServiceBanner";
import React from "react";

export default function ServicePage({ params }) {
  // Unwrap params if it's a promise (for future Next.js compatibility)
  const actualParams = typeof params.then === "function" ? React.use(params) : params;
  const { slugs } = actualParams;
  const service = getServiceBySlug(slugs);

  if (!service) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 text-center text-red-600 w-full pt-8"
      >
        Service not found.
      </motion.div>
    );
  }

  return (
    <>
      <div className="w-full ">
        <ServiceBanner service={service} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full p-6 pt-10"
      >
        {/* Banner Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-100 via-white to-red-100 rounded-xl shadow-lg mb-8 flex flex-col items-center py-8 px-4 w-full"
        >
          <motion.h1
            className="text-3xl font-bold mb-4 pl-4 text-blue-700 w-full"
            whileHover={{ scale: 1.04, color: "#ef4444" }}
          >
            {service.title}
          </motion.h1>
          {service.images && service.images.length > 0 && (
            <motion.img
              src={service.images[0]}
              alt={service.title}
              className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(239,68,68,0.15)" }}
              transition={{ duration: 0.3 }}
            />
          )}
        </motion.div>

        {/* Description Section */}
        <motion.p
          className="mb-8 pl-6 pr-6 text-lg text-gray-700 bg-white rounded-xl shadow p-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ backgroundColor: "#f3f4f6", scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {service.description}
        </motion.p>

        {/* Key Characteristics */}
        {service.keyCharacteristics && (
          <motion.div
            className="mb-6 pl-6 pr-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-semibold mb-2 text-red-600">Key Characteristics:</h2>
            <ul className="list-disc pl-6">
              {service.keyCharacteristics.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ color: "#2563eb", scale: 1.05 }}
                  className="mb-1 text-gray-800"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Applications */}
        {service.applications && (
          <motion.div
            className="mb-6 pl-6 pr-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="font-semibold mb-2 text-blue-600">Applications:</h2>
            <ul className="list-disc pl-6">
              {service.applications.map((item, idx) => (
                <motion.li
                  key={idx}
                  whileHover={{ color: "#ef4444", scale: 1.05 }}
                  className="mb-1 text-gray-800"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
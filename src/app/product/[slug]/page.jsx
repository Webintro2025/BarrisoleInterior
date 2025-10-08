"use client";

import ServicesDetails from "@/data/ServicesDetails";
import { useParams } from "next/navigation";
import CustomBanner from "@/components/CustomBanner";
import { motion } from "framer-motion";

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;

  // Find the product matching the slug
  const product = ServicesDetails.find((service) => slugify(service.slug) === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <CustomBanner />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "24px" }}
      >
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "0 24px" }}
      >
        <h2>Product Details</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.entries(product.product_details).map(([key, value], idx) => (
            <motion.li
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                marginBottom: "12px",
                padding: "12px",
                border: "1px solid #eee",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            >
              <strong>{key.replace(/_/g, " ")}: </strong>
              {Array.isArray(value) ? value.join(", ") : value}
            </motion.li>
          ))}
        </ul>

        <h2>Industry Details</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {Object.entries(product.industry_details).map(([key, value], idx) => (
            <motion.li
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                marginBottom: "12px",
                padding: "12px",
                border: "1px solid #eee",
                borderRadius: "8px",
                backgroundColor: "#fff",
              }}
            >
              <strong>{key.replace(/_/g, " ")}: </strong>
              {Array.isArray(value) ? value.join(", ") : value}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
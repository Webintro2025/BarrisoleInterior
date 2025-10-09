"use client";

import MoreServices from "@/data/MoreServices";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import CustomBanner from "@/components/CustomBanner";
import { motion } from "framer-motion";

function slugify(name) {
  if (typeof name !== "string") {
    return ""; // Return an empty string if the input is not a valid string
  }
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function MoreServicePage() {
  const params = useParams();
  const router = useRouter();
  const { slug } = params;

  // Find the service matching the slug
  const service = MoreServices.find((s) => slugify(s.name) === slug);

  console.log("Received slug:", slug);
  console.log("Available MoreServices:", MoreServices);

  // Log all slugified names for debugging
  const slugifiedNames = MoreServices.map((service) => slugify(service.name));
  console.log("Slugified Names in MoreServices:", slugifiedNames);

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <div>
      <CustomBanner />
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>{service.name}</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
        {service.Products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "16px",
              width: "300px", // Increased width for larger images
              textAlign: "center",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => router.push(`/product/${slugify(product.name)}`)}
          >
            <motion.img
              src={`/${product.image}`}
              alt={product.name}
              style={{
                width: "100%",
                height: "200px", // Increased height for larger images
                objectFit: "cover",
                borderRadius: "8px",
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div
              style={{
                marginTop: "12px",
                color: "#0070f3",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              {product.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
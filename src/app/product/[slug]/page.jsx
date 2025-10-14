"use client";

import ServicesDetails from "@/data/ServicesDetails";
import { useParams } from "next/navigation";
import CustomBanner from "@/components/CustomBanner";
import { motion } from "framer-motion";

function slugify(name) {
  if (typeof name !== "string") {
    return ""; // Return an empty string if the input is not a valid string
  }
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
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
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <CustomBanner />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center", marginBottom: "24px" }}
      >
        <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "8px" }}>{product.title}</h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>{product.description}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ padding: "0 24px" }}
      >
        {product.images && product.images.length > 0 && (
          <>
           
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", maxWidth: "800px" }}>
                {product.images.map((image, idx) => (
                  <div key={idx} style={{ textAlign: "center" }}>
                    {image.image && (
                      <img
                        src={image.image}
                        alt={image.description}
                        style={{ width: "100%", borderRadius: "8px", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          const fallback = e.target.nextSibling;
                          if (fallback) fallback.style.display = "block";
                        }}
                      />
                    )}
                    <p style={{ marginTop: "8px", color: "#555" }}>{image.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {product.product_details && (
          <>
            <h2 style={{ fontSize: "2rem", color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "8px", marginTop: "32px", marginBottom: "16px" }}>Product Details</h2>
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
                    padding: "16px",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <strong style={{ color: "#555" }}>{key.replace(/_/g, " ")}: </strong>
                  <span style={{ color: "#777" }}>{Array.isArray(value) ? value.join(", ") : value}</span>
                </motion.li>
              ))}
            </ul>
          </>
        )}

        {product.industry_details && (
          <>
            <h2 style={{ fontSize: "2rem", color: "#444", borderBottom: "2px solid #ddd", paddingBottom: "8px", marginTop: "32px", marginBottom: "16px" }}>Industry Details</h2>
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
                    padding: "16px",
                    border: "1px solid #ddd",
                    borderRadius: "12px",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <strong style={{ color: "#555" }}>{key.replace(/_/g, " ")}: </strong>
                  {Array.isArray(value) ? (
                    <ul style={{ paddingLeft: "16px", marginTop: "8px" }}>
                      {value.map((item, subIdx) => (
                        <li key={subIdx} style={{ color: "#777" }}>
                          {typeof item === "object" ? (
                            Object.entries(item).map(([subKey, subValue]) => (
                              <div key={subKey}>
                                <strong>{subKey.replace(/_/g, " ")}: </strong>
                                {subValue}
                              </div>
                            ))
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span style={{ color: "#777" }}>{value}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </>
        )}
      </motion.div>
    </div>
  );
}
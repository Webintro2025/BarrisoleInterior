"use client";

import ServicesDetails from "@/data/ServicesDetails";
import { useParams } from "next/navigation";

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function ProductDetailsPage() {
  const params = useParams();
  const { slug } = params;

  // Debugging: Log the slug from the URL and the generated slugs
  console.log("Slug from URL:", slug);
  console.log(
    "Generated slugs:",
    ServicesDetails.map((p) => ({
      title: p.title,
      slug: slugify(p.title),
    }))
  );

  // Find the product matching the slug
  const product = ServicesDetails.find((p) => slugify(p.title) === slug);

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>

      {/* Product Details */}
      {product.product_details && (
        <div>
          <h2>Product Details</h2>
          <ul>
            {Object.entries(product.product_details).map(([key, value], index) => (
              <li key={index}>
                <strong>{key.replace(/_/g, " ")}:</strong>{" "}
                {Array.isArray(value) ? value.join(", ") : value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Features */}
      {product.key_features && (
        <div>
          <h2>Key Features</h2>
          <ul>
            {product.key_features.map((feature, index) => (
              <li key={index}>
                <strong>{feature.feature}:</strong> {feature.details}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Applications */}
      {product.applications && (
        <div>
          <h2>Applications</h2>
          <ul>
            {product.applications.map((application, index) => (
              <li key={index}>{application}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Images */}
      {product.images && (
        <div>
          <h2>Images</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {product.images.map((image, index) => (
              <div key={index} style={{ width: "200px" }}>
                <img
                  src={`/images/${slugify(image.query)}.jpg`}
                  alt={image.description}
                  style={{ width: "100%", height: "auto" }}
                />
                <p>{image.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
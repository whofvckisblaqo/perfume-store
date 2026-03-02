"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Oud",
    origin: "Assam, India",
    description:
      "The liquid gold of perfumery. Aged for decades in the heartwood of the Aquilaria tree.",
    icon: "✦",
  },
  {
    name: "Saffron",
    origin: "Kashmir",
    description:
      "Worth more than its weight in gold. Each thread hand-harvested from the crocus at dawn.",
    icon: "◈",
  },
  {
    name: "Rose Absolute",
    origin: "Grasse, France",
    description:
      "Sixty thousand roses yield a single ounce. The soul of every great floral composition.",
    icon: "❋",
  },
  {
    name: "Sandalwood",
    origin: "Mysore, India",
    description:
      "Creamy, sacred, meditative. The oldest perfumery ingredient known to humankind.",
    icon: "◆",
  },
];

export default function Ingredients() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section
      id="ingredients"
      style={{
        padding: "112px 24px",
        backgroundColor: "rgba(20,20,20,0.5)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 200,
              letterSpacing: "0.5em",
              fontSize: "0.65rem",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Raw & Rare
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "#E8D5B0",
              marginBottom: "24px",
            }}
          >
            Our <span style={{ fontStyle: "italic" }}>Ingredients</span>
          </h2>
          <div
            style={{
              height: "1px",
              width: "96px",
              backgroundColor: "rgba(201,169,110,0.4)",
              margin: "0 auto",
            }}
          />
        </motion.div>

        {/* Ingredients Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1px",
            backgroundColor: "rgba(201,169,110,0.1)",
          }}
        >
          {ingredients.map((ing, index) => (
            <motion.div
              key={ing.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredItem(ing.name)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                padding: "48px 40px",
                backgroundColor:
                  hoveredItem === ing.name ? "#141414" : "#0A0A0A",
                transition: "background-color 0.5s ease",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <motion.p
                animate={{
                  scale: hoveredItem === ing.name ? 1.2 : 1,
                  rotate: hoveredItem === ing.name ? 15 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: "1.5rem",
                  color: "#C9A96E",
                  marginBottom: "24px",
                  display: "inline-block",
                }}
              >
                {ing.icon}
              </motion.p>

              {/* Name */}
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "1.5rem",
                  color: "#E8D5B0",
                  marginBottom: "8px",
                }}
              >
                {ing.name}
              </h3>

              {/* Origin */}
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "rgba(201,169,110,0.4)",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {ing.origin}
              </p>

              {/* Divider */}
              <motion.div
                animate={{
                  width: hoveredItem === ing.name ? "48px" : "24px",
                }}
                transition={{ duration: 0.4 }}
                style={{
                  height: "1px",
                  backgroundColor: "rgba(201,169,110,0.4)",
                  marginBottom: "16px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "rgba(232,213,176,0.4)",
                }}
              >
                {ing.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
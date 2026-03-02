"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

const perfumes = [
  {
    id: 1,
    name: "Nuit Éternelle",
    tagline: "For the Night Wanderer",
    notes: "Oud · Sandalwood · Dark Amber",
    price: "$285",
    ml: "50ml",
    category: "Oriental",
    description: "A hypnotic blend of aged oud and smoked sandalwood wrapped in dark amber. Born from the desert at midnight.",
    accent: "#C9A96E",
  },
  {
    id: 2,
    name: "Soleil Noir",
    tagline: "Contradictions Refined",
    notes: "Bergamot · Black Rose · Vetiver",
    price: "$320",
    ml: "75ml",
    category: "Floral",
    description: "The paradox of sunlight meeting shadow. Bright citrus opens to a heart of black rose, fading into earthy vetiver.",
    accent: "#E8D5B0",
  },
  {
    id: 3,
    name: "Âme Sauvage",
    tagline: "Untamed & Rare",
    notes: "Tobacco · Leather · Iris",
    price: "$395",
    ml: "50ml",
    category: "Woody",
    description: "Raw tobacco leaves cured in leather accord. A scent for those who never ask for permission.",
    accent: "#C9A96E",
  },
  {
    id: 4,
    name: "Lumière Dorée",
    tagline: "Golden Hour Captured",
    notes: "Saffron · Jasmine · Warm Musk",
    price: "$260",
    ml: "100ml",
    category: "Oriental",
    description: "Precious saffron threads blended with jasmine absolute and a trail of warm musk that lingers like memory.",
    accent: "#E8C975",
  },
  {
    id: 5,
    name: "Brume de Mer",
    tagline: "The Sea at Dawn",
    notes: "Sea Salt · Driftwood · White Musk",
    price: "$215",
    ml: "100ml",
    category: "Fresh",
    description: "Crystalline sea air carried on driftwood. Clean, minimal, and achingly fresh. The shore at 5 AM.",
    accent: "#A8C8D8",
  },
  {
    id: 6,
    name: "Velours Pourpre",
    tagline: "Royally Draped",
    notes: "Blackcurrant · Patchouli · Incense",
    price: "$345",
    ml: "50ml",
    category: "Oriental",
    description: "A regal cloak of blackcurrant darkness and smoldering incense. Patchouli anchors the depth.",
    accent: "#D4A8E0",
  },
];

const categories = ["All", "Oriental", "Floral", "Woody", "Fresh"];

export default function Collection() {
  const [active, setActive] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [hoveredFilter, setHoveredFilter] = useState(null);
  const { addToCart } = useCart();

  const filtered =
    active === "All"
      ? perfumes
      : perfumes.filter((p) => p.category === active);

  return (
    <section
      id="collection"
      style={{
        padding: "112px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
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
          Curated Rarities
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
          The <span style={{ fontStyle: "italic" }}>Collection</span>
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

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "48px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            onMouseEnter={() => setHoveredFilter(cat)}
            onMouseLeave={() => setHoveredFilter(null)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.15em",
              fontSize: "0.7rem",
              padding: "8px 20px",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backgroundColor:
                active === cat
                  ? "#C9A96E"
                  : hoveredFilter === cat
                  ? "rgba(201,169,110,0.1)"
                  : "transparent",
              color: active === cat ? "#0A0A0A" : "#C9A96E",
              border:
                active === cat
                  ? "1px solid #C9A96E"
                  : "1px solid rgba(201,169,110,0.3)",
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {filtered.map((perfume, index) => (
          <motion.div
            key={perfume.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onMouseEnter={() => setHoveredCard(perfume.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              border:
                hoveredCard === perfume.id
                  ? "1px solid rgba(201,169,110,0.3)"
                  : "1px solid rgba(201,169,110,0.1)",
              transition: "border 0.5s ease",
              cursor: "pointer",
            }}
          >
            {/* Card Top */}
            <div
              style={{
                height: "280px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#141414",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Glow */}
              <motion.div
                animate={{
                  opacity: hoveredCard === perfume.id ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${perfume.accent}30, transparent)`,
                  filter: "blur(20px)",
                }}
              />

              {/* Bottle SVG */}
              <motion.div
                animate={{
                  y: hoveredCard === perfume.id ? -6 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <svg width="80" height="160" viewBox="0 0 80 160">
                  <defs>
                    <linearGradient
                      id={`grad-${perfume.id}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor={perfume.accent}
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor={perfume.accent}
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  <rect x="15" y="50" width="50" height="100" rx="4" fill={`url(#grad-${perfume.id})`} />
                  <rect x="28" y="30" width="24" height="25" rx="2" fill={perfume.accent} opacity="0.6" />
                  <rect x="25" y="15" width="30" height="18" rx="3" fill={perfume.accent} opacity="0.9" />
                  <rect x="36" y="5" width="8" height="12" rx="1" fill={perfume.accent} opacity="0.95" />
                  <rect x="18" y="80" width="44" height="50" rx="2" fill="rgba(0,0,0,0.3)" />
                  <text x="40" y="102" textAnchor="middle" fill={perfume.accent} fontSize="6" opacity="0.9" fontFamily="Cormorant Garamond" fontStyle="italic">
                    {perfume.name}
                  </text>
                  <text x="40" y="114" textAnchor="middle" fill={perfume.accent} fontSize="4" opacity="0.6" fontFamily="Jost" letterSpacing="2">
                    BLAQO
                  </text>
                  <rect x="22" y="55" width="6" height="40" rx="3" fill="white" opacity="0.1" />
                </svg>
              </motion.div>

              {/* Category badge */}
              <p
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 200,
                  letterSpacing: "0.3em",
                  fontSize: "0.55rem",
                  color: "rgba(201,169,110,0.5)",
                  textTransform: "uppercase",
                }}
              >
                {perfume.category}
              </p>
            </div>

            {/* Card Bottom */}
            <div
              style={{
                padding: "24px",
                backgroundColor: "#141414",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "1.4rem",
                      color: "#E8D5B0",
                      marginBottom: "4px",
                    }}
                  >
                    {perfume.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "0.85rem",
                      color: "rgba(201,169,110,0.5)",
                    }}
                  >
                    {perfume.tagline}
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "1.3rem",
                      color: "#C9A96E",
                    }}
                  >
                    {perfume.price}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 200,
                      fontSize: "0.65rem",
                      color: "rgba(201,169,110,0.4)",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {perfume.ml}
                  </p>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  color: "rgba(201,169,110,0.5)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                {perfume.notes}
              </p>

              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "rgba(232,213,176,0.4)",
                  marginBottom: "20px",
                }}
              >
                {perfume.description}
              </p>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onMouseEnter={() => setHoveredBtn(perfume.id)}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => addToCart(perfume)}
                style={{
                  width: "100%",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  padding: "12px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor:
                    hoveredBtn === perfume.id ? "#C9A96E" : "transparent",
                  color:
                    hoveredBtn === perfume.id ? "#0A0A0A" : "#C9A96E",
                  border: "1px solid rgba(201,169,110,0.3)",
                }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
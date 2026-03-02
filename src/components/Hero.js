"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [exploreHovered, setExploreHovered] = useState(false);
  const [storyHovered, setStoryHovered] = useState(false);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 24px",
      }}
    >
      {/* Background glow orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,169,110,0.08), transparent)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,105,20,0.06), transparent)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Vertical decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "80px",
          background: "linear-gradient(to bottom, transparent, rgba(201,169,110,0.3))",
          transformOrigin: "top",
        }}
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "1px",
          height: "80px",
          background: "linear-gradient(to top, transparent, rgba(201,169,110,0.3))",
          transformOrigin: "bottom",
        }}
      />

      {/* Main content */}
      <div
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 10,
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Eyebrow text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 200,
            letterSpacing: "0.5em",
            fontSize: "0.7rem",
            color: "rgba(201,169,110,0.7)",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          The Art of Fragrance
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            lineHeight: 0.9,
            margin: "0 0 16px 0",
            fontSize: "clamp(4rem, 14vw, 10rem)",
            color: "#E8D5B0",
            fontStyle: "italic",
          }}
        >
          BLAQO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 200,
            letterSpacing: "0.8em",
            fontSize: "clamp(0.6rem, 2vw, 0.9rem)",
            color: "#C9A96E",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Perfume Store
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "linear-gradient(to right, transparent, rgba(201,169,110,0.5))",
            }}
          />
          <svg width="10" height="10" viewBox="0 0 10 10">
            <polygon
              points="5,0 10,5 5,10 0,5"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="1"
            />
          </svg>
          <div
            style={{
              height: "1px",
              width: "60px",
              background: "linear-gradient(to left, transparent, rgba(201,169,110,0.5))",
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "rgba(232,213,176,0.6)",
            lineHeight: 1.8,
            maxWidth: "500px",
            margin: "0 auto 48px auto",
          }}
        >
          Where every drop tells a story. Crafted for those who leave
          impressions without words.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#collection"
            onMouseEnter={() => setExploreHovered(true)}
            onMouseLeave={() => setExploreHovered(false)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.2em",
              fontSize: "0.75rem",
              padding: "16px 40px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              backgroundColor: exploreHovered ? "#E8D5B0" : "#C9A96E",
              color: "#0A0A0A",
              display: "inline-block",
            }}
          >
            Explore Collection
          </a>
          <a
            href="#about"
            onMouseEnter={() => setStoryHovered(true)}
            onMouseLeave={() => setStoryHovered(false)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.2em",
              fontSize: "0.75rem",
              padding: "16px 40px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
              color: storyHovered ? "#E8D5B0" : "#C9A96E",
              border: storyHovered
                ? "1px solid #E8D5B0"
                : "1px solid rgba(201,169,110,0.4)",
              display: "inline-block",
            }}
          >
            Our Story
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.6 }}
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 200,
              letterSpacing: "0.3em",
              fontSize: "0.6rem",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </p>
          <motion.div
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, #C9A96E, transparent)",
              transformOrigin: "top",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
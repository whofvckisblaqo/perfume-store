"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [shopHovered, setShopHovered] = useState(false);
  const [cartHovered, setCartHovered] = useState(false);
  const { totalItems, setCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.5s ease",
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(201,169,110,0.1)"
          : "none",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              letterSpacing: "0.3em",
              fontSize: "1.5rem",
              color: "#E8D5B0",
              transition: "color 0.3s ease",
            }}
          >
            BLAQO
          </span>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 200,
              letterSpacing: "0.5em",
              fontSize: "0.5rem",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
            }}
          >
            Perfume Store
          </span>
        </div>
      </Link>

      {/* Desktop Links */}
      <div
        className="desktop-nav"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {["Collection", "About", "Ingredients", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onMouseEnter={() => setHoveredLink(item)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.15em",
              fontSize: "0.75rem",
              color:
                hoveredLink === item
                  ? "#C9A96E"
                  : "rgba(232,213,176,0.7)",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.3s ease",
              borderBottom:
                hoveredLink === item
                  ? "1px solid #C9A96E"
                  : "1px solid transparent",
              paddingBottom: "2px",
            }}
          >
            {item}
          </Link>
        ))}

        {/* Shop Now Button */}
        <button
          onMouseEnter={() => setShopHovered(true)}
          onMouseLeave={() => setShopHovered(false)}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
            fontSize: "0.7rem",
            border: "1px solid rgba(201,169,110,0.5)",
            color: shopHovered ? "#0A0A0A" : "#C9A96E",
            padding: "8px 20px",
            background: shopHovered ? "#C9A96E" : "transparent",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Shop Now
        </button>

        {/* Cart Button */}
        <button
          onClick={() => setCartOpen(true)}
          onMouseEnter={() => setCartHovered(true)}
          onMouseLeave={() => setCartHovered(false)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: cartHovered ? "#E8D5B0" : "#C9A96E",
            transition: "color 0.3s ease",
            padding: "4px",
          }}
        >
          {/* Bag Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>

          {/* Item count badge */}
          <AnimatePresence>
            {totalItems > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-6px",
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  backgroundColor: "#C9A96E",
                  color: "#0A0A0A",
                  fontSize: "0.6rem",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {totalItems}
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger-btn"
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "none",
          flexDirection: "column",
          gap: "5px",
          padding: "4px",
        }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            backgroundColor: "#C9A96E",
            transition: "all 0.3s ease",
            transform: menuOpen
              ? "rotate(45deg) translate(4px, 4px)"
              : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "16px",
            height: "1px",
            backgroundColor: "#C9A96E",
            transition: "all 0.3s ease",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "1px",
            backgroundColor: "#C9A96E",
            transition: "all 0.3s ease",
            transform: menuOpen
              ? "rotate(-45deg) translate(4px, -4px)"
              : "none",
          }}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed",
          top: "65px",
          left: 0,
          right: 0,
          backgroundColor: "rgba(10,10,10,0.98)",
          padding: menuOpen ? "24px 32px" : "0 32px",
          maxHeight: menuOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "all 0.4s ease",
          display: "none",
          flexDirection: "column",
          gap: "20px",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
        }}
      >
        {["Collection", "About", "Ingredients", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            onMouseEnter={() => setHoveredLink(item)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.2em",
              fontSize: "0.85rem",
              color:
                hoveredLink === item
                  ? "#C9A96E"
                  : "rgba(232,213,176,0.8)",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "color 0.3s ease",
            }}
          >
            {item}
          </Link>
        ))}
        <button
          onClick={() => { setCartOpen(true); setMenuOpen(false); }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.15em",
            fontSize: "0.7rem",
            border: "1px solid rgba(201,169,110,0.5)",
            color: "#C9A96E",
            padding: "10px 20px",
            background: "transparent",
            textTransform: "uppercase",
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          View Cart {totalItems > 0 && `(${totalItems})`}
        </button>
      </div>
    </nav>
  );
}
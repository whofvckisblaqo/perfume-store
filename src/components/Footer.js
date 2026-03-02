"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleSubscribe = () => {
    if (email) setSubscribed(true);
  };

  return (
    <footer>
      {/* Newsletter Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: "80px 24px",
          backgroundColor: "#141414",
          borderTop: "1px solid rgba(201,169,110,0.1)",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: `
              linear-gradient(rgba(201,169,110,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 10,
          }}
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
            Join the Inner Circle
          </p>

          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#E8D5B0",
              marginBottom: "12px",
            }}
          >
            Be first to discover{" "}
            <span style={{ fontStyle: "italic", color: "#C9A96E" }}>
              new rarities
            </span>
          </h3>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(232,213,176,0.4)",
              marginBottom: "40px",
            }}
          >
            Exclusive previews, private launches, and the stories behind
            each scent.
          </p>

          {!subscribed ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "480px",
                margin: "0 auto",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  minWidth: "200px",
                  backgroundColor: "#0A0A0A",
                  border: "1px solid rgba(201,169,110,0.3)",
                  borderRight: "none",
                  padding: "14px 20px",
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.8rem",
                  color: "#E8D5B0",
                  outline: "none",
                  letterSpacing: "0.05em",
                }}
              />
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleSubscribe}
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  fontSize: "0.7rem",
                  padding: "14px 28px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: btnHovered ? "#E8D5B0" : "#C9A96E",
                  color: "#0A0A0A",
                  border: "none",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </motion.button>
            </div>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: "#C9A96E",
              }}
            >
              Welcome to the circle. ✦
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{
          padding: "64px 24px",
          backgroundColor: "#0A0A0A",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand Column */}
          <div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                letterSpacing: "0.3em",
                fontSize: "1.5rem",
                color: "#E8D5B0",
                marginBottom: "4px",
              }}
            >
              BLAQO
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 200,
                letterSpacing: "0.5em",
                fontSize: "0.5rem",
                color: "rgba(201,169,110,0.5)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Perfume Store
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "rgba(232,213,176,0.4)",
                maxWidth: "260px",
              }}
            >
              Luxury fragrances for those who live with intention.
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.2em",
                fontSize: "0.65rem",
                color: "rgba(201,169,110,0.6)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Navigate
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {["Collection", "About", "Ingredients", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onMouseEnter={() => setHoveredLink(item)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.8rem",
                    color:
                      hoveredLink === item
                        ? "#C9A96E"
                        : "rgba(232,213,176,0.4)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.2em",
                fontSize: "0.65rem",
                color: "rgba(201,169,110,0.6)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Reach Us
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {[
                "hello@blaqo.store",
                "+234 800 BLAQO 00",
                "Lagos · London · Dubai",
              ].map((item) => (
                <p
                  key={item}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.8rem",
                    color: "rgba(232,213,176,0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            paddingTop: "32px",
            borderTop: "1px solid rgba(201,169,110,0.05)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 200,
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "rgba(201,169,110,0.25)",
            }}
          >
            © 2026 BLAQO Perfume Store. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy", "Terms", "Shipping"].map((item) => (
              <a
                key={item}
                href="#"
                onMouseEnter={() => setHoveredLink(item)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color:
                    hoveredLink === item
                      ? "rgba(201,169,110,0.6)"
                      : "rgba(201,169,110,0.25)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
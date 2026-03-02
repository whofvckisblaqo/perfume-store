"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const inputStyle = (fieldName) => ({
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom:
      focusedField === fieldName
        ? "1px solid #C9A96E"
        : "1px solid rgba(201,169,110,0.2)",
    padding: "12px 0",
    fontFamily: "'Jost', sans-serif",
    fontWeight: 200,
    fontSize: "0.85rem",
    color: "#E8D5B0",
    outline: "none",
    transition: "border-color 0.3s ease",
    letterSpacing: "0.05em",
  });

  return (
    <section
      id="contact"
      style={{
        padding: "112px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid pattern */}
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
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "start",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left - Info */}
        <div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 200,
              letterSpacing: "0.5em",
              fontSize: "0.65rem",
              color: "rgba(201,169,110,0.6)",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            Get In Touch
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              color: "#E8D5B0",
              marginBottom: "32px",
            }}
          >
            Let's talk <br />
            <span style={{ fontStyle: "italic", color: "#C9A96E" }}>
              fragrance.
            </span>
          </h2>

          <div
            style={{
              height: "1px",
              width: "64px",
              backgroundColor: "rgba(201,169,110,0.4)",
              marginBottom: "32px",
            }}
          />

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1.1rem",
              lineHeight: 1.9,
              color: "rgba(232,213,176,0.5)",
              marginBottom: "48px",
            }}
          >
            Whether you have a question about our collection, need help
            finding your signature scent, or simply want to connect — we
            are here for you.
          </p>

          {/* Contact Details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {[
              { label: "Email", value: "hello@blaqo.store" },
              { label: "Phone", value: "+234 800 BLAQO 00" },
              { label: "Locations", value: "Lagos · London · Dubai" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "rgba(201,169,110,0.4)",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                    color: "rgba(232,213,176,0.7)",
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {!submitted ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "32px",
              }}
            >
              {/* Name */}
              <div>
                <label
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "rgba(201,169,110,0.5)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your name"
                  style={{
                    ...inputStyle("name"),
                    "::placeholder": { color: "rgba(232,213,176,0.2)" },
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "rgba(201,169,110,0.5)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Enter your email"
                  style={inputStyle("email")}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "rgba(201,169,110,0.5)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell us about your fragrance journey..."
                  rows={5}
                  style={{
                    ...inputStyle("message"),
                    resize: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                onMouseEnter={() => setHoveredBtn(true)}
                onMouseLeave={() => setHoveredBtn(false)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.2em",
                  fontSize: "0.75rem",
                  padding: "16px 40px",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: hoveredBtn ? "#E8D5B0" : "#C9A96E",
                  color: "#0A0A0A",
                  border: "none",
                  alignSelf: "flex-start",
                }}
              >
                Send Message
              </button>
            </div>
          ) : (
            /* Success Message */
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                paddingTop: "40px",
              }}
            >
              <p
                style={{
                  fontSize: "2rem",
                  color: "#C9A96E",
                }}
              >
                ✦
              </p>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "2rem",
                  color: "#E8D5B0",
                }}
              >
                Message received.
              </h3>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  color: "rgba(232,213,176,0.5)",
                  lineHeight: 1.8,
                }}
              >
                We will be in touch shortly. In the meantime, explore our
                collection and find your signature scent.
              </p>
              <div
                style={{
                  height: "1px",
                  width: "64px",
                  backgroundColor: "rgba(201,169,110,0.4)",
                  marginTop: "8px",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
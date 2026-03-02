"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartDrawer() {
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();

  const [hoveredRemove, setHoveredRemove] = useState(null);
  const [checkoutHovered, setCheckoutHovered] = useState(false);

  return (
    <AnimatePresence>
      {cartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setCartOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              zIndex: 100,
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: "480px",
              backgroundColor: "#0A0A0A",
              borderLeft: "1px solid rgba(201,169,110,0.15)",
              zIndex: 101,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Drawer Header */}
            <div
              style={{
                padding: "32px",
                borderBottom: "1px solid rgba(201,169,110,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "1.8rem",
                    color: "#E8D5B0",
                  }}
                >
                  Your Cart
                </p>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    color: "rgba(201,169,110,0.5)",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setCartOpen(false)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(201,169,110,0.2)",
                  color: "#C9A96E",
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2rem",
                  transition: "all 0.3s ease",
                }}
              >
                ✕
              </button>
            </div>

            {/* Cart Items */}
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                padding: "24px 32px",
              }}
            >
              {cartItems.length === 0 ? (
                /* Empty State */
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    gap: "16px",
                    paddingTop: "80px",
                  }}
                >
                  <p style={{ fontSize: "2.5rem", opacity: 0.3 }}>✦</p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1.3rem",
                      color: "rgba(232,213,176,0.4)",
                    }}
                  >
                    Your cart is empty.
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 200,
                      fontSize: "0.75rem",
                      color: "rgba(201,169,110,0.3)",
                      letterSpacing: "0.1em",
                      textAlign: "center",
                    }}
                  >
                    Explore our collection and find your signature scent.
                  </p>
                  <button
                    onClick={() => setCartOpen(false)}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 300,
                      letterSpacing: "0.2em",
                      fontSize: "0.7rem",
                      padding: "12px 32px",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                      color: "#C9A96E",
                      border: "1px solid rgba(201,169,110,0.3)",
                      marginTop: "16px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Browse Collection
                  </button>
                </motion.div>
              ) : (
                /* Cart Items List */
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          display: "flex",
                          gap: "16px",
                          alignItems: "center",
                          paddingBottom: "24px",
                          borderBottom: "1px solid rgba(201,169,110,0.08)",
                        }}
                      >
                        {/* Bottle mini visual */}
                        <div
                          style={{
                            width: "60px",
                            height: "80px",
                            backgroundColor: "#141414",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            border: "1px solid rgba(201,169,110,0.1)",
                          }}
                        >
                          <svg width="30" height="60" viewBox="0 0 80 160">
                            <defs>
                              <linearGradient
                                id={`cart-grad-${item.id}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop
                                  offset="0%"
                                  stopColor={item.accent}
                                  stopOpacity="0.8"
                                />
                                <stop
                                  offset="100%"
                                  stopColor={item.accent}
                                  stopOpacity="0.2"
                                />
                              </linearGradient>
                            </defs>
                            <rect x="15" y="50" width="50" height="100" rx="4" fill={`url(#cart-grad-${item.id})`} />
                            <rect x="28" y="30" width="24" height="25" rx="2" fill={item.accent} opacity="0.6" />
                            <rect x="25" y="15" width="30" height="18" rx="3" fill={item.accent} opacity="0.9" />
                            <rect x="36" y="5" width="8" height="12" rx="1" fill={item.accent} />
                          </svg>
                        </div>

                        {/* Item Info */}
                        <div style={{ flex: 1 }}>
                          <p
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontWeight: 400,
                              fontSize: "1.1rem",
                              color: "#E8D5B0",
                              marginBottom: "2px",
                            }}
                          >
                            {item.name}
                          </p>
                          <p
                            style={{
                              fontFamily: "'Jost', sans-serif",
                              fontWeight: 200,
                              fontSize: "0.65rem",
                              letterSpacing: "0.1em",
                              color: "rgba(201,169,110,0.4)",
                              textTransform: "uppercase",
                              marginBottom: "12px",
                            }}
                          >
                            {item.ml}
                          </p>

                          {/* Quantity Controls */}
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "12px",
                            }}
                          >
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              style={{
                                width: "28px",
                                height: "28px",
                                backgroundColor: "transparent",
                                border: "1px solid rgba(201,169,110,0.2)",
                                color: "#C9A96E",
                                cursor: "pointer",
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s ease",
                              }}
                            >
                              −
                            </button>
                            <p
                              style={{
                                fontFamily: "'Jost', sans-serif",
                                fontWeight: 300,
                                fontSize: "0.85rem",
                                color: "#E8D5B0",
                                minWidth: "20px",
                                textAlign: "center",
                              }}
                            >
                              {item.quantity}
                            </p>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              style={{
                                width: "28px",
                                height: "28px",
                                backgroundColor: "transparent",
                                border: "1px solid rgba(201,169,110,0.2)",
                                color: "#C9A96E",
                                cursor: "pointer",
                                fontSize: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "all 0.2s ease",
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Price + Remove */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            gap: "12px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                              fontWeight: 400,
                              fontSize: "1.1rem",
                              color: "#C9A96E",
                            }}
                          >
                            ${(
                              parseFloat(item.price.replace("$", "")) *
                              item.quantity
                            ).toFixed(2)}
                          </p>

                          {/* ✕ Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            onMouseEnter={() => setHoveredRemove(item.id)}
                            onMouseLeave={() => setHoveredRemove(null)}
                            style={{
                              background: "transparent",
                              border: hoveredRemove === item.id
                                ? "1px solid rgba(201,169,110,0.5)"
                                : "1px solid rgba(201,169,110,0.15)",
                              cursor: "pointer",
                              width: "32px",
                              height: "32px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: hoveredRemove === item.id
                                ? "#E8D5B0"
                                : "rgba(201,169,110,0.4)",
                              fontSize: "0.8rem",
                              transition: "all 0.3s ease",
                            }}
                          >
                            ✕
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  padding: "24px 32px",
                  borderTop: "1px solid rgba(201,169,110,0.1)",
                  backgroundColor: "#0A0A0A",
                }}
              >
                {/* Subtotal */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 200,
                      fontSize: "0.7rem",
                      letterSpacing: "0.2em",
                      color: "rgba(201,169,110,0.5)",
                      textTransform: "uppercase",
                    }}
                  >
                    Subtotal
                  </p>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "1.4rem",
                      color: "#E8D5B0",
                    }}
                  >
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>

                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "rgba(232,213,176,0.3)",
                    marginBottom: "20px",
                  }}
                >
                  Shipping and taxes calculated at checkout.
                </p>

                {/* Checkout Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onMouseEnter={() => setCheckoutHovered(true)}
                  onMouseLeave={() => setCheckoutHovered(false)}
                  style={{
                    width: "100%",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.2em",
                    fontSize: "0.75rem",
                    padding: "18px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    backgroundColor: checkoutHovered ? "#E8D5B0" : "#C9A96E",
                    color: "#0A0A0A",
                    border: "none",
                    marginBottom: "12px",
                  }}
                >
                  Proceed to Checkout
                </motion.button>

                {/* Continue Shopping */}
                <button
                  onClick={() => setCartOpen(false)}
                  style={{
                    width: "100%",
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 200,
                    letterSpacing: "0.2em",
                    fontSize: "0.7rem",
                    padding: "14px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    color: "rgba(201,169,110,0.5)",
                    border: "1px solid rgba(201,169,110,0.15)",
                    transition: "all 0.3s ease",
                  }}
                >
                  Continue Shopping
                </button>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
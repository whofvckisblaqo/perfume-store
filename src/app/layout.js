import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "BLAQO — Luxury Perfume House",
  description: "Discover rare and exclusive fragrances from BLAQO Perfume Store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
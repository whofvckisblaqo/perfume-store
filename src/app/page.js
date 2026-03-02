import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";

import Ingredients from "@/components/Ingredients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CartDrawer />
      <Hero />
      <Collection />
     
      <Ingredients />
      <Contact />
      <Footer />
    </main>
  );
}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import CartDrawer from "./components/CartDrawer";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";

function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-[#FBF9F6] relative text-[#2C241B] page-enter font-sans flex flex-col">

          {/* Global Grain Texture */}
          <div
            className="fixed inset-0 opacity-[0.02] mix-blend-multiply z-50 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`
            }}
          ></div>

          <Navbar />
          <CartDrawer />

          <main className="flex-1 relative z-10 w-full">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shwetdhanya" element={<Catalog />} />
              <Route path="/soha" element={<Catalog />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>

          {/* Elegant Minimal Footer */}
          <footer className="relative py-16 text-center shrink-0 w-full mt-auto bg-[#FBF9F6]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="organic-divider mb-8"></div>

              <h2 className="text-2xl font-serif text-[#2C241B] tracking-wide mb-2">
                Shwetdhanya <span className="text-[#A8896C] italic">&</span> Soha
              </h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#A8896C] mb-8 font-medium">
                Handmade • Natural • Pure
              </p>

              <p className="text-xs text-[#8C837A] font-light">
                © {new Date().getFullYear()} Shwetdhanya & Soha. Crafted with care.
              </p>
            </div>
          </footer>

        </div>
      </CartProvider>
    </Router>
  );
}

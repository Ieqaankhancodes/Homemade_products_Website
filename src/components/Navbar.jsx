import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Millets", "Soaps", "Our Story"];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Brand */}
        <div className="cursor-pointer">
          <h1 className="text-2xl font-semibold text-[#2E2E2E] tracking-wide">
            Shwetdhanya <span className="text-[#6B8E23]">&</span> Soha
          </h1>
          <p className="text-[10px] tracking-[3px] uppercase text-[#A68B5B] mt-1">
            Handmade • Natural • Pure
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-sm font-medium text-[#444] hover:text-[#6B8E23] transition duration-300 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6B8E23] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button (Premium Touch) */}
        <div className="hidden md:block">
          <button className="bg-[#6B8E23] text-white text-sm px-5 py-2 rounded-full hover:bg-[#5a771d] transition-all duration-300 shadow-md">
            Shop Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#2E2E2E]"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-base text-[#444] hover:text-[#6B8E23] transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#6B8E23] text-white py-2 rounded-full mt-4">
                Shop Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toggleCart, cartItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Millets", path: "/shwetdhanya" },
    { name: "Soaps", path: "/soha" }
  ];

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-500 ease-in-out ${scrolled
        ? "bg-[#FBF9F6]/95 backdrop-blur-md border-b border-[#E0D5C1]/50 py-3 shadow-none"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Brand */}
        <div className="cursor-pointer flex flex-col items-start z-50 relative">
          <Link to="/">
            <h1 className="text-2xl font-serif text-[#2C241B] tracking-wide">
              Shwetdhanya <span className="text-[#A8896C] italic">&</span> Soha
            </h1>
            <p className="text-[9px] tracking-[0.2em] uppercase text-[#A8896C] mt-1 font-medium">
              Handmade • Natural • Pure
            </p>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-xs font-medium uppercase tracking-widest text-[#2C241B] hover:text-[#A8896C] transition-colors duration-300 group py-2"
            >
              {item.name}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-0 w-0 h-px bg-[#A8896C] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Icons & Controls */}
        <div className="flex items-center gap-6 z-50 relative">
          <button
            onClick={toggleCart}
            className="relative text-[#2C241B] hover:text-[#A8896C] transition-colors"
          >
            <ShoppingBag strokeWidth={1.5} size={22} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#A8896C] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#2C241B] flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[1.5px] bg-[#2C241B] transition-all duration-400 ease-in-out ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-[1.5px] bg-[#2C241B] transition-all duration-400 ease-in-out ${open ? 'opacity-0 translate-x-3' : ''}`}></span>
            <span className={`block w-6 h-[1.5px] bg-[#2C241B] transition-all duration-400 ease-in-out ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 bg-[#FBF9F6] z-40 flex flex-col justify-center items-center h-[100dvh] overflow-hidden"
          >
            {/* Background Texture inside menu */}
            <div className="absolute inset-0 texture-overlay pointer-events-none opacity-50"></div>

            <nav className="flex flex-col items-center gap-8 relative z-10 w-full px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                >
                  <Link
                    to={item.path}
                    className="text-4xl font-serif text-[#2C241B] hover:text-[#A8896C] transition-colors block"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-12 text-center flex flex-col items-center"
            >
              <div className="organic-divider !w-12 !my-6"></div>
              <p className="text-[10px] uppercase tracking-widest text-[#A8896C]">
                Artisanal By Nature
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
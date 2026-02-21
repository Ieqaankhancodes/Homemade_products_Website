import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Brand */}
        <div>
          <h1 className="text-lg md:text-xl font-semibold tracking-wide text-[#8B5E3C]">
            Shwetdhanya & SOHA
          </h1>
          <p className="text-[10px] tracking-[3px] uppercase text-[#6D4C41]">
            Handmade Foods & Soaps
          </p>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-sm tracking-wide text-[#4A2C2A]">
          <a href="#" className="hover:text-[#6B8E23] transition">Home</a>
          <a href="#" className="hover:text-[#6B8E23] transition">Millets</a>
          <a href="#" className="hover:text-[#6B8E23] transition">Soaps</a>
          <a href="#" className="hover:text-[#6B8E23] transition">Our Story</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-xl text-[#8B5E3C]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-sm text-[#4A2C2A] border-t border-[#e6d5c3]">
          <a href="#">Home</a>
          <a href="#">Millets</a>
          <a href="#">Soaps</a>
          <a href="#">Our Story</a>
        </div>
      )}
    </header>
  );
}
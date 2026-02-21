import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 page-enter">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* Brand - Handcrafted Style */}
        <div className="group cursor-pointer">
          <h1 className="text-xl md:text-2xl font-medium text-[#3D2E2A] tracking-wide">
            Shwetdhanya <span className="text-[#8B7355]">&</span> Soha
          </h1>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[8px] tracking-[4px] uppercase text-[#A68B5B]">
              Handmade Foods
            </span>
            <span className="text-[#C4A77D]">•</span>
            <span className="text-[8px] tracking-[4px] uppercase text-[#A68B5B]">
              Natural Soaps
            </span>
          </div>
        </div>

        {/* Desktop Menu - Elegant & Minimal */}
        <nav className="hidden md:flex items-center gap-12">
          {['Home', 'Millets', 'Soaps', 'Our Story'].map((item, index) => (
            <a 
              key={item}
              href="#" 
              className="relative text-sm text-[#5D4E44] hover:text-[#3D2E2A] transition-all duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8B7355] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Decorative Element */}
        <div className="hidden md:block">
          <div className="w-8 h-8 border border-[#C4A77D] rounded-full flex items-center justify-center">
            <span className="text-[#8B7355] text-xs">✿</span>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#5D4E44] hover:text-[#3D2E2A] transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu - Slide Down */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-[#E8DFD4]">
          <nav className="flex flex-col gap-4">
            {['Home', 'Millets', 'Soaps', 'Our Story'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm text-[#5D4E44] hover:text-[#3D2E2A] py-2 border-b border-[#F0E8DE]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

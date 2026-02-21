import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F1] relative overflow-hidden text-[#3D2E2A] page-enter">

      {/* Texture Layer - Handcrafted Paper Feel */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Subtle Grain Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Categories />
      </div>

      {/* Footer Decorative Element */}
      <footer className="relative py-12 text-center border-t border-[#E8DFD4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-8 h-px bg-[#C4A77D]"></span>
            <span className="text-xl text-[#C4A77D]">✿</span>
            <span className="w-8 h-px bg-[#C4A77D]"></span>
          </div>
          <p className="text-sm text-[#8B7355]">
            © 2024 Shwetdhanya & Soha — Handmade with love
          </p>
        </div>
      </footer>
    </div>
  );
}

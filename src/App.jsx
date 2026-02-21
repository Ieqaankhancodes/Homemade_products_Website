import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] relative overflow-hidden text-[#4A2C2A]">

      {/* Texture Layer */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/paper.png')"
        }}
      ></div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Categories />
      </div>
    </div>
  );
}
import shweta from '../assets/shweta.jpg';
import shashikala from '../assets/shashikala.jpg';
import millet from '../assets/millet.jpg';
import skinhair from '../assets/skin_hair.jpg';
import milletHero from '../assets/millet_hero.png';
import sohaHero from '../assets/soha_hero.png';
import useReveal from '../hooks/useReveal';

export default function Hero() {

  const [introRef, introVisible] = useReveal();
  const [founderRef, founderVisible] = useReveal();
  const [milletRef, milletVisible] = useReveal();
  const [sohaRef, sohaVisible] = useReveal();

  return (
    <section className="relative overflow-hidden texture-overlay">

      {/* Background Layers - Warm & Organic */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F1] via-[#F5EDE4] to-[#F0E8DD]" />
        
        {/* Decorative Orbs */}
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-[#C4A77D]/8 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#8B7355]/8 rounded-full blur-[100px]" />
        
        {/* Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B7355' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* ================= INTRO ================= */}
      <div
        ref={introRef}
        className={`max-w-4xl mx-auto text-center px-6 pt-28 md:pt-24 pb-8 space-y-5 reveal ${introVisible ? "active" : ""}`}
      >
        {/* Decorative Label */}
        <div className="flex items-center justify-center gap-4">
          <span className="w-10 h-px bg-[#C4A77D]"></span>
          <span className="text-[10px] tracking-[5px] uppercase text-[#8B7355]">
            Always Rooted In Nature
          </span>
          <span className="w-10 h-px bg-[#C4A77D]"></span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#3D2E2A]">
          Nourishment for the body.
          <br />
          <em className="text-[#6B5344]">Care for the skin.</em>
        </h1>

        <p className="text-sm md:text-base text-[#6B5344] max-w-xl mx-auto leading-relaxed">
          Two women, two crafts — one rooted in wholesome nutrition,
          the other in gentle botanical wellness. Made with love,
          <span className="text-[#8B7355]"> crafted by hand.</span>
        </p>
      </div>

      {/* ================= PRODUCT STICKERS ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pb-10">
        
        {/* Desktop: 2 columns grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          
          {/* Millet Products Sticker */}
          <div className="relative group">
            <img
              src={milletHero}
              alt="Millet Products"
              className="w-full max-w-md mx-auto transform -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 drop-shadow-xl"
            />
          </div>

          {/* Soap Products Sticker */}
          <div className="relative group">
            <img
              src={sohaHero}
              alt="Soap Products"
              className="w-full max-w-md mx-auto transform rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 drop-shadow-xl"
            />
          </div>

        </div>

        {/* Mobile: Stacked Column */}
        <div className="md:hidden flex flex-col gap-6">
          
          <div className="w-full">
            <img
              src={milletHero}
              alt="Millet Products"
              className="w-full max-w-sm mx-auto transform -rotate-1 drop-shadow-lg"
            />
          </div>

          <div className="w-full">
            <img
              src={sohaHero}
              alt="Soap Products"
              className="w-full max-w-sm mx-auto transform rotate-1 drop-shadow-lg"
            />
          </div>

        </div>

      </div>

      {/* ================= FOUNDERS ================= */}
      <div
        ref={founderRef}
        className={`max-w-4xl mx-auto px-6 pb-14 reveal ${founderVisible ? "active" : ""}`}
      >

        <div className="text-center mb-8">
          <span className="vintage-label">Meet The Founders</span>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-16 text-center">

          {/* Founder 1 */}
          <div className="group space-y-3">
            <div className="relative w-24 h-24 md:w-36 md:h-36 mx-auto">
              <div className="absolute inset-1 border border-[#C4A77D]/30 rounded-full"></div>
              <img
                src={shweta}
                alt="Founder ShwetDhanya"
                className="w-full h-full object-cover rounded-full shadow-md transition duration-700 group-hover:scale-105"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C4A77D] rounded-tr"></div>
            </div>
            <h3 className="text-base md:text-xl font-medium text-[#3D2E2A]">
              Shweta
            </h3>
            <p className="text-xs text-[#8B7355] italic">
              Founder, ShwetDhanya
            </p>
          </div>

          {/* Founder 2 */}
          <div className="group space-y-3">
            <div className="relative w-24 h-24 md:w-36 md:h-36 mx-auto">
              <div className="absolute inset-1 border border-[#8B7355]/30 rounded-full"></div>
              <img
                src={shashikala}
                alt="Founder Soha"
                className="w-full h-full object-cover rounded-full shadow-md transition duration-700 group-hover:scale-105"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#8B7355] rounded-tr"></div>
            </div>
            <h3 className="text-base md:text-xl font-medium text-[#3D2E2A]">
              Shashikala
            </h3>
            <p className="text-xs text-[#8B7355] italic">
              Founder, Soha
            </p>
          </div>

        </div>

      </div>

      {/* Organic Divider */}
      <div className="organic-divider max-w-md mx-auto"></div>

      {/* ================= SHWETDHANYA ================= */}
      <div
        ref={milletRef}
        className={`max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center reveal ${milletVisible ? "active" : ""}`}
      >
        <div className="space-y-5 order-2 md:order-1">
          <div>
            <span className="vintage-label">ShwetDhanya</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-normal text-[#3D2E2A]">
            Traditional Millet Nutrition
          </h2>

          <div className="w-12 h-px bg-[#C4A77D]"></div>

          <p className="text-sm text-[#6B5344] leading-relaxed">
            Freshly ground millet blends crafted with traditional methods. 
            Each batch is prepared with care, preserving the authentic 
            flavors and nutrition that nature intended.
          </p>

          <button className="btn-secondary group text-sm">
            Explore Collection
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-lg shadow-lg image-zoom">
            <img
              src={millet}
              alt="Millet Products"
              className="w-full object-cover"
              style={{ minHeight: '250px' }}
            />
          </div>
        </div>
      </div>

      {/* ================= SOHA ================= */}
      <div
        ref={sohaRef}
        className={`max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center reveal ${sohaVisible ? "active" : ""}`}
      >
        <div>
          <div className="relative overflow-hidden rounded-lg shadow-lg image-zoom">
            <img
              src={skinhair}
              alt="Soha Products"
              className="w-full object-cover"
              style={{ minHeight: '250px' }}
            />
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <span className="vintage-label">Soha</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-normal text-[#3D2E2A]">
            Botanical Skin & Hair Care
          </h2>

          <div className="w-12 h-px bg-[#8B7355]"></div>

          <p className="text-sm text-[#6B5344] leading-relaxed">
            Gentle herbal formulations made for daily wellness. 
            Handcrafted soaps using time-honored recipes with 
            coconut oil, neem, turmeric and other natural ingredients.
          </p>

          <button className="btn-primary group text-sm">
            Discover More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

    </section>
  );
}

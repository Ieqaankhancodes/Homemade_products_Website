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
    <section className="relative w-full pt-32 pb-20">

      {/* ================= INTRO ================= */}
      <div
        ref={introRef}
        className={`max-w-5xl mx-auto text-center px-6 pb-20 space-y-8 reveal ${introVisible ? "active" : ""}`}
      >
        {/* Decorative Label */}
        <div className="flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-[#E0D5C1]"></span>
          <span className="vintage-label">Always Rooted In Nature</span>
          <span className="w-12 h-px bg-[#E0D5C1]"></span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#2C241B] leading-[1.15] max-w-4xl mx-auto">
          Nourishment for the body.
          <br className="hidden md:block" />
          <span className="italic text-[#8C837A] font-light"> Care for the skin.</span>
        </h1>

        <p className="text-base md:text-lg text-[#5A4F43] max-w-2xl mx-auto leading-relaxed font-light">
          Two women, two crafts — one rooted in wholesome nutrition, the other in gentle botanical wellness. Made with love, crafted by hand.
        </p>
      </div>

      {/* ================= HERO IMAGES (Editorial Grids) ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">

          <div className="relative group flex justify-center image-zoom">
            <div className="absolute inset-0 bg-[#E0D5C1]/30 rounded-t-[100px] rounded-b-full scale-90 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <img
              src={milletHero}
              alt="Millet Products"
              className="w-full max-w-sm relative z-10 drop-shadow-2xl translate-y-0 group-hover:-translate-y-4 transition-transform duration-700"
            />
          </div>

          <div className="relative group flex justify-center image-zoom md:mt-24">
            <div className="absolute inset-0 bg-[#E0D5C1]/30 rounded-t-full rounded-b-[100px] scale-90 blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <img
              src={sohaHero}
              alt="Soap Products"
              className="w-full max-w-sm relative z-10 drop-shadow-2xl translate-y-0 group-hover:-translate-y-4 transition-transform duration-700"
            />
          </div>

        </div>
      </div>

      <div className="organic-divider max-w-md"></div>

      {/* ================= FOUNDERS ================= */}
      <div
        ref={founderRef}
        className={`max-w-5xl mx-auto px-6 py-20 reveal ${founderVisible ? "active" : ""}`}
      >
        <div className="text-center mb-16">
          <span className="vintage-label block mb-4">The Artisans</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C241B]">Meet The Founders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start max-w-3xl mx-auto">

          {/* Founder 1 */}
          <div className="group space-y-6 text-center">
            <div className="relative w-48 h-64 md:w-56 md:h-72 mx-auto overflow-hidden rounded-t-[100px] rounded-b-xl shadow-lg border-4 border-white/50">
              <img
                src={shweta}
                alt="Founder ShwetDhanya"
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-[#2C241B] mb-1">
                Shweta
              </h3>
              <p className="vintage-label">
                ShwetDhanya
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="group space-y-6 text-center md:pt-16">
            <div className="relative w-48 h-64 md:w-56 md:h-72 mx-auto overflow-hidden rounded-t-xl rounded-b-[100px] shadow-lg border-4 border-white/50">
              <img
                src={shashikala}
                alt="Founder Soha"
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-[#2C241B] mb-1">
                Shashikala
              </h3>
              <p className="vintage-label">
                Soha
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="organic-divider max-w-[200px]"></div>

      {/* ================= SHWETDHANYA PRODUCT HIGHLIGHT ================= */}
      <div
        ref={milletRef}
        className={`max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center reveal ${milletVisible ? "active" : ""}`}
      >
        <div className="space-y-8 order-2 md:order-1">
          <div>
            <span className="vintage-label block mb-3">ShwetDhanya</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C241B] leading-tight">
              Traditional Millet Nutrition
            </h2>
          </div>

          <p className="text-base text-[#5A4F43] leading-relaxed font-light">
            Freshly ground millet blends crafted with traditional methods.
            Each batch is prepared with care, preserving the authentic
            flavors and nutrition that nature intended.
          </p>

          <button className="btn-secondary group">
            Explore Collection
          </button>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-t-[120px] rounded-b-2xl shadow-md border-4 border-white/50 image-zoom aspect-[4/5] bg-white">
            <img
              src={millet}
              alt="Millet Products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ================= SOHA PRODUCT HIGHLIGHT ================= */}
      <div
        ref={sohaRef}
        className={`max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center reveal ${sohaVisible ? "active" : ""}`}
      >
        <div>
          <div className="relative overflow-hidden rounded-t-2xl rounded-b-[120px] shadow-md border-4 border-white/50 image-zoom aspect-[4/5] bg-white">
            <img
              src={skinhair}
              alt="Soha Products"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <span className="vintage-label block mb-3">Soha</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C241B] leading-tight">
              Botanical Skin & Hair Care
            </h2>
          </div>

          <p className="text-base text-[#5A4F43] leading-relaxed font-light">
            Gentle herbal formulations made for daily wellness.
            Handcrafted soaps using time-honored recipes with
            coconut oil, neem, turmeric and other natural ingredients.
          </p>

          <button className="btn-primary group">
            Discover More
          </button>
        </div>
      </div>

    </section>
  );
}

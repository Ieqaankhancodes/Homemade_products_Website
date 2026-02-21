import shweta from '../assets/shweta.jpg';
import shashikala from '../assets/shashikala.jpg';
import useReveal from '../hooks/useReveal';
import heroimage from '../assets/hero-image.png';

export default function Hero() {

  const [introRef, introVisible] = useReveal();
  const [founderRef, founderVisible] = useReveal();
  const [milletRef, milletVisible] = useReveal();
  const [sohaRef, sohaVisible] = useReveal();

  return (
    <section className="relative overflow-hidden">

      {/* Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F1E8] via-[#F3EEE5] to-[#EFE8DD]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#6B8E23]/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#8B5E3C]/10 rounded-full blur-[120px]" />
      </div>

      {/* ================= INTRO ================= */}
      <div
        ref={introRef}
        className={`max-w-5xl mx-auto text-center px-6 py-24 md:py-32 space-y-8 reveal ${introVisible ? "active" : ""}`}
      >
        <p className="text-xs tracking-[6px] uppercase text-[#6B8E23]">
          Always Rooted In Nature
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-[#2F3A2F]">
          Nourishment for the body.
          <br />
          Care for the skin.
        </h1>

        <p className="text-sm md:text-lg text-[#6D4C41] max-w-2xl mx-auto leading-relaxed">
          Two women, two crafts — one rooted in wholesome nutrition,
          the other in gentle botanical wellness.
        </p>
      </div>

      {/* ================= FOUNDERS ================= */}
      <div
        ref={founderRef}
        className={`max-w-5xl mx-auto px-6 pb-24 reveal ${founderVisible ? "active" : ""}`}
      >

        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[5px] text-[#8B5E3C]">
            Meet The Founders
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 md:gap-16 text-center">

          {/* Founder 1 */}
          <div className="group space-y-4">
            <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto">
              <img
                src={shweta}
                alt="Founder ShwetDhanya"
                className="w-full h-full object-cover rounded-full shadow-lg transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border border-[#6B8E23]/30"></div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#2F3A2F]">
              Shweta
            </h3>
            <p className="text-sm text-[#6D4C41]">
              Founder, ShwetDhanya
            </p>
          </div>

          {/* Founder 2 */}
          <div className="group space-y-4">
            <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto">
              <img
                src={shashikala}
                alt="Founder Soha"
                className="w-full h-full object-cover rounded-full shadow-lg transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border border-[#8B5E3C]/30"></div>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-[#2F3A2F]">
              Shashikala
            </h3>
            <p className="text-sm text-[#6D4C41]">
              Founder, Soha
            </p>
          </div>

        </div>

      </div>

      {/* ================= SHWETDHANYA ================= */}
      <div
        ref={milletRef}
        className={`max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center reveal ${milletVisible ? "active" : ""}`}
      >
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[4px] text-[#6B8E23]">
            ShwetDhanya
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2F3A2F]">
            Traditional Millet Nutrition
          </h2>

          <p className="text-sm md:text-base text-[#6D4C41] leading-relaxed">
            Freshly ground millet blends crafted with traditional methods.
          </p>

          <button className="border border-[#6B8E23] px-6 py-2 text-sm transition hover:bg-[#6B8E23] hover:text-white">
            Explore →
          </button>
        </div>

        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={shweta}
            alt="Millet Products"
            className="w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>

      {/* ================= SOHA ================= */}
      <div
        ref={sohaRef}
        className={`max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center reveal ${sohaVisible ? "active" : ""}`}
      >
        <div className="overflow-hidden rounded-lg shadow-md md:order-1 order-2">
          <img
            src={shashikala}
            alt="Soha Products"
            className="w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="space-y-6 md:order-2 order-1">
          <p className="text-xs uppercase tracking-[4px] text-[#8B5E3C]">
            Soha
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#2F3A2F]">
            Botanical Skin & Hair Care
          </h2>

          <p className="text-sm md:text-base text-[#6D4C41] leading-relaxed">
            Gentle herbal formulations made for daily wellness.
          </p>

          <button className="border border-[#8B5E3C] px-6 py-2 text-sm transition hover:bg-[#8B5E3C] hover:text-white">
            Discover →
          </button>
        </div>
      </div>

    </section>
  );
}
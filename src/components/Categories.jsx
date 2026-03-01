import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import milletImg from '../assets/millet.jpg';
import skinHairImg from '../assets/skin_hair.jpg';

export default function Categories() {
  const categories = [
    {
      id: "shwetdhanya",
      title: "ShwetDhanya",
      subtitle: "Traditional Millets",
      image: milletImg,
      description: "Sustainably grown, stone-ground ancient grains packed with nutrition.",
      tags: ["Ragi", "Jowar", "Bajra"],
      bgColor: "bg-[#FDFBF9]",
      path: "/shwetdhanya"
    },
    {
      id: "soha",
      title: "Soha",
      subtitle: "Botanical Care",
      image: skinHairImg,
      description: "Handcrafted soaps and oils infused with indigenous herbs and pure extracts.",
      tags: ["Hair Oils", "Cold Process Soaps"],
      bgColor: "bg-[#FDFBF9]",
      path: "/soha"
    }
  ];

  return (
    <section className="py-24 bg-[#FBF9F6] relative z-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <span className="vintage-label block mb-4">Discover</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C241B]">Our Collections</h2>
          <div className="organic-divider mx-auto mt-8"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group flex flex-col rounded-2xl overflow-hidden shadow-sm border border-[#E0D5C1]/40 ${cat.bgColor} transition-shadow duration-500 hover:shadow-xl`}
            >

              {/* Image Container with Zoom Effect */}
              <div className="relative overflow-hidden aspect-[4/3] bg-[#E0D5C1]/20">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C241B]/60 to-transparent opacity-60"></div>

                {/* Floating Tags */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#2C241B] rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#A8896C] mb-3 font-medium">
                  {cat.subtitle}
                </p>
                <h3 className="text-3xl font-serif text-[#2C241B] mb-4 group-hover:text-[#A8896C] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[#5A4F43] font-light leading-relaxed mb-10 flex-grow">
                  {cat.description}
                </p>

                <Link
                  to={cat.path}
                  className="self-start inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[#2C241B] font-medium group/btn"
                >
                  <span className="relative">
                    Explore Collection
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#2C241B] transition-all duration-300 group-hover/btn:w-full"></span>
                  </span>
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Quote/Message */}
        <div className="mt-32 text-center max-w-2xl mx-auto border-t border-[#E0D5C1]/50 pt-16 relative">
          <span className="absolute left-1/2 -translate-x-1/2 -top-[14px] bg-[#FBF9F6] px-4 text-[#A8896C]">
            ✿
          </span>
          <p className="text-2xl md:text-3xl font-serif text-[#2C241B] italic leading-tight">
            "Sourced from the earth, crafted by hands. Every product tells a story of our heritage."
          </p>
        </div>

      </div>
    </section>
  );
}

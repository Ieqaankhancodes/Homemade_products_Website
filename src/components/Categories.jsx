import millet from '../assets/millet.jpg';
import skinhair from '../assets/skin_hair.jpg';

export default function Categories() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="vintage-label mb-4">Our Collections</span>
        <h2 className="text-3xl md:text-4xl font-normal text-[#3D2E2A] mt-4">
          Crafted With Care
        </h2>
        <div className="w-24 h-px bg-[#C4A77D] mx-auto mt-6"></div>
        <p className="mt-6 text-base text-[#6B5344] max-w-md mx-auto">
          Two simple offerings, made honestly with love and attention to detail.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Millets Card */}
        <div className="group bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift card-shine">
          
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg mb-8 image-zoom">
            <img
              src={millet}
              alt="Millets"
              className="w-full object-cover"
              style={{ height: '280px' }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E2A]/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-normal text-[#3D2E2A]">
              Fresh Millet Powders
            </h3>
            
            <div className="w-12 h-px bg-[#C4A77D]"></div>

            <p className="text-sm text-[#6B5344] leading-relaxed">
              Stone-ground ragi, jowar and multi-grain blends. 
              Nutritious, simple, and prepared weekly in small batches 
              to ensure maximum freshness and flavor.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-[#8B7355] uppercase tracking-wider">Available:</span>
              <span className="text-xs px-2 py-1 bg-[#F5EDE4] text-[#6B5344] rounded">Ragi</span>
              <span className="text-xs px-2 py-1 bg-[#F5EDE4] text-[#6B5344] rounded">Jowar</span>
              <span className="text-xs px-2 py-1 bg-[#F5EDE4] text-[#6B5344] rounded">Multi-grain</span>
            </div>

            <button className="mt-6 text-[#6B5344] font-medium text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all">
              View Products 
              <span className="transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Soaps Card */}
        <div className="group bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift card-shine">
          
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-lg mb-8 image-zoom">
            <img
              src={skinhair}
              alt="Soaps"
              className="w-full object-cover"
              style={{ height: '280px' }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D2E2A]/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-normal text-[#3D2E2A]">
              Herbal Handmade Soaps
            </h3>
            
            <div className="w-12 h-px bg-[#8B7355]"></div>

            <p className="text-sm text-[#6B5344] leading-relaxed">
              Gentle blends made with coconut oil, neem and turmeric. 
              Kind to skin. Free from harsh chemicals. Each bar is 
              handcrafted with botanical ingredients for natural care.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-[#8B7355] uppercase tracking-wider">Types:</span>
              <span className="text-xs px-2 py-1 bg-[#F5EDE4] text-[#6B5344] rounded">Neem</span>
              <span className="text-xs px-2 py-1 bg-[#F5EDE4] text-[#6B5344] rounded">Turmeric</span>
              <span className="text-xs px-2 py-1 bg-[#F5EDE4] text-[#6B5344] rounded">Aloe Vera</span>
            </div>

            <button className="mt-6 text-[#6B5344] font-medium text-sm flex items-center gap-2 group/btn hover:gap-3 transition-all">
              Explore Collection 
              <span className="transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Message */}
      <div className="text-center mt-20 pt-12 border-t border-[#E8DFD4]">
        <p className="text-sm text-[#8B7355] italic">
          "Every product tells a story of tradition, care, and natural goodness."
        </p>
      </div>

    </section>
  );
}

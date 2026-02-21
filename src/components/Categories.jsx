import millet from '../assets/millet.jpg';
import skinhair from '../assets/skin_hair.jpg';
export default function Categories() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Crafted With Care
        </h2>
        <p className="mt-4 text-sm md:text-base text-[#6D4C41]">
          Two simple offerings, made honestly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Millets */}
        <div className="group bg-white/40 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg transition">

          <img
            src={millet}
            alt="Millets"
            className="rounded-2xl mb-6"
          />

          <h3 className="text-xl font-semibold mb-4">
            Fresh Millet Powders
          </h3>

          <p className="text-sm text-[#6D4C41] leading-relaxed">
            Stone-ground ragi, jowar and multi-grain blends.
            Nutritious, simple, and prepared weekly in small batches.
          </p>

          <button className="mt-6 text-[#6B8E23] font-medium hover:underline">
            View Products →
          </button>
        </div>

        {/* Soaps */}
        <div className="group bg-white/40 backdrop-blur-sm p-8 rounded-3xl shadow-md hover:shadow-lg transition">

          <img
            src={skinhair}
            alt="Soaps"
            className="rounded-2xl mb-6"
          />

          <h3 className="text-xl font-semibold mb-4">
            Herbal Handmade Soaps
          </h3>

          <p className="text-sm text-[#6D4C41] leading-relaxed">
            Gentle blends made with coconut oil, neem and turmeric.
            Kind to skin. Free from harsh chemicals.
          </p>

          <button className="mt-6 text-[#8B5E3C] font-medium hover:underline">
            Explore Collection →
          </button>
        </div>

      </div>

    </section>
  );
}
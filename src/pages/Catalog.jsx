import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

export default function Catalog() {
    const location = useLocation();
    const { addToCart } = useCart();

    // Determine which brand to show based on URL path
    const isShwetdhanya = location.pathname.includes('shwetdhanya');
    const isSoha = location.pathname.includes('soha');

    let currentProducts = products;
    let title = "Our Collections";
    let subtitle = "Crafted with care, rooted in nature.";
    let accentColor = "bg-[#C4A77D]"; // Default Gold

    if (isShwetdhanya) {
        currentProducts = products.filter(p => p.brand === 'Shwetdhanya');
        title = "ShwetDhanya";
        subtitle = "Traditional Millet Nutrition";
        accentColor = "bg-[#C4A77D]";
    } else if (isSoha) {
        currentProducts = products.filter(p => p.brand === 'Soha');
        title = "Soha";
        subtitle = "Botanical Skin & Hair Care";
        accentColor = "bg-[#8B7355]"; // Deep Brown
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#FBF9F6]">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-6 text-center mb-16">
                <span className="vintage-label block mb-4">{isShwetdhanya || isSoha ? "Collection" : "All Products"}</span>
                <h1 className="text-4xl md:text-5xl font-serif text-[#2C241B]">{title}</h1>
                <div className={`w-16 h-px ${accentColor} mx-auto my-6`}></div>
                <p className="text-[#5A4F43] font-light max-w-lg mx-auto">{subtitle}</p>
            </div>

            {/* Product Grid */}
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {currentProducts.map(product => (
                        <div key={product.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E0D5C1]/40">

                            {/* Image Area */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#F4EFE7]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest px-3 py-1 text-[#2C241B] rounded-full">
                                        {product.brand}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-serif text-xl text-[#2C241B] pr-4">{product.name}</h3>
                                    <span className="font-medium text-[#2C241B]">₹{product.price}</span>
                                </div>

                                <p className="text-sm text-[#8C837A] mb-4">{product.weight}</p>
                                <p className="text-[13px] text-[#5A4F43] font-light line-clamp-2 flex-grow mb-6">
                                    {product.description}
                                </p>

                                <button
                                    onClick={() => addToCart(product)}
                                    className="w-full py-3 flex items-center justify-center gap-2 border border-[#E0D5C1] rounded-full text-[#2C241B] text-xs uppercase tracking-widest hover:bg-[#2C241B] hover:text-white transition-colors group/btn"
                                >
                                    <Plus size={14} className="transition-transform group-hover/btn:rotate-90" />
                                    Add to Cart
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

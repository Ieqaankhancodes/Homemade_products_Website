import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
    const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-[#2C241B]/20 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#FBF9F6] shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-[#E0D5C1]/50">
                            <h2 className="text-2xl font-serif text-[#2C241B] flex items-center gap-2">
                                <ShoppingBag strokeWidth={1.5} />
                                Your Cart
                            </h2>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="p-2 hover:bg-[#E0D5C1]/30 rounded-full transition-colors text-[#5A4F43]"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center text-[#8C837A] mt-20">
                                    <ShoppingBag size={48} strokeWidth={1} className="mx-auto mb-4 opacity-50" />
                                    <p className="font-light">Your cart is empty.</p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="mt-6 text-sm uppercase tracking-widest text-[#A8896C] border-b border-[#A8896C] pb-1"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center bg-white p-3 rounded-lg border border-[#E0D5C1]/40">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-24 object-cover rounded-md bg-[#F4EFE7]"
                                        />

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="text-[10px] uppercase tracking-widest text-[#A8896C]">{item.brand}</p>
                                                    <h4 className="font-serif text-[#2C241B] leading-tight mt-1">{item.name}</h4>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-[#8C837A] hover:text-red-500 transition-colors"
                                                >
                                                    <X size={16} />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-3 border border-[#E0D5C1] rounded-full px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="text-[#5A4F43] hover:text-[#2C241B]"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm w-4 text-center text-[#2C241B]">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="text-[#5A4F43] hover:text-[#2C241B]"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <span className="font-medium text-[#2C241B]">₹{item.price * item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer / Checkout */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-[#E0D5C1]/50 bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-[#5A4F43] uppercase tracking-wider text-xs font-medium">Subtotal</span>
                                    <span className="text-2xl font-serif text-[#2C241B]">₹{cartTotal}</span>
                                </div>

                                <p className="text-[11px] text-[#8C837A] text-center mb-4">
                                    Shipping & taxes calculated at checkout
                                </p>

                                <button
                                    onClick={handleCheckout}
                                    className="w-full btn-primary py-4 text-sm"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

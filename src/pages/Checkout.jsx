import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function Checkout() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        pincode: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format cart data for the spreadsheet
        const orderDetails = cartItems.map(item =>
            `${item.quantity}x ${item.name} (${item.brand})`
        ).join(' | ');

        // The data payload for Google Apps Script
        const payload = {
            timestamp: new Date().toISOString(),
            ...formData,
            items: orderDetails,
            totalAmount: cartTotal,
            status: "New"
        };

        try {
            // TODO: Replace with the actual Google Apps Script Web App URL
            const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby7HTk6TuHyG5_zVp2XclD4WYtiGHzDpnDMCrBre9ZDBr8vYgnCxIgCW5w2QzB_nu9nFA/exec";

            // We use no-cors mode to prevent CORS issues when hitting Google Scripts from localhost/client
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(payload)
            });

            // Since no-cors hides the response, we assume success if it didn't throw a network error
            setOrderSuccess(true);
            clearCart();

        } catch (error) {
            console.error("Error submitting order:", error);
            alert("There was an issue placing your order. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Prevent checkout if cart is empty
    if (cartItems.length === 0 && !orderSuccess) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-[#FBF9F6] flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-3xl font-serif text-[#2C241B] mb-4">Your cart is empty</h2>
                <p className="text-[#5A4F43] font-light mb-8">Add some crafted goods to your cart before proceeding.</p>
                <Link to="/" className="btn-primary">Return Home</Link>
            </div>
        );
    }

    if (orderSuccess) {
        return (
            <div className="pt-32 pb-24 min-h-screen bg-[#FBF9F6] flex flex-col items-center justify-center text-center px-6">
                <div className="w-20 h-20 bg-[#F4EFE7] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-[#A8896C]" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-[#2C241B] mb-4">Order Confirmed</h2>
                <div className="organic-divider max-w-[100px] my-6"></div>
                <p className="text-[#5A4F43] font-light max-w-md mx-auto leading-relaxed mb-10">
                    Thank you for your trusting our craft. Your order details have been securely sent. We will contact you shortly regarding delivery.
                </p>
                <Link to="/" className="btn-secondary">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#FBF9F6]">
            <div className="max-w-6xl mx-auto px-6">

                <Link to="/" className="inline-flex items-center gap-2 text-[#8C837A] hover:text-[#2C241B] transition-colors text-sm uppercase tracking-widest mb-10">
                    <ArrowLeft size={16} /> Back
                </Link>

                <h1 className="text-4xl font-serif text-[#2C241B] mb-12">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Form Section */}
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#E0D5C1]/60 shadow-sm">
                            <h2 className="text-xl font-serif text-[#2C241B] mb-8">Shipping Information</h2>

                            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8C837A] font-medium">Full Name</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-[#FBF9F6] border border-[#E0D5C1] rounded-lg px-4 py-3 text-[#2C241B] focus:outline-none focus:border-[#A8896C] transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8C837A] font-medium">Phone Number</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-[#FBF9F6] border border-[#E0D5C1] rounded-lg px-4 py-3 text-[#2C241B] focus:outline-none focus:border-[#A8896C] transition-colors" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#8C837A] font-medium">Email Address</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-[#FBF9F6] border border-[#E0D5C1] rounded-lg px-4 py-3 text-[#2C241B] focus:outline-none focus:border-[#A8896C] transition-colors" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest text-[#8C837A] font-medium">Complete Address</label>
                                    <textarea required rows="3" name="address" value={formData.address} onChange={handleInputChange} className="w-full bg-[#FBF9F6] border border-[#E0D5C1] rounded-lg px-4 py-3 text-[#2C241B] focus:outline-none focus:border-[#A8896C] transition-colors resize-none"></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8C837A] font-medium">City</label>
                                        <input required type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full bg-[#FBF9F6] border border-[#E0D5C1] rounded-lg px-4 py-3 text-[#2C241B] focus:outline-none focus:border-[#A8896C] transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest text-[#8C837A] font-medium">Pincode</label>
                                        <input required type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} className="w-full bg-[#FBF9F6] border border-[#E0D5C1] rounded-lg px-4 py-3 text-[#2C241B] focus:outline-none focus:border-[#A8896C] transition-colors" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#F4EFE7] p-8 md:p-10 rounded-2xl border border-[#E0D5C1] sticky top-32">
                            <h2 className="text-xl font-serif text-[#2C241B] mb-8">Order Summary</h2>

                            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between items-start gap-4">
                                        <div>
                                            <h4 className="font-serif text-[#2C241B]">{item.name}</h4>
                                            <p className="text-[11px] uppercase tracking-widest text-[#8C837A] mt-1">QTY: {item.quantity}</p>
                                        </div>
                                        <span className="font-medium text-[#2C241B]">₹{item.price * item.quantity}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#E0D5C1] pt-6 space-y-4 mb-8">
                                <div className="flex justify-between items-center text-[#5A4F43]">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="flex justify-between items-center text-[#5A4F43]">
                                    <span>Shipping</span>
                                    <span className="text-[11px] uppercase tracking-widest">Calculated later</span>
                                </div>
                                <div className="flex justify-between items-center text-xl font-serif text-[#2C241B] pt-4 border-t border-[#E0D5C1]">
                                    <span>Total Due Today</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                form="checkout-form"
                                disabled={isSubmitting}
                                className={`w-full btn-primary py-4 text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Processing...' : 'Complete Order'}
                            </button>

                            <p className="text-center text-[10px] uppercase tracking-widest text-[#8C837A] mt-6">
                                Secure & Encrypted
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

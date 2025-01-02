import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import EmptyCart from "./EmptyCart";
import Modal from './Modal';
import { useState } from 'react';


const Cart = () => {
    const navigate = useNavigate();
    const { cart, updateCartQuantity, calculateTotal, removeFromCart } = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuantityChange = (
        productId: string, 
        quantity: number, 
        bottleType: string
    ) => {
        if (quantity === 0) {
            updateCartQuantity(productId, 0, bottleType);
        } else {
            updateCartQuantity(productId, quantity, bottleType);
        }
    };

    const navigateToPaymentPage = () => {
        if (cart.length === 0) {
            setIsModalOpen(true);
            return;
        }
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/payment');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Empty Cart"
            >
                <p className="text-gray-600">Your cart is empty. Please add items to the cart before proceeding to payment.</p>
            </Modal>

            {cart.length === 0 ? (
                <EmptyCart />
            ) : (
                <div className="min-h-screen bg-gray-50">
                    <Header />
                    <MaxWidthWrapper>
                        <section className="py-12">
                            <div className="max-w-12xl mx-auto px-4">
                                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Shopping Cart</h2>
                                
                                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                                    <div className="hidden lg:grid grid-cols-4 p-6 border-b border-gray-100 bg-gray-50">
                                        <div className="col-span-2 text-sm font-medium text-gray-600">Product Details</div>
                                        <div className="text-sm font-medium text-gray-600 text-center">Quantity</div>
                                        <div className="text-sm font-medium text-gray-600 text-right">Price</div>
                                    </div>

                                    <div className="divide-y divide-gray-100">
                                        {cart.map((product) => {
                                            const quantity = product.quantity || 1;
                                            const price = product.selectedBottle?.price || product.bottleOptions[0].price;
                                            const totalPrice = price * quantity;

                                            return (
                                                <div 
                                                    key={`${product._id}-${product.selectedBottle?.type}`} 
                                                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 items-center hover:bg-gray-50 transition-colors"
                                                >
                                                    <div className="col-span-2 flex items-center space-x-4">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                                                            <img 
                                                                src={product.image1} 
                                                                alt={product.name} 
                                                                className="h-full w-full object-cover object-center"
                                                            />
                                                        </div>
                                                        <div className="flex flex-col flex-grow">
                                                            <h3 className="font-medium text-gray-900 text-lg">{product.name}</h3>
                                                            <p className="mt-1 text-sm text-gray-500">
                                                                {product.selectedBottle?.type || product.bottleOptions[0].type}
                                                            </p>
                                                            <p className="mt-1 text-sm text-indigo-600">₹{price.toFixed(2)}</p>
                                                            <button 
                                                                onClick={() => removeFromCart(product._id)}
                                                                className="mt-2 text-red-500 hover:text-red-700 text-sm font-medium flex items-center w-fit"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                                </svg>
                                                                Remove
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center items-center">
                                                        <div className="flex items-center border border-gray-200 rounded-lg shadow-sm">
                                                            <button 
                                                                onClick={() => handleQuantityChange(
                                                                    product._id, 
                                                                    quantity - 1,
                                                                    product.selectedBottle?.type || ''
                                                                )}
                                                                className="p-2 hover:bg-gray-50 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
                                                                disabled={quantity <= 1}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="px-4 py-2 text-center min-w-[40px] font-medium">
                                                                {quantity}
                                                            </span>
                                                            <button 
                                                                onClick={() => handleQuantityChange(
                                                                    product._id, 
                                                                    quantity + 1,
                                                                    product.selectedBottle?.type || ''
                                                                )}
                                                                className="p-2 hover:bg-gray-50 text-gray-600 hover:text-gray-800 transition-colors"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="text-right">
                                                        <p className="text-lg font-medium text-indigo-600">₹{totalPrice.toFixed(2)}</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="p-6 bg-gray-50 border-t border-gray-100">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="text-lg font-medium text-gray-900">Total Amount</span>
                                            <span className="text-2xl font-bold text-indigo-600">₹{calculateTotal().toFixed(2)}</span>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                            <button 
                                                className="px-6 py-3 rounded-full text-sm font-medium bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors shadow-sm"
                                            >
                                                Add Coupon Code
                                            </button>
                                            <button
                                                onClick={navigateToPaymentPage}
                                                className="px-6 py-3 rounded-full text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm"
                                            >
                                                Continue to Payment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </MaxWidthWrapper>
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Cart;


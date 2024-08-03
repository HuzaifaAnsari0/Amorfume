import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import EmptyCart from "./EmptyCart";
// import { useEffect } from "react";

const Cart = () => {
    const navigate = useNavigate();

    const { cart, removeFromCart, updateCartQuantity, calculateTotal} = useCart();

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId: string, quantity: number) => {
        if (quantity < 1) return; // Prevent quantity from being less than 1
        updateCartQuantity(productId, quantity);
    };

    const navigateToPaymentPage = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add items to the cart before proceeding to payment.");
            return;
        }
        navigate('/payment'); // Adjust the path to your payment page
      };


    return (
        <>
        {cart.length === 0 ? 
        (<EmptyCart />):(
        <div>
            <Header />
            <MaxWidthWrapper>
                <section className="py-24 relative">
                    <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
                        <div className="hidden lg:grid grid-cols-2 py-6">
                            <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                            <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                                <span className="w-full max-w-[260px] text-center">Quantity</span>
                                <span className="w-full max-w-[200px] text-center">Total</span>
                            </p>
                        </div>

                        {/* {cart.length === 0 ? (
                            {emptyCart()}
                            
                        ) : ( */}
                            {cart.map((product) => {
                                const quantity = product.quantity || 1;
                                const totalPrice = product.price * quantity;

                                return (
                                    <div key={product._id} className="grid grid-cols-2 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                            <img src={product.image1} alt={product.name} className="w-16 h-16" />
                                            <div className="ml-4">
                                                <h5 className="font-medium text-lg leading-8">{product.name}</h5>
                                                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">{product.category}</p>
                                            </div>
                                        </div>
                                        <div className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                                            <div>
                                            <input
                                                type="number"
                                                min="1"
                                                value={quantity}
                                                onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                                                className="w-16 text-center border border-gray-300 rounded"
                                            />
                                           
                                            <button onClick={() => handleRemoveFromCart(product._id)} className="ml-2 px-2 py-2 text-xl text-black rounded"><u>Remove</u></button>
                                            </div>
                                            <div>
                                            <h6 className="font-medium text-lg leading-8 text-indigo-600">${totalPrice.toFixed(2)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                       // )
                        }
                    </div>
                    <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${calculateTotal().toFixed(2)}</h6>
                </div>
                    <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
                    <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700"
                    onClick={navigateToPaymentPage}>Continue to Payment
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
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


import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Footer from "./Footer";
import Header from "./Header";
import { useCart } from './CartContext';

const Cart = () => {
    const { cart, removeFromCart, updateCartQuantity } = useCart();

    const handleRemoveFromCart = (productId: string) => {
        removeFromCart(productId);
    };

    const handleQuantityChange = (productId: string, quantity: number) => {
        if (quantity < 1) return; // Prevent quantity from being less than 1
        updateCartQuantity(productId, quantity);
    };

    return (
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

                        {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cart.map((product) => {
                                const quantity = product.quantity || 1;
                                const totalPrice = product.price * quantity;

                                return (
                                    <div key={product._id} className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
                                        <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                            <img src={product.image1} alt={product.name} className="w-16 h-16" />
                                            <div className="ml-4">
                                                <h5 className="font-medium text-lg leading-8">{product.name}</h5>
                                                <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">{product.category}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center lg:justify-end w-full max-w-[200px] mx-auto lg:mx-0">
                                            <div>
                                            <input
                                                type="number"
                                                min="1"
                                                value={quantity}
                                                onChange={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                                                className="w-16 text-center border border-gray-300 rounded"
                                            />
                                            </div>
                                           <div>
                                            <button onClick={() => handleRemoveFromCart(product._id)} className="ml-4 px-4 py-2 bg-red-600 text-white rounded">Remove</button>
                                            </div>
                                            <div>
                                            <h6 className="font-medium text-lg leading-8 text-indigo-600 ml-4">${totalPrice.toFixed(2)}</h6>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </section>
            </MaxWidthWrapper>
            <Footer />
        </div>
    );
};

export default Cart;


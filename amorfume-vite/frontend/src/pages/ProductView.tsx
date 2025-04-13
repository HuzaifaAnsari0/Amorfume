import Header from "../components/Header";
import Footer from "../components/Footer";
import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Faq from "../components/Faq";
import Features from "../components/Features";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from '../components/CartContext';
import ProductGallery from "./ProductGallery";

interface Product {
    _id: string;
    name: string;
    bottleOptions: {
        type: string;
        price: number;
    }[];
    description: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    category: 'adult' | 'kids' | 'teens';
    images: string[];
    features: string[];
}

const ProductView = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCartWithQuantity } = useCart();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_BACKEND_URL;
    const [selectedBottle, setSelectedBottle] = useState<{type: string; price: number} | null>(null);
    const [popupMessage, setPopupMessage] = useState<string | null>(null);

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const handleAddToCart = () => {
        if (!selectedBottle) {
            setPopupMessage('Please select a bottle size');
            return;
        }
        if (product) {
            const productWithBottle = { ...product, selectedBottle };
            addToCartWithQuantity(productWithBottle, quantity);
        }
    };

    const handleBuyNow = () => {
        if (!selectedBottle) {
            setPopupMessage('Please select a bottle size');
            return;
        }
        if (product) {
            const productWithBottle = { ...product, selectedBottle };
            addToCartWithQuantity(productWithBottle, quantity);
            navigate('/cart');
        }
    };

    useEffect(() => {
        fetch(`${url}/store/view-product/${id}`)
            .then(response => response.json())
            .then(data => {
                const productWithImages = {
                    ...data,
                    images: [data.image1, data.image2, data.image3, data.image4, data.image5, data.image6].filter(Boolean)
                };
                setProduct(productWithImages);
                if (data.bottleOptions && data.bottleOptions.length > 0) {
                    setSelectedBottle(data.bottleOptions[0]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, [id, url]);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!product) return <p className="text-center py-10">Product not found</p>;

    return (
        <>
            <Header />
            <div className="bg-slate-50 px-4 md:px-10 py-6 md:py-10">
                <MaxWidthWrapper>
                    <section className="relative">
                        <div className="w-full mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
                                <ProductGallery product={product} />
                                <div className="flex items-center justify-center py-4">
                                    <div className="w-full max-w-xl">
                                        <h2 className="font-manrope font-bold text-2xl md:text-3xl text-gray-900 mb-2 capitalize">
                                            {product.name}
                                        </h2>
                                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                            <h6 className="font-manrope font-semibold text-xl md:text-2xl text-gray-900 pr-3 sm:border-r border-gray-200 mr-3">
                                                ₹{selectedBottle?.price || product.bottleOptions[0]?.price}
                                            </h6>
                                            <div className="flex items-center gap-1">
                                                {/* Star rating SVGs here */}
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-base md:text-lg font-normal mb-3">
                                            {product.description}
                                        </p>
                                        <ul className="grid gap-y-4 mb-8">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-3">
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="26" height="26" rx="13" fill="#4F46E5" />
                                                        <path d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                                                    </svg>
                                                    <span className="font-normal text-base text-gray-900">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-gray-900 text-lg font-medium mb-2">Select Size</p>
                                        <div className="w-full pb-4 border-b border-gray-100">
                                            <div className="grid grid-cols-3 gap-3">
                                                {product?.bottleOptions.map((option) => (
                                                    <button
                                                        key={option.type}
                                                        onClick={() => setSelectedBottle(option)}
                                                        className={`h-24 md:h-16 flex flex-col items-center justify-center rounded-full transition-all duration-300 font-semibold text-lg
                                                            ${selectedBottle?.type === option.type 
                                                                ? 'border-2 border-indigo-600 bg-indigo-100 text-indigo-700 shadow-md' 
                                                                : 'border border-gray-200 text-gray-900 hover:bg-gray-50'}`
                                                        }
                                                    >
                                                        <span className="text-sm">{option.type}</span>
                                                        <span className="text-base">₹{option.price}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-3">
                                            <div className="flex items-center justify-center">
                                                <button
                                                    onClick={handleDecrement}
                                                    className="group py-3 px-4 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm"
                                                >
                                                    <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.5 11H5.5" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="text"
                                                    value={quantity}
                                                    readOnly
                                                    className="font-semibold text-gray-900 text-lg py-2 px-4 w-full max-w-[100px] text-center border-y border-gray-300 bg-transparent"
                                                />
                                                <button
                                                    onClick={handleIncrement}
                                                    className="group py-3 px-4 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm"
                                                >
                                                    <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 5.5V16.5M16.5 11H5.5" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <button
                                                onClick={handleAddToCart}
                                                className={`group py-4 px-5 rounded-full flex items-center justify-center gap-2 font-semibold text-lg 
                                                    ${!selectedBottle 
                                                        ? 'bg-gray-200 cursor-not-allowed' 
                                                        : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}
                                                disabled={!selectedBottle}
                                            >
                                                <svg width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75" stroke="#4B5563" strokeWidth="1.6" strokeLinecap="round" />
                                                </svg>
                                                Add to cart
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={handleBuyNow}
                                                className={`w-full px-5 py-4 rounded-full text-center text-white 
                                                    ${!selectedBottle 
                                                        ? 'bg-gray-200 cursor-not-allowed' 
                                                        : 'bg-indigo-600 hover:bg-indigo-700'}`}
                                                disabled={!selectedBottle}
                                            >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </MaxWidthWrapper>
            </div>
            <Features />
            <Faq />
            <Footer />
            {popupMessage && (
                <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg">
                    {popupMessage}
                </div>
            )}
        </>
    )
}

export default ProductView;

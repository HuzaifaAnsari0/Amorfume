import { useEffect, useState } from 'react';
import axios from 'axios'; // Or use fetch if you prefer
import {jwtDecode} from 'jwt-decode'; // Ensure you have this package installed
import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PersonalInfoForm from "../components/PersonalInfoForm";

interface Product {
  _id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  bottleOptions: {
    type: string;
    price: number;
  }[];
  selectedBottle?: {
    type: string;
    price: number;
  };
}

interface Order {
  _id: string;
  amount: number;
  createdAt: string;
  products: Product[];
}

const UserProfilePage = () => {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA

  // Assuming userId is stored in localStorage or some global state
  const token = localStorage.getItem('token'); // Fetch token from local storage
  let userId: string | null = null;

  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      userId = decoded.userId; // Extract userId from the decoded token
    } catch (err) {
      setError("Failed to decode token");
    }
  } else {
    setError("No token found");
  }

  useEffect(() => {
    const fetchOrderHistory = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(`${url}/order-history/${userId}`); // Use absolute URL
        const data = response.data;
        console.log(data);

        if (Array.isArray(data)) {
          setOrderHistory(data); // Save the fetched order history
        } else {
          setError("Unexpected response format");
        }
      } catch (error) {
        setError("Failed to fetch order history");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [userId]);

  return (
    <>
      <Header />
      <div className="justify text-center text-4xl">
        <h1 className="pt-10">User Profile</h1>
      </div>
      <div className="main">
        <MaxWidthWrapper>
          <section className="py-24 bg-white">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
              {/* Personal Info Section */}
              <div className="mb-5 main-data p-8 sm:p-14 bg-gray-50 rounded-3xl"> 
                <h2 className="text-center font-manrope font-semibold text-4xl text-black mb-10">Personal Information</h2>
                <PersonalInfoForm userId={userId} />
              </div>

              {/* Order History Section */}
              <div className="main-data p-8 sm:p-14 bg-gray-50 rounded-3xl">
                <h2 className="text-center font-manrope font-semibold text-4xl text-black mb-16">Order History</h2>

                {loading ? (
                  <p className="text-center">Loading...</p>
                ) : error ? (
                  <p className="text-center text-red-500">{error}</p>
                ) : orderHistory.length === 0 ? (
                  <p className="text-center">No order history found.</p>
                ) : (
                  orderHistory.map((order) => (
                    <div key={order._id} className="box p-8 rounded-3xl bg-gray-100 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">
                      <div className="flex flex-col space-y-4">
                        {order.products.map((product) => (
                          <div key={product._id} className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                            <img 
                              src={product.image || "default-image.jpg"} 
                              alt={product.name || "Product image"} 
                              className="h-28 w-28 rounded-xl" 
                            />
                            <div className="flex flex-col">
                              <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1">
                                {product.name || "Unknown Product"}
                              </h5>
                              <p className="font-normal text-base leading-7 text-gray-600">
                                {product.description || "No description"}
                              </p>
                              <p className="font-normal text-base leading-7 text-gray-600">
                                {product.selectedBottle?.type || product.bottleOptions[0]?.type}
                              </p>
                              <p className="font-semibold text-xl leading-8 text-black">
                                ₹{product.selectedBottle?.price || product.bottleOptions[0]?.price} x {product.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between mt-4">
                        <p className="font-semibold text-xl leading-8 text-black">Total: ₹{order.amount}</p>
                        <p className="font-semibold text-xl leading-8 text-black">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </>
  );
};

export default UserProfilePage;
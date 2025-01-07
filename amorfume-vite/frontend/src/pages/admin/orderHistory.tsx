import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation
import NavLogo from '../../assets/logo/amorfume_logoBlack.svg';
import AdminNav from './AdminNav';

interface Product {
  _id: string;
  name: string;
  bottleOptions: {
    type: string;
    price: number;
  }[];
  selectedBottle?: {
    type: string;
    price: number;
  };
  description: string;
  image1: string;
  quantity: number; // Add this line to include quantity
}

interface Order {
  _id: string;
  userId: string;
  name: string;
  email: string;
  contact: string;
  address: string;
  pincode: string;
  orderId: string;
  amount: number;
  currency: string;
  status: string;
  products: Product[];
  createdAt: string;
}

function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA

  const goToWebsite = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch(`${url}/admin-dashboard/order-history`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setOrderHistory(data);
        } else {
          setError(data.message || 'Failed to fetch order history');
        }
      } catch (error) {
        setError('Failed to fetch order history');
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-slate-100 p-4">
        <Link to="/admin-dashboard">
          <div className="text-lg font-semibold w-40">
            <img src={NavLogo} alt="Amorfume Logo" />
          </div>
        </Link>
        <div className="text-xl font-semibold">Admin Dashboard</div>
        <button onClick={goToWebsite} className="bg-fuchsia-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Website
        </button>
      </div>
  
      {/* Main Content with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <AdminNav />
  
        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto bg-gray-50">
  <h2 className="text-3xl font-semibold mb-6 text-gray-700">Order History</h2>
  <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
      <thead>
        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <th className="py-3 px-6 text-left">Order ID</th>
          <th className="py-3 px-6 text-left">User</th>
          <th className="py-3 px-6 text-left">Email</th>
          <th className="py-3 px-6 text-left">Contact</th>
          <th className="py-3 px-6 text-left">Address</th>
          <th className="py-3 px-6 text-left">Pincode</th>
          <th className="py-3 px-6 text-left">Amount</th>
          <th className="py-3 px-6 text-left">Status</th>
          <th className="py-3 px-6 text-left">Date</th>
          <th className="py-3 px-6 text-left">Products</th>
        </tr>
      </thead>
      <tbody className="text-gray-700 text-sm">
        {orderHistory.map((order, index) => (
          <tr key={order._id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-50`}>
            <td className="py-3 px-6">{order.orderId}</td>
            <td className="py-3 px-6">{order.name}</td>
            <td className="py-3 px-6">{order.email}</td>
            <td className="py-3 px-6">{order.contact}</td>
            <td className="py-3 px-6">{order.address}</td>
            <td className="py-3 px-6">{order.pincode}</td>
            <td className="py-3 px-6">${order.amount}</td>
            <td className="py-3 px-6">
              <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Delivered' ? 'bg-green-200 text-green-600' : 'bg-yellow-200 text-yellow-600'}`}>
                {order.status}
              </span>
            </td>
            <td className="py-3 px-6">{new Date(order.createdAt).toLocaleDateString()}</td>
            <td className="py-3 px-6">
                <ul className="list-disc list-inside">
                    {order.products.map((product) => (
                    <li key={product._id} className="whitespace-nowrap">
                        {product.name} - {product.selectedBottle?.type || 'N/A'} - 
                        ${product.selectedBottle?.price || product.bottleOptions[0]?.price} x {product.quantity}
                    </li>
                    ))}
                </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

      </div>
    </div>
  );
}

export default OrderHistory;
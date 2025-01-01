import { useEffect, useState } from 'react';
import logo from '../../assets/images/bottleBlack.png';
import UpdateUser from './UpdateUser';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../components/CartContext';

declare var Razorpay: any;

interface CartProduct {
  _id: string;
  name: string;
  description: string;
  image1: string;
  bottleOptions: {
    type: string;
    price: number;
  }[];
  selectedBottle?: {
    type: string;
    price: number;
  };
  quantity?: number;
}

interface Product extends CartProduct {
  quantity: number;
}

const Payment = () => {
  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    contact: '',
    address: '',
    pincode: ''
  });
  const url = import.meta.env.VITE_BACKEND_URL;
  const [detailsConfirmed, setDetailsConfirmed] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const { cart, calculateTotal, setCart } = useCart();

  const saveOrderHistory = async (orderData: any) => {
    try {
      console.log('Sending order data:', orderData);

      const response = await fetch(`${url}/order-history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        throw new Error(`Failed to save order history: ${errorData.message || 'Unknown error'}`);
      }

      return response.json();
    } catch (error) {
      console.error('Save order error:', error);
      throw error;
    }
  };

  const fetchUserData = async () => {
    const response = await fetch(`${url}/user`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const userData = await response.json();
    setUserId(userData._id);
    return userData;
  };

  useEffect(() => {
    const getUserData = async () => {
      const userData = await fetchUserData();
      setUser(userData);
    };
    getUserData();
  }, []);

  const paymentHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const user = await fetchUserData();
      const amount = Math.max(calculateTotal() * 100, 100); // Minimum amount ₹1
      const currency = 'INR';
      const receiptId = `receipt_${Date.now()}`;

      const orderResponse = await fetch(`${url}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          amount,
          currency, 
          receipt: receiptId 
        })
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json();
        console.error('Order creation error:', errorData);
        throw new Error('Failed to create order');
      }

      const order = await orderResponse.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount,
        currency,
        name: "Amorfume",
        description: "Perfume Purchase",
        image: logo,
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const validateResponse = await fetch(`${url}/validate`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response)
            });

            const validationResult = await validateResponse.json();

            if (validationResult.status === 'success') {
              const orderHistoryData = {
                userId,
                name: user.name,
                email: user.email,
                contact: user.contact || '',
                address: user.address || '',
                pincode: user.pincode || '',
                orderId: order.id,
                amount: amount / 100,
                currency,
                status: 'completed',
                products: cart.map((product: CartProduct) => ({
                  productId: product._id,
                  name: product.name,
                  image: product.image1,
                  description: product.description,
                  quantity: product.quantity ?? 1,
                  selectedBottle: product.selectedBottle ?? product.bottleOptions[0]
                }))
              };

              await saveOrderHistory(orderHistoryData);
              
              setPopupMessage('Order placed successfully!');
              setCart([]);
              localStorage.setItem(`cart_${userId}`, JSON.stringify([]));
              setTimeout(() => {
                navigate('/');
              }, 2000);
            }
          } catch (error) {
            console.error('Error processing order:', error);
            setPopupMessage('Error processing order. Please contact support.');
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.contact,
        },
        notes: {
          address: user.address,
        },
        theme: {
          color: "#3399cc",
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response: any) {
        console.error('Payment failed:', response.error);
        setPopupMessage('Payment failed. Please try again.');
      });

      rzp1.open();
    } catch (error) {
      console.error('Error in payment handler:', error);
      setPopupMessage('Error initiating payment. Please try again.');
    }
  };

  return (
    <div className='mt-3'>
      <div className="max-w-lg mx-auto p-5 border border-gray-300 rounded-lg bg-gray-100">
        <h1 className="text-center mb-4 text-2xl font-bold">Razor Pay</h1>
        <UpdateUser user={user} setUser={setUser} setDetailsConfirmed={setDetailsConfirmed} userId={userId} />
        <div className="flex justify-center mt-4 mb-0">
          <button
            className={`inline-block px-4 py-2 bg-blue-500 text-white items-center rounded hover:bg-blue-600 ${!detailsConfirmed ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={paymentHandler}
            disabled={!detailsConfirmed}
          >
            Pay now
          </button>
        </div>
      </div>
      {popupMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Payment;
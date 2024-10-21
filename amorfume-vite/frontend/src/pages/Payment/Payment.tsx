import { useEffect, useState } from 'react';
import logo from '../../assets/images/bottleBlack.png';
import UpdateUser from './UpdateUser'; // Import the UpdateUser component
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../components/CartContext'; // Import useCart to get cart details

const Payment = () => {
  const [user, setUser] = useState<any>({
    name: '',
    email: '',
    contact: '',
    address: '',
    pincode: ''
  });

  const [detailsConfirmed, setDetailsConfirmed] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [popupMessage, setPopupMessage] = useState<string | null>(null); // State for popup message
  const navigate = useNavigate();
  const { cart, calculateTotal, setCart } = useCart(); // Get cart details and total amount

  const fetchUserData = async () => {
    const response = await fetch('http://localhost:5000/user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const userData = await response.json();
    setUserId(userData._id); // Assuming the user ID is in the _id field
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

    const amount = calculateTotal() * 100; // Convert to smallest currency unit (e.g., paise for INR)
    const currency = 'INR';
    const receiptId = `receipt_${Date.now()}`;

    try {
      // Fetch user data
      const user = await fetchUserData();

      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount,
          currency,
          receipt: receiptId
        })
      });

      const order = await response.json();
      console.log('order', order);

      const options = {
        key: "rzp_test_qE4CFpkQIJgBAY", // Add your Razorpay key here
        amount,
        currency,
        name: "Amorfume",
        description: "some description",
        image: logo,
        order_id: order.id,
        handler: async function (response: any) {
          const body = { ...response };

          const validateResponse = await fetch('http://localhost:5000/validate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });

          const jsonResponse = await validateResponse.json();
          console.log('jsonResponse', jsonResponse);

          if (jsonResponse.status === 'success') {
            console.log("inside")
            // Create order in order history
            await fetch('http://localhost:5000/order-history', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
              body: JSON.stringify({
                userId,
                name: user.name,
                email: user.email,
                contact: user.contact,
                country: user.country,
                address: user.address,
                state: user.state,
                city: user.city,
                pincode: user.pincode,
                orderId: order.id,
                amount: amount / 100, // Convert back to main currency unit
                currency,
                status: 'completed',
                products: cart.map(product => ({
                  productId: product._id,
                  name: product.name,
                  image: product.image1,
                  description: product.description,
                  quantity: product.quantity,
                  price: product.price
                }))
              })
            });

            // Show success popup message
            setPopupMessage('Order created successfully!');
            setTimeout(() => {
              setPopupMessage(null);
            }, 5000);

            // Empty the cart
            setCart([]);
            localStorage.setItem(`cart_${userId}`, JSON.stringify([]));

            // Redirect to success page or show success message
            navigate('/');
          }
        },
        prefill: {
          name: user.name, // Use fetched user data here
          email: user.email, // Use fetched user data here
          contact: user.contact, // Use fetched user data here
        },
        notes: {
          address: user.address, // Use fetched user data here
        },
        theme: {
          color: "#3399cc",
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response: any) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.error('Error in paymentHandler:', error);
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
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { CartProvider } from './components/CartContext';
import {jwtDecode} from 'jwt-decode'; // Import jwt-decode library

// Ensure you handle cases where the token might not be present
const token = localStorage.getItem('token');
let userId = '';

if (token) {
  // Assuming the token is a JWT token and contains userId
  const decoded: any = jwtDecode(token); // Decode the token
  userId = decoded.userId; // Now you can access userId safely
}


const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>

        <CartProvider userId={userId}>
        <App />
        </CartProvider>

    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}

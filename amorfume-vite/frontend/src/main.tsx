import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from './components/CartContext.tsx';

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Router>
        <CartProvider>
        <App />
        </CartProvider>
      </Router>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element");
}

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import AdminDashboard from './pages/admin/adminDashboard';
import Products from './pages/admin/product';
 import ProtectedRoute from './pages/auth/ProtectedRoute'; // Adjust the import path as necessary
import ViewProducts from './pages/admin/ViewProducts';
import UpdateProduct from './pages/admin/UpdateProducts';
import Cart from './components/Cart';
import Customise from './pages/Customise';
import Kids from './pages/Category/Kids';
import Adults from './pages/Category/Adults';
import Teens from './pages/Category/Teens';
import Store from './pages/Store';
import About from './pages/company/About';
import Blog from './pages/company/Blog';
import Terms from './pages/company/Terms';
import Privacy from './pages/company/PrivacyPolicy';
import Contact from './pages/company/Contact';
import PageNotFound from './pages/PageNotFound';
import ForgetPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';

function App() {
  return (
      <div className="App">
       <Routes>
       <Route path="*" element={<PageNotFound />} />
       <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="/store" element={<Store />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/teens" element={<Teens />} />
          <Route path="/adults" element={<Adults />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-dashboard/insert-products" element={<Products />} />
            <Route path="/admin-dashboard/view-products" element={<ViewProducts />} />
            <Route path="/update-product/:productId" element={<UpdateProduct />} />
          </Route>
          <Route path="/" element={<Home />} />
       </Routes>
      </div>
  );
}

export default App

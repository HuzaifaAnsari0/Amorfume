import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import AdminDashboard from './pages/admin/adminDashboard';
import Products from './pages/admin/product';
 import ProtectedRoute from './pages/auth/ProtectedRoute'; // Adjust the import path as necessary

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-dashboard/insert-products" element={<Products />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
   


export default App

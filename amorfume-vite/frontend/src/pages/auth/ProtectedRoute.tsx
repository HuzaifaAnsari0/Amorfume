import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('token') ? true : false; // Directly check if token exists for authentication
    const isAdmin = localStorage.getItem('isAdmin') === 'true'; // Retrieve isAdmin flag
    
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
  
    if (!isAdmin) {
      return <Navigate to="/" />;
    }
  
    return <Outlet />;
  };

export default ProtectedRoute;
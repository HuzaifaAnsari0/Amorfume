import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleProducts = () => {
        navigate('/admin-dashboard/products');
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={handleProducts}> Products</button>
        </div>
    );
}

export default AdminDashboard;
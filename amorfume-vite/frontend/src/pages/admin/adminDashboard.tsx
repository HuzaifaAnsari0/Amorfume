import React from 'react';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
    const navigate = useNavigate();

    const InsertProducts = () => {
        navigate('/admin-dashboard/insert-products');
    };
    const ViewProducts = () => {
        navigate('/admin-dashboard/view-products');
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={InsertProducts}>Insert Products</button> <br />
            <button onClick={ViewProducts}>View Products</button> 
        </div>
    );
}

export default AdminDashboard;
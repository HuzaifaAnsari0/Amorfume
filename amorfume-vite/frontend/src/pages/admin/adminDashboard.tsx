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
    const goToWebsite = () => {
        // Assuming you have a route for your main website
        navigate('/');
    };

    return (
        <div className="flex flex-col h-screen">
            {/* Navbar */}
            <div className="flex justify-between items-center bg-gray-200 p-4">
                <div className="text-lg font-bold">Amorfume</div>
                <div className="text-xl font-bold">Admin Dashboard</div>
                <button onClick={goToWebsite} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Website
                </button>
            </div>

            {/* Main Content with Sidebar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-gray-800 text-white flex flex-col">
                    <div className="p-5 font-bold text-lg">Operations</div>
                    <button onClick={InsertProducts} className="py-2 px-4 hover:bg-gray-700">Insert Products</button>
                    <button onClick={ViewProducts} className="py-2 px-4 hover:bg-gray-700">View & Update Products</button>
                </div>

                {/* Content Area */}
                <div className="flex-1 p-10 overflow-auto">
                    <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
                    {/* Additional content can be added here */}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
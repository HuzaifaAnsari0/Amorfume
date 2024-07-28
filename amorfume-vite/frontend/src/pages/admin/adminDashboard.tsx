import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/images/amorfumeLogoBlack.png'
import axios from 'axios';
import { BetweenHorizontalEnd, ScanEye } from 'lucide-react';

interface User {
    id: string;
    name: string;
    email: string;
    // Add other user fields as needed
}

const AdminDashboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/admin-dashboard')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, []);


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
            <div className="flex justify-between items-center bg-slate-100 p-4">
                <Link to="/admin-dashboard"> 
                <div className="text-lg font-semibold w-40">
                    <img src={NavLogo} alt="" />
                </div>
                </Link>
                <div className="text-xl font-semibold">Admin Dashboard</div>
                <button onClick={goToWebsite} className="bg-fuchsia-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Website
                </button>
            </div>

            {/* Main Content with Sidebar */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <div className="w-64 bg-slate-600 text-black flex flex-col">
                    <div className="flex p-5 font-bold text-lg text-white">Operations</div>
                    <button onClick={InsertProducts} className=" flex py-2 px-4 hover:bg-gray-700 text-white"> <BetweenHorizontalEnd className='text-white px-1' />Insert Products</button>
            <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white"><ScanEye className=' text-white px-1' /> View & Update Products</button>
             </div>

                {/* Content Area */}
                <div className="flex-1 p-10 overflow-auto">
                    {users.length > 0 ? (
                        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">User Details</h2>
                            {users.map(user => (
                                <div key={user.id} className="p-4 bg-white border border-gray-200 rounded-md mb-4">
                                    <p className="mb-2"><strong className="text-gray-700">Name:</strong> {user.name}</p>
                                    <p className="mb-2"><strong className="text-gray-700">Email:</strong> {user.email}</p>
                                    {/* Render other user details as needed */}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Loading user details...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
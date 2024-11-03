import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/images/amorfumeLogoBlack.png'
import axios from 'axios';
import AdminNav from './AdminNav';

interface User {
    id: string;
    name: string;
    email: string;
    contact: string;
    country: string;
    state: string;
    city: string;
    address: string;
    pincode: string;
    role: Number;
}

const AdminDashboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const navigate = useNavigate();
    const url = import.meta.env.VITE_BACKEND_URL; // Use process.env in CRA


    useEffect(() => {
        axios.get(`${url}/admin-dashboard`)
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });
    }, []);

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
                <button onClick={goToWebsite} className="bg-slate-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Website
                </button>
            </div>

            {/* Main Content with Sidebar */}
            <div className="flex flex-1 overflow-hidden">
                <AdminNav />
                {/* Sidebar */}
                {/* <div className="w-64 bg-slate-600 text-black flex flex-col">
                    <div className="flex pl-6 pt-3 pb-3 font-bold text-lg text-white">Operations</div>
                    <button onClick={InsertProducts} className=" flex py-2 px-4 hover:bg-gray-700 text-white"> <BetweenHorizontalEnd className='text-white px-1' />Insert Products</button>
                   <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white"><ScanEye className=' text-white px-1' /> View & Update Products</button>
                   <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white">
                     <ScanEye className=' text-white px-1' />
                     <img src={Order} className='pr-1' />
                     Order History</button>
             </div> */}

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-auto">
                    {users.length > 0 ? (
                        <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                            <h2 className="text-xl font-medium mb-4 text-gray-700">User Details</h2>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {users.map(user => (
                                    <div key={user.id} className="p-3 bg-white border border-gray-300 rounded-md">
                                        <p className="text-sm"><strong className="text-gray-600">Name:</strong> {user.name}</p>
                                        <p className="text-sm"><strong className="text-gray-600">Email:</strong> {user.email}</p>
                                        <p className="text-sm"><strong className="text-gray-600">Contact:</strong> {user.contact}</p>
                                        <p className="text-sm"><strong className="text-gray-600">Pincode:</strong> {user.pincode}</p>
                                        <p className="text-sm"><strong className="text-gray-600">City:</strong> {user.city}</p>
                                        <p className="text-sm"><strong className="text-gray-600">Country:</strong> {user.country}</p>
                                        <p className="text-sm"><strong className="text-gray-600">State:</strong> {user.state}</p>
                                        <p className="text-sm"><strong className="text-gray-600">Address:</strong> {user.address}</p>
                                        <p className="text-sm"><strong className="text-gray-600">Role:</strong> {user.role === 1 ? 'Admin' : 'User'}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500">Loading user details...</p>
                    )}
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;
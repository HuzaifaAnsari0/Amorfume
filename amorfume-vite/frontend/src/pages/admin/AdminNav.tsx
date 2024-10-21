import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavLogo from '../../assets/images/amorfumeLogoBlack.png'
import axios from 'axios';
import { BetweenHorizontalEnd, ScanEye } from 'lucide-react';
import Order from "../../assets/images/order-history.svg"

const AdminNav =() => {

    const navigate = useNavigate();

    const InsertProducts = () => {
        navigate('/admin-dashboard/insert-products');
    };
    const ViewProducts = () => {
        navigate('/admin-dashboard/view-products');
    };
    const OrderHistory = () => {
        navigate('/admin-dashboard/order-history');
    };

    return(
        <>
        <div className="w-64 bg-slate-600 text-black flex flex-col">
                    <div className="flex pl-6 pt-3 pb-3 font-bold text-lg text-white">Operations</div>
                    <button onClick={InsertProducts} className=" flex py-2 px-4 hover:bg-gray-700 text-white"> <BetweenHorizontalEnd className='text-white px-1' />Insert Products</button>
                   <button onClick={ViewProducts} className="flex py-2 px-4 hover:bg-gray-700 text-white"><ScanEye className=' text-white px-1' /> View & Update Products</button>
                   <button onClick={OrderHistory} className="flex py-2 px-4 hover:bg-gray-700 text-white">
                     {/*<ScanEye className=' text-white px-1' />*/} 
                     <img src={Order} className='pr-1' />
                     Order History</button>
             </div>

        </>
    )
}

export default AdminNav
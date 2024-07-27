import React from "react";
import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UserProfilePage = () => {

    return (
        <>
        <Header />
        <div className=" justify text-center text-4xl">
            <h1 className="pt-10">User Profile</h1>
        </div>
        <div className="bg-slate-50">
            <MaxWidthWrapper>
            <section className="py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
            <div className="main-data p-8 sm:p-14 bg-gray-50 rounded-3xl">
                <h2 className="text-center font-manrope font-semibold text-4xl text-black mb-16">Order History</h2>
                <div className="grid grid-cols-8 pb-9">
                    <div className="col-span-8 lg:col-span-4">
                        <p className="font-medium text-lg leading-8 text-indigo-600">Product </p>
                    </div>
                    <div className="col-span-1 max-lg:hidden">
                        <p className="font-medium text-lg leading-8 text-gray-600 text-center">price </p>
                    </div>
                    <div className="col-span-1 max-lg:hidden flex items-center justify-center">
                        <p className="font-medium text-lg leading-8 text-gray-600">Qty </p>
                    </div>
                    <div className="col-span-2 max-lg:hidden">
                        <p className="font-medium text-lg leading-8 text-gray-500">Delivery Expected by </p>
                    </div>
                </div>
                <div
                    className="box p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">

                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                        <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" className="max-lg:w-auto max-sm:mx-auto rounded-xl" />
                    </div>
                    <div
                        className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                        <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                            Apple Airpods Pro</h5>
                        <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">White</p>
                    </div>

                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                        <p className="font-semibold text-xl leading-8 text-black">$249.99</p>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center ">
                        <p className="font-semibold text-xl leading-8 text-indigo-600 text-center">2</p>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                        <p className="font-semibold text-xl leading-8 text-black">23rd March 2021</p>
                    </div>
                </div>

                <div
                    className="box p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">

                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                        <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" className="max-lg:w-auto max-sm:mx-auto rounded-xl" />
                    </div>
                    <div
                        className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                        <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                            Apple Airpods Pro</h5>
                        <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">White</p>
                    </div>

                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                        <p className="font-semibold text-xl leading-8 text-black">$249.99</p>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center ">
                        <p className="font-semibold text-xl leading-8 text-indigo-600 text-center">2</p>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                        <p className="font-semibold text-xl leading-8 text-black">23rd March 2021</p>
                    </div>
                </div>

                <div
                    className="box p-8 rounded-3xl bg-gray-100 grid grid-cols-8 mb-7 cursor-pointer transition-all duration-500 hover:bg-indigo-50 max-lg:max-w-xl max-lg:mx-auto">

                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 sm:row-span-4 lg:row-span-1">
                        <img src="https://pagedone.io/asset/uploads/1705474950.png" alt="earbuds image" className="max-lg:w-auto max-sm:mx-auto rounded-xl" />
                    </div>
                    <div
                        className="col-span-8 sm:col-span-4 lg:col-span-3 flex h-full justify-center pl-4 flex-col max-lg:items-center">
                        <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-1 whitespace-nowrap">
                            Apple Airpods Pro</h5>
                        <p className="font-normal text-base leading-7 text-gray-600 max-md:text-center">White</p>
                    </div>

                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center">
                        <p className="font-semibold text-xl leading-8 text-black">$249.99</p>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-1 flex items-center justify-center ">
                        <p className="font-semibold text-xl leading-8 text-indigo-600 text-center">2</p>
                    </div>
                    <div className="col-span-8 sm:col-span-4 lg:col-span-2 flex items-center justify-center ">
                        <p className="font-semibold text-xl leading-8 text-black">23rd March 2021</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </MaxWidthWrapper>
        </div>

        <Footer />

        </>
    )

}

export default UserProfilePage;
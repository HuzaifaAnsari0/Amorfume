import MaxWidthWrapper from "../@/components/MaxWidthWrapper"
import Footer from "./Footer"
import Header from "./Header"

import BabyCart from "../assets/cart.svg"


const EmptyCart = () => {

    return (
        <>
            <Header />
            <div className="flex items-center bg-white ">
                <MaxWidthWrapper>
                    {/* <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <h2 className='order-1 mt-2 tracking-tight text-center 
                        text-balance !leading-tight font-bold text-5xl md:text-6xl
                         text-gray-900'>
                            Your Cart is
                             <span className='relative px-2'>
                            Empty 
                            </span>
                        </h2>

                             <img src={BabyCart} className='w-24 order-0 lg:order-2'/>

            </div> */}
                    <div className='flex flex-col items-center gap-4'>
                        <img src={BabyCart} className='w-72 pt-8 mr-10' />
                        <h2 className='mt-2 mb-3 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                            Your Cart is Empty
                        </h2>
                    </div>

                </MaxWidthWrapper>
            </div>
            <Footer />


        </>

    )
}

export default EmptyCart
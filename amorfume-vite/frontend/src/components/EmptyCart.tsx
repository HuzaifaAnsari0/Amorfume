import MaxWidthWrapper from "../@/components/MaxWidthWrapper"
import Footer from "./Footer"
import Header from "./Header"

import BabyCart from "../assets/cart.svg"


const EmptyCart = () => {

    return (
        <>
        <Header />
        <div className="flex items-center bg-slate-50 ">
            <MaxWidthWrapper>
            <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <h2 className='order-1 mt-2 tracking-tight text-center 
                        text-balance !leading-tight font-bold text-5xl md:text-6xl
                         text-gray-900'>
                            Your Cart is
                             <span className='relative px-2'>
                            Empty 
                            </span>
                             </h2>

                             <img src={BabyCart} className='w-24 order-0 lg:order-2'/>

                    </div>

            </MaxWidthWrapper>
        </div>
        <Footer />
        
        
        </>

    )
}

export default EmptyCart
import { ArrowRight, Check, Star } from 'lucide-react';
import User1 from "../../assets/images/users/user-1.png"
import User2 from "../../assets/images/users/user-1.png"
import User3 from "../../assets/images/users/user-1.png"
import User4 from "../../assets/images/users/user-1.png"
import User5 from "../../assets/images/users/user-1.png"
import Logo from "../../assets/images/Amor.png"
import MaxWidthWrapper from '../../@/components/MaxWidthWrapper';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Kids = () => {
    return (

        <>
        <Header/>
       <div className="bg-slate-50">
        
        
        <section>
                <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3
                sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">

                    <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                        <div className='relative mx-auto text-center lg:text-left 
                        flex flex-col items-center lg:items-start'>
                            <div className=" absolute w-28 left-0 -top-20 hidden lg:block">
                                <img src={Logo} className="w-full"/>
                            </div>
                            <h1 className='relative w-fit tracking-tight text-balance 
                                mt-16 font-bold !leading-tight text-gray-900 
                                text-5xl md:text-6xl lg:text-7xl'>
                                Your Image on a  
                                <span className='bg-fuchsia-600 text-white'>Custom</span> Perfume
                            </h1>

                            <p className='mt-8 text-lg lg:pr-10 max-w-prrose text-center lg:text-left text-balance md:text-wrap'>
                              Capture your favorite memories with your own 
                              <span className='font-semibold'>one-of-one</span> along your fragrance.
                              Amorfume allows you to protect your memories, not just the way you smell.
                            </p>

                            <ul className='mt-8 space-y-2 tet-left font-medium flex
                            flex-col items-center sm:items-start'>
                                <div className='space-y-2'>
                                    <li className='flex gap-1.5 items-center text-left'>
                                       <Check className='h-5 w-5 shrink-0 text-fuchsia-500' />
                                        High Quality, Durable Material
                                    </li>
                                    <li className='flex gap-1.5 items-center text-left'>
                                       <Check className='h-5 w-5 shrink-0 text-fuchsia-500' /> 
                                       A print that lasts 
                                    </li>
                                    <li className='flex gap-1.5 items-center text-left'>
                                       <Check className='h-5 w-5 shrink-0 text-fuchsia-500' /> 
                                       Modern perfume for modern you
                                    </li>
                                </div>

                            </ul>

                            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'> 
                                <div  className='flex -space-x-4'>
                                    <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                                        src={User1}
                                        alt='user image'
                                        />
                                    <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                                        src={User2}
                                        alt='user image'
                                        />
                                    <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                                        src={User3}
                                        alt='user image'
                                        />
                                    <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' 
                                        src={User4}
                                        alt='user image'
                                        />
                                    <img className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100 object-cover' 
                                        src={User5}
                                        alt='user image'
                                        />
                                    
                                </div>

                                <div className='flex flex-col justify-between items-center
                                sm:items-start'>
                                    <div className='flex gap-0.5'>
                                        <Star  className='h-4 w-4 text-fuchsia-400 
                                        fill-fuchsia-400'/>
                                        <Star  className='h-4 w-4 text-fuchsia-400 
                                        fill-fuchsia-400'/>
                                        <Star  className='h-4 w-4 text-fuchsia-400 
                                        fill-fuchsia-400'/>
                                        <Star  className='h-4 w-4 text-fuchsia-400 
                                        fill-fuchsia-400'/>
                                        <Star  className='h-4 w-4 text-fuchsia-400 
                                        fill-fuchsia-400'/>
                                    </div>
                                    
                                    <p>
                                        <span className='fomnt-semibold'>1,250</span> happy
                                        customers
                                        </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='col-span-full lg:col-span-1 w-full flex
                    justify-center px-8 sm:px-16 md:px-0 mt-32lg:mx-0 lg:mt-20
                    h-fit'>
                        <div className="relative md:max-w-xl">
                            <img src="" className='absolute w-40 lg:w-52 left-56 -top-20 select-none 
                            hidden sm:block lg:hidden xl:block'/>
                            <img src="" className='absolute 2-20 -left-6 -bottom-6
                            select-none'/>
                        </div>
                    </div>
                    
                </MaxWidthWrapper>
            </section>
       </div>

       <Footer />
       </>
    )
}

export default Kids
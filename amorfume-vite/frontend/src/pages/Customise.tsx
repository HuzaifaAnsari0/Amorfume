import { ArrowRight, Check, Star } from 'lucide-react';
import MaxWidthWrapper from '../@/components/MaxWidthWrapper'
import User1 from "../assets/images/users/user-1.png"
import User2 from "../assets/images/users/user-2.png"
import User3 from "../assets/images/users/user-3.png"
import User4 from "../assets/images/users/user-4.jpg"
import User5 from "../assets/images/users/user-5.jpg"
import Bottle from '../@/components/Bottle';
import Random from "../assets/images/random.png"
import Logo from "../assets/images/Amor.png"
import Header from '../components/Header';
import { Icons } from '../@/components/Icons';
import { Reviews } from '../components/Reviews';
import arrow from "../assets/images/arrow.png"
import horse from "../assets/images/horse.jpg"
import { Link } from 'react-router-dom';
import { buttonVariants } from '../@/components/button';
import Footer from '../components/Footer';

const  Customise = () => {
    return(
        <>
        <Header />
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
                            <Bottle className='w-100' imgSrc={Random} />
                        </div>
                    </div>
                    
                </MaxWidthWrapper>
            </section>

            {/* value proposition */}
            <section className="bg-slate-100 py-24">
                <MaxWidthWrapper className='flex flex-col items-center gap-16'>
                    <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <h2 className='order-1 mt-2 tracking-tight text-center 
                        text-balance !leading-tight font-bold text-5xl md:text-6xl
                         text-gray-900'>
                            What Our
                             <span className='relative px-2'>
                            Customers <Icons.underline className='hidden sm-block pointer-events-none absoulte
                             inset-x-0 -bottom-6 text-fuchsia-600'/> 
                            </span> Say
                             </h2>

                             <img src={Logo} className='w-24 order-0 lg:order-2'/>

                    </div>

                    <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0
                    lg:max-w-none lg:grid-cols-2 gap-y-16'>
                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 
                        xl:pr-20'>
                            <div className='flex gap-0.5 mb-2'>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                            </div>
                            <div className='text-lg leading-8'>
                                <p>
                                    "I love my custom perfume. It's a <span className='p-0.5 bg-slate-800 text-white'>great way to keep my memories alive.</span>
                                     The scent is amazing and lasts long.
                                     I can't wait to order more for my friends and family.
                                     100% recommended, you won't regret it."
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <img
                                 className='rounded-full h-12 w-12 object-cover' 
                                 src={User1} 
                                 alt='user image'
                                 />
                                 <div className='flex flex-col'>
                                    <p className='font-semibold'>John due</p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <Check className='h-4 w-4 stroke-[3px] text-fuchsia-400'/>
                                        <p className='text-sm'>Verified Purchase</p>
                                    </div>
                                 </div>
                            </div>

                        </div>

                        {/* second review */}

                        <div className='flex flex-auto flex-col gap-4 lg:pr-8 
                        xl:pr-20'>
                            <div className='flex gap-0.5 mb-2'>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                                <Star className='h-5 w-5 text-fuchsia-400 fill-fuchsia-400'/>
                            </div>
                            <div className='text-lg leading-8'>
                                <p>
                                    "I usually keep a pocket perfume for quick fragrance in my pocket 
                                    and with Amorfume's pocket friendly custom perfumes I can smell the way I want. 
                                     <span className='p-0.5 bg-slate-800 text-white'>Always fresh even after 100s of uses</span>
                                     . I dig it."
                                     
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <img
                                 className='rounded-full h-12 w-12 object-cover' 
                                 src={User2} 
                                 alt='user image'
                                 />
                                 <div className='flex flex-col'>
                                    <p className='font-semibold'>Annie Marie</p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <Check className='h-4 w-4 stroke-[3px] text-fuchsia-400'/>
                                        <p className='text-sm'>Verified Purchase</p>
                                    </div>
                                 </div>
                            </div>

                        </div>
                    </div>
                </MaxWidthWrapper>

                <div className='pt-16'>

                    {/* <Reviews /> */}

                </div>
            </section>

            <section>
                <MaxWidthWrapper className='py-24'>
                    <div className='mb-12 px-6 lg:px-8'>
                        <div className='mx-auto max-w-2xl sm:text-center'>
                        <h2 className='order-1 mt-2 tracking-tight text-center 
                        text-balance !leading-tight font-bold text-5xl md:text-6xl
                         text-gray-900'>
                            Upload your photo and get
                             <span className='relative px-2 bg-fuchsia-400 text-white'>
                            your own bottle</span> now
                             </h2>
                        </div>
                    </div>

                    <div className='mx-auto max-w-6xl px-6 lg:px-8'> 
                        <div className='relative flex flex-col items-center
                         md:grid grid-cols-2 gap-40'>
                            <img src={arrow} className='absolute top-[25rem] md:top-1/2
                            -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0' />

                            <div className='relative h-80 md:h-full w-full md:justify-self-end
                            max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rouned-2xl'>
                                <img src={horse} className='rounded-md object-cover
                                bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full' />
                            </div>

                            <Bottle className='w-100' imgSrc={horse}/>
                        </div>
                    </div>

                    <ul className='mx-auto mt-12 max-w-prose sm:text-lg
                    space-y-2 w-fit'>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-fuchsia-600 inline mr-1.5' />
                            High Quality, Fragrance
                        </li>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-fuchsia-600 inline mr-1.5' />
                            Lasts upto 14 hrs
                        </li>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-fuchsia-600 inline mr-1.5' />
                            Weather Compatible
                        </li>
                        <li className='w-fit'>
                            <Check className='h-5 w-5 text-fuchsia-600 inline mr-1.5' />
                            100% Customizable
                        </li>

                        <div className='flex justify-center'>
                        <Link className={buttonVariants({
                            size: 'lg',
                            className: 'mx-auto mt-8'
                        })} to="/">
                            Create Your Custom Perfume Now <ArrowRight className='h-4 w-4 ml-1.5'/>
                            </Link>
                        </div>

                    </ul>
                </MaxWidthWrapper>
            </section>
        </div>

        <Footer />
        </>
    )
}

export default Customise;
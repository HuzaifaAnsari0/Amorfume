// import { ArrowRight, Check, Star } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Kids = () => {
    return (

        <>
        <Header/>
       <div className="bg-slate-50">

                    <div className="px-4 lg:px-6 lg:px-8 py-10">
                    <div className="relative">
                        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-gray-100 rounded-2xl dark:bg-neutral-800">
                        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
                            <div className="hs-carousel-slide">
                            <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col " >
                                <img className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-cover bg-center bg-no-repeat" src="https://www.hindustantimes.com/ht-img/img/2023/07/20/1600x900/5_flowers_that_flower_throughout_the_year_1689828870160_1689828884481.jpg" />
                                <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                                <span className="block text-white">Nike React</span>
                                <span className="block text-white text-xl md:text-3xl">Rewriting sport's playbook for billions of athletes</span>
                                <div className="mt-5">
                                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    Read Case Studies
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>

                        
                    </div>
                    </div>
                    </div>
                    </div>


        
       </div>

       <Footer />
       </>
    )
}

export default Kids
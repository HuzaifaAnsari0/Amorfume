import { Link } from "react-router-dom"
import MaxWidthWrapper from "../@/components/MaxWidthWrapper"
import Footer from "./Footer"

const Foooter = () => {
    return(
        <>
        <Footer />
        <footer className="bg-white h-20 relative">
            <MaxWidthWrapper>
                <div className="border-t border-gray-200">

                    <div className="h-full flex flex-col md:flex-row
                    md:justify-between justify center items-center">
                        <div className='text-center md:text-left pb-2 md:pb-0'>
                            <p className='text-sm text-muted-foreground'>
                                &copy; {new Date().getFullYear()} Amorfume. All rights reserved.
                            </p>
                        </div>

                        <div className="flex items-center justify-center">
                            <div className="flex space-x-8">
                                <Link 
                                to='/' 
                                className="text-sm text-muted-foreground hover:text-gray-600">
                                    Terms & Condition
                                </Link>
                                <Link 
                                to='/' 
                                className="text-sm text-muted-foreground hover:text-gray-600">
                                    Privacy Policy
                                </Link>
                                <Link 
                                to='/' 
                                className="text-sm text-muted-foreground hover:text-gray-600">
                                    Ai for Perfume
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
        </>
    )
}

export default Foooter
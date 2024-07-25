import { Link } from "react-router-dom";
import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import Logo1 from '../assets/images/amorfumeLogoBlack.png';
import { buttonVariants } from "../@/components/button";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Function to check if the user is logged in
    const checkUserLoggedIn = () => {
        const token = localStorage.getItem("token");
        return !!token;
      };
    
      useEffect(() => {
        // Check if the token is present in the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
          localStorage.setItem("token", token);
          window.history.replaceState({}, document.title, "/"); // Remove token from URL
        }
        setIsLoggedIn(checkUserLoggedIn());
      }, []);
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link to='/' className="flex z-40 font-semibold">
                        <img src={Logo1} alt="Amorfume" className="h-8 w-8" />
                    </Link>

                    <div className="h-4 flex items-center space-x-4">
                        {!isLoggedIn && (
                            <Link to="/signup" className={buttonVariants({
                                size: 'sm',
                                variant: 'ghost'
                            })}>Sign up</Link>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};
export default Navbar;
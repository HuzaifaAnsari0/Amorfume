// import { ArrowRight, Check, Star } from 'lucide-react';
// import MaxWidthWrapper from '../@/components/MaxWidthWrapper'
// import User1 from "../assets/images/users/user-1.png"
// import User2 from "../assets/images/users/user-2.png"
// import User3 from "../assets/images/users/user-3.png"
// import User4 from "../assets/images/users/user-4.jpg"
// import User5 from "../assets/images/users/user-5.jpg"
// import Bottle from '../@/components/Bottle';
// import Random from "../assets/images/random.png"
// import Logo from "../assets/images/Amor.png"
import Header from '../components/Header';
// import { Icons } from '../@/components/Icons';
// import { Reviews } from '../components/Reviews';
// import arrow from "../assets/images/arrow.png"
// import horse from "../assets/images/horse.jpg"
// import { Link } from 'react-router-dom';
// import { buttonVariants } from '../@/components/button';
// import Foooter from '../components/Footer1';
import Footer from '../components/Footer';
import Trial from '../assets/images/trial.png'
const  Home = () => {
    return(
        <>
        <Header />
        <div className="bg-slate-50">
            <img src={Trial} />

        
        </div>

        <Footer />
        </>
    )
}

export default Home;
import MaxWidthWrapper from "../@/components/MaxWidthWrapper"
import Carousal from "../components/Carousal"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Products from "../components/Products"

const Store = () => {

    return (
        <>
                    <Header />
                    <div className="bg-slate-50">
                        <Carousal />

                        <MaxWidthWrapper>
                            <div>
                                <Products />
                            </div>
                        </MaxWidthWrapper>


                        {/* <div>
                            image will come
                        </div> */}
                    </div>
                  

                    <Footer />

        </>
       
    )
}

export default Store
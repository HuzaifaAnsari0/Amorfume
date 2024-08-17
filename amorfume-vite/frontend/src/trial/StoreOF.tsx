import Footer from "../components/Footer"
import Header from "../components/Header"
import "./storeof.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Product1 from "./images/productImages/1.png"
import { ArrowRight, ShoppingBag } from "lucide-react"

const StoreOF = () => {

    return (
        <>
        <Header />
        <div className="container-fluid bg9">
      <div className="row">
        <div className="col banner-text">
          <h1>#AMORFUME</h1>
          <p>Save more with coupons and many more</p>
        </div>
      </div>
    </div>

     {/* Product Filter @HuzaifaAnsari0 */}


    <div className="container filter">
      <div className="row">
        <div className="col-md-12 col-lg-6 category">
          <button type="button" className="btn active">All Products</button>
          <button type="button" className="btn">Men</button>
          <button type="button" className="btn">Women</button>
          <button type="button" className="btn">Kids</button>
          <button type="button" className="btn">Adults</button>
          <button type="button" className="btn">Teens</button>
          <button type="button" className="btn">Special</button>
          <button type="button" className="btn">Customise</button>
        </div>


            {/* Product Search @HuzaifaAnsari0 */}


        <div className="col-md-12 col-lg-6">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              />
            <button className="btn js-submit" type="submit">Search</button>
          </form>
        </div>
        {/* Product Search END @HuzaifaAnsari0 */}

      </div>
    </div>

              {/* Product Filter END @HuzaifaAnsari0 */}

    
     {/*----------------------------------------------
                              Products
    -------------------------------------------------------- */}
    <div className="container" id="products">

    <div className="row">
      <div className="col-12 col-lg-3 col-md-4">
          <div className="card">
            <img src={Product1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Amorfume Special</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="/" className="btn btn-primary"
                ><ShoppingBag className="bi bi-cart-plus" /></a>
              <h4 id="price">$200</h4>
            </div>
          </div>
        </div>
      <div className="col-12 col-lg-3 col-md-4">
          <div className="card">
            <img src={Product1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Amorfume Special</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="#" className="btn btn-primary"
                ><ShoppingBag className="bi bi-cart-plus" /></a>
              <h4 id="price">$200</h4>
            </div>
          </div>
        </div>
      <div className="col-12 col-lg-3 col-md-4">
          <div className="card">
            <img src={Product1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Amorfume Special</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="#" className="btn btn-primary"
                ><ShoppingBag className="bi bi-cart-plus" /></a>
              <h4 id="price">$200</h4>
            </div>
          </div>
        </div>
      <div className="col-12 col-lg-3 col-md-4">
          <div className="card">
            <img src={Product1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Amorfume Special</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="#" className="btn btn-primary"
                ><ShoppingBag className="bi bi-cart-plus" /></a>
              <h4 id="price">$200</h4>
            </div>
          </div>
        </div>
    
      </div>







    {/* If no products then show this @HuzaifaAnsari0 */}

      <div className="row no-data">
        <div className="col-md-4">
          <img className="img-fluid" src="images/no-data-found.png" alt="" />
        </div>
      </div>


    {/* END @HuzaifaAnsari0 */}
    </div>

    {/*--------------------Product End-------------------------- */}
                          
    <div className="container buttons">
      <div className="row">
        <div className="col text-center">
          <a href="#"><button type="button" className="btn">1</button></a>
          <a href="#"><button type="button" className="btn">2</button></a>
          <a href="#"
            ><button type="button" className="btn">
              <ArrowRight/></button></a>
        </div>
      </div>
    </div>
    
    <div className="container-fluid">
      <div className="row" id="bg-7">
        <div className="col">
          <h1>Sign Up For Newsletters</h1>
          <p>
            Get email updates about your latest shop and
            <span>Special Offers.</span>
          </p>
        </div>
        <div className="col">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="Email"
              placeholder="Subscribe"
              aria-label="subscribe"
            />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
        <Footer />
        </>
    )
}

export default StoreOF
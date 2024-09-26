import { ShoppingBag } from "lucide-react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Product1 from "./images/productImages/1.png"
import "./prouctview.css"



const TrialProductview = () => {
    return(
        <>
        <Header />
        
    <div className="container mobile-container mt-5 mb-5">
      <div className="row">
        <div className="col-12 col-md-5">
          <div className="row">
            <div className="col-12 mb-2">
              <img
                id="main-image"
                className="img-fluid"
                src={Product1}
                alt=""
              />
            </div>
            <div className="col">
              <div className="row">
                <div className="col small-items">
                  <img
                    className="img-fluid small-img"
                    src={Product1}
                    alt=""
                  />
                </div>
                <div className="col small-items">
                  <img
                    className="img-fluid small-img"
                    src={Product1}
                    alt=""
                  />
                </div>
                <div className="col small-items">
                  <img
                    className="img-fluid small-img"
                    src={Product1}
                    alt=""
                  />
                </div>
                <div
                  className="col small-items"
                 
                >
                  <img
                    className="img-fluid small-img"
                    src={Product1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7 product-details">
          <p className="p">Home / Men</p>
          <h3 className="h3" >Amorfume Special</h3>
          <h1 className="h1">$139.00</h1>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select size</option>
            <option value="1">30</option>
            <option value="2">50</option>
            <option value="3">100</option>
          </select>
          <div className="d-flex mt-2 mb-2">
            <input type="number" className="form-control me-2" placeholder="1" />
            <button type="button" className="btn btn-primary">Add to cart</button>
          </div>
          <h4 className="h4">Product Details</h4>
          <p className="p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quidem accusantium optio minus laborum obcaecati eos vel repellat temporibus veritatis doloremque numquam aspernatur architecto rem, in modi cumque totam vitae sapiente.
          </p>
          <p></p>
        </div>
      </div>
    </div>



    <div className="container" id="products-1">
      <div className="row">
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

export default TrialProductview;
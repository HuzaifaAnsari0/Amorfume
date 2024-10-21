import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Feature1 from "./images/feature/f1.png"
import Feature2 from "./images/feature/f2.png"
import Feature3 from "./images/feature/f3.png"
import Feature4 from "./images/feature/f4.png"
import Feature5 from "./images/feature/f5.png"
import Feature6 from "./images/feature/f6.png"
import { ShoppingBag } from "lucide-react"

interface Product {
  _id: string;
  name: string;
  price: number;
  volume: number;
  description: string;
  image1: string;
  image2: string;
  image3: string;
  category: 'adult' | 'kids' | 'teens';
}

const Stores = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate  = useNavigate();

  const handleSubs = () =>{
    navigate('/contact')
  }

  useEffect(() => {
    fetch('http://localhost:5000/view-products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const latestProducts = products
  .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())  // Sort by newest
  .slice(0, 8);  // Take the latest 8 products

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="container-fluid md-2 bg">

      </div>
      <div className="container">
        <div className="row feature text-center">
          <div className="col-6 col-md-4 col-lg-2">
            <div className="cols">
              <img src={Feature1} alt="" />
              <p style={{ backgroundColor: '#fddde4' }} >Free shipping</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="cols">
              <img src={Feature2} alt="" />
              <p style={{ backgroundColor: '#cfeabd' }}>Online order</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="cols">
              <img src={Feature3} alt="" />
              <p style={{ backgroundColor: '#d3e9f1' }} >Save money</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="cols">
              <img src="images/feature/f4.png" alt="" />
              <img src={Feature4} alt="" />
              <p style={{ backgroundColor: '#f9f2f4' }}>Best quality</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="cols">
              <img src={Feature5} alt="" />
              <p style={{ backgroundColor: '#eee0fd' }}>Happy sell</p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className="cols">
              <img src={Feature6} alt="" />
              <p style={{ backgroundColor: '#fcf2e6' }} >24/7 service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 id="h1">Feature Products</h1>
            <p>Summer collection new Fragrance</p>
          </div>
        </div>
      </div>



      {/*----------------------------------------------
                              Products
    -------------------------------------------------------- */}

      <div className="container" id="products">
        <div className="row">
        {products.map((product) => (
          <div className="col-12 col-lg-3 col-md-4">
            <div className="card">
            <Link to={`/store/productview/${product._id}`}>
              <img src={product.image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                {/* <p className="card-text mb-4">{product.description}</p> */}
                <a href="/" className="btn btn-primary"
                ><ShoppingBag className="bi bi-cart-plus" onClick={() => addToCart(product)}/></a>
                <h4 id="price">${product.price}</h4>
              </div>
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/*----------------------------------------------
                                         Products END
               -------------------------------------------------------- */}

      <div className="container-fluid bg-1">
        <div className="row">
          <div className="col">
            <h4>Gift Kit</h4>
            <h2>
              Up to <span style={{ color: '#dc3c43' }}>5ml</span> - All perfumes
              in one box
            </h2>
            <button type="button" className="btn">Explore More</button>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1 id="h1">New Arrivals</h1>
            <p>Summer collection new Fragrance</p>
          </div>
        </div>
      </div>

      {/*Products*/}
      <div className="container" id="products">
        <div className="row">
        {latestProducts.map((product) => (
          <div className="col-12 col-lg-3 col-md-4">
            <div className="card">
            <Link to={`/store/productview/${product._id}`}>
              <img src={product.image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                {/* <p className="card-text mb-4">{product.description}</p> */}
                <a href="/" className="btn btn-primary"
                ><ShoppingBag className="bi bi-cart-plus" onClick={() => addToCart(product)}/></a>
                <h4 id="price">${product.price}</h4>
              </div>
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>

      {/*----------------------------------------------
                                         Products END
               -------------------------------------------------------- */}


      <div className="container" id="second-last">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12">
            <div className="cols-1" id="bg-2">
              <p>crazy deals</p>
              <h1>Buy 1 Get 1 Free</h1>
              <p id="last-p">The best classsy perfumes are for sale on amorfume</p>
              <button type="button" className="btn">Learn More</button>
            </div>
          </div>


          <div className="col-12 col-lg-6 col-md-12">
            <div className="cols-1" id="bg-3">
              <p>spring/summer</p>
              <h1>Upcoming Season</h1>
              <p id="last-p">The best classsy perfumes are for sale on amorfume</p>
              <button type="button" className="btn">Collection</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="last">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div id="bg-4">
              <h1>Gift Kit</h1>
              <p>5ml bottles of all perfumes</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div id="bg-5">
              <h1>Perfume AI</h1>
              <p>Coming Soon</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div id="bg-6">
              <h1>Customise</h1>
              <p>Coming Soon</p>
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
              <button className="btn" type="submit" onClick={handleSubs}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Stores
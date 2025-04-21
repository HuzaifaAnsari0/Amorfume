import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Chat from "../components/chat";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Feature1 from "./images/feature/f1.png";
import Feature2 from "./images/feature/f2.png";
import Feature3 from "./images/feature/f3.png";
import Feature4 from "./images/feature/f4.png";
import Feature5 from "./images/feature/f5.png";
import Feature6 from "./images/feature/f6.png";
import { ShoppingBag } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  description: string;
  bottleOptions: {
    type: string;
    price: number;
  }[];
  image1: string;
  category: 'adult' | 'kids' | 'teens';
  price?: number;
  bottleType?: string;
  createdAt: string;
}

const Stores = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const url = import.meta.env.VITE_BACKEND_URL;

  const handleSubs = () => {
    navigate('/contact')
  }

  useEffect(() => {
    fetch(`${url}/view-products`)
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
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    const lowestPriceOption = product.bottleOptions.reduce((min, opt) => 
      opt.price < min.price ? opt : min
    );
    
    addToCart({
      _id: product._id,
      name: product.name,
      description: product.description,
      image1: product.image1,
      category: product.category,
      bottleOptions: product.bottleOptions,
      selectedBottle: {
        type: lowestPriceOption.type,
        price: lowestPriceOption.price
      },
      quantity: 1
    });
  };

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
        <div className="row g-3 g-md-5">
          {products.map((product) => (
        <div key={product._id} className="col-6 col-md-4 col-lg-3">
          <div className="product-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
            <Link to={`/store/productview/${product._id}`} className="text-decoration-none">
              <div
          className="position-relative"
          style={{ aspectRatio: '1', overflow: 'hidden' }}
              >
          <img 
            src={product.image1} 
            className="card-img-top product-image img-fluid" 
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <button 
              className="btn btn-light rounded-circle p-3 m-2" 
              onClick={(e) => handleAddToCart(e, product)}
            >
              <ShoppingBag className="text-primary" size={20} />
            </button>
          </div>
              </div>
              <div className="card-body text-center p-2 p-md-4">
          <h5 className="product-title fw-semibold mb-2">{product.name}</h5>
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
        <div className="row g-4">
          {latestProducts.map((product) => (
            <div key={product._id} className="col-12 col-lg-3 col-md-4">
              <div className="product-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                <Link to={`/store/productview/${product._id}`} className="text-decoration-none">
                  <div className="position-relative">
                    <img 
                      src={product.image1} 
                      className="card-img-top product-image" 
                      alt={product.name}
                      style={{ height: '300px', objectFit: 'fill' }}
                    />
                    <div className="hover-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                      <button 
                        className="btn btn-light rounded-circle p-3 m-2" 
                        onClick={(e) => handleAddToCart(e, product)}
                      >
                        <ShoppingBag className="text-primary" size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="card-body text-center p-4">
                    <h5 className="product-title fw-semibold mb-2">{product.name}</h5>
                    {/* <div className="price-tag">
                      <span className="text-primary fs-5 fw-bold">
                        ₹{Math.min(...product.bottleOptions.map(opt => opt.price))}
                      </span>
                    </div> */}
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
      <Chat />
    </>
  )
}

export default Stores;
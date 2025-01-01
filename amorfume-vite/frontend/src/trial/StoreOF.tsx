import Footer from "../components/Footer";
import Header from "../components/Header";
import "./storeof.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useCart } from '../components/CartContext';
import "./style.css";

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
}

const StoreOF = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
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
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

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

      {/* Product Filter */}
      <div className="container filter">
        <div className="row">
          <div className="col-md-12 col-lg-6 category">
            <button type="button" className={`btn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => handleCategoryChange('all')}>All Products</button>
            <button type="button" className={`btn ${selectedCategory === 'kids' ? 'active' : ''}`} onClick={() => handleCategoryChange('kids')}>Kids</button>
            <button type="button" className={`btn ${selectedCategory === 'adult' ? 'active' : ''}`} onClick={() => handleCategoryChange('adult')}>Adults</button>
            <button type="button" className={`btn ${selectedCategory === 'teens' ? 'active' : ''}`} onClick={() => handleCategoryChange('teens')}>Teens</button>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container" id="products">
        <div className="row">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center">No products found.</div>
          ) : (
            filteredProducts.map((product) => (
              <div className="col-12 col-lg-3 col-md-4" key={product._id}>
                <div className="card">
                  <Link to={`/store/productview/${product._id}`}>
                    <img src={product.image1} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <Link to={`/store/productview/${product._id}`} className="btn btn-primary">
                        <ShoppingBag className="bi bi-cart-plus" />
                      </Link>
                      <h4 id="price">₹{Math.min(...product.bottleOptions.map(opt => opt.price))}</h4>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container-fluid">
        <div className="row" id="bg-7">
          <div className="col">
            <h1>Sign Up For Newsletters</h1>
            <p>Get email updates about your latest shop and <span>Special Offers.</span></p>
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
  );
};

export default StoreOF;
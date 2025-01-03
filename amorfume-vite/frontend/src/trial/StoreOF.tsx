import Footer from "../components/Footer";
import Header from "../components/Header";
import "./storeof.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
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
  price?: number;
  bottleType?: string;
}

const StoreOF = () => {
  const { addToCart } = useCart();
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
        <div className="row g-4">
          {loading ? (
            <div className="text-center">Loading...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center">No products found.</div>
          ) : (
            filteredProducts.map((product) => (
              <div className="col-12 col-lg-3 col-md-4" key={product._id}>
                <div className="product-card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
                  <Link to={`/store/productview/${product._id}`} className="text-decoration-none">
                    <div className="position-relative">
                      <img 
                        src={product.image1} 
                        className="card-img-top product-image" 
                        alt={product.name}
                        style={{ height: '300px', objectFit:'fill' }}
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
                      <div className="price-tag">
                        <span className="text-primary fs-5 fw-bold">
                          ₹{Math.min(...product.bottleOptions.map(opt => opt.price))}
                        </span>
                      </div>
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
import React, { useEffect, useState } from 'react';

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

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product._id}>
              {product.name} - ${product.price} <br />
              Volume: {product.volume}ml <br />
              Description: {product.description} <br />
              Category: {product.category} <br />
              <img src={product.image1} alt={`${product.name} image 1`} style={{ width: 100, height: 100 }} />
              <img src={product.image2} alt={`${product.name} image 2`} style={{ width: 100, height: 100 }} />
              <img src={product.image3} alt={`${product.name} image 3`} style={{ width: 100, height: 100 }} />
            </li>
          ))}
        </ul>
      ) : (
        <div>No products found.</div>
      )}
    </div>
  );
}

export default Products;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Product {
  whyParentsLoveIt: string;
}

const Features = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${url}/store/view-product/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, url]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="bg-gray-700 p-4 min-h-[600px] mt-10">
      <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z" clipRule="evenodd"></path>
          </svg>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Why Parents & Adults love it?</h2>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700">
          <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
            <div className="relative space-y-8 p-8">
              <img 
                src="https://www.svgrepo.com/show/164986/logo.svg" 
                loading="lazy" 
                width="200" 
                height="200"
                className="w-16 h-16 mx-auto my-1 rounded-full"
                alt="feature icon"
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary text-center">
                  Parents' Trust
                </h5>
                <p className="text-gray-300 text-center leading-relaxed">
                  {product.whyParentsLoveIt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
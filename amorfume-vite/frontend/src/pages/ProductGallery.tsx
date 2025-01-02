import React, { useState, useEffect } from "react";

interface Product {
  name: string;
  image1: string;
  images: string[];
}

interface ProductGalleryProps {
  product: Product;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string | undefined>(product?.image1);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const thumbnailsToShow = 4;

  useEffect(() => {
    if (product) {
      setMainImage(product.image1);
    }
  }, [product]);

  const handleNext = () => {
    if (currentStartIndex + thumbnailsToShow < product.images.length) {
      setCurrentStartIndex(currentStartIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(currentStartIndex - 1);
    }
  };

  if (!product || !product.images) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={mainImage ?? undefined}
          alt={product.name}
          className="w-full h-[500px] object-cover rounded-lg"
        />
        
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            onClick={handlePrev}
            disabled={currentStartIndex === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-4 overflow-hidden">
            {product.images
              .slice(currentStartIndex, currentStartIndex + thumbnailsToShow)
              .map((image: string, index: number) => (
                <img
                  key={index}
                  className={`h-20 w-20 object-cover rounded-md cursor-pointer transition-all 
                    ${mainImage === image ? 'ring-2 ring-indigo-500' : 'hover:opacity-80'}`}
                  src={image}
                  alt={`Thumbnail ${currentStartIndex + index + 1}`}
                  onClick={() => setMainImage(image)}
                />
              ))}
          </div>

          <button
            className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            onClick={handleNext}
            disabled={currentStartIndex + thumbnailsToShow >= product.images.length}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
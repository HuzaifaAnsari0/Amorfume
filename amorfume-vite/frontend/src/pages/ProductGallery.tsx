import React, { useState, useEffect } from "react";

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(product?.image1);
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
    <div className="img">
      <div className="img-box h-full max-lg:mx-auto">
        <img
          src={mainImage ?? undefined}
          alt={product.name}
          className="max-lg:mx-auto lg:ml-auto h-auto"
        />
        <div className="flex items-center space-x-3 mt-3">
          <button
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handlePrev}
            disabled={currentStartIndex === 0}
          >
            &lt;
          </button>
          <div className="flex space-x-7">
            {product.images
              .slice(currentStartIndex, currentStartIndex + thumbnailsToShow)
              .map((image, index) => (
                <img
                  key={index}
                  className="h-28 w-28 cursor-pointer"
                  src={image}
                  alt={`Thumbnail ${currentStartIndex + index + 1}`}
                  onClick={() => setMainImage(image)}
                />
              ))}
          </div>
          <button
            className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={handleNext}
            disabled={
              currentStartIndex + thumbnailsToShow >= product.images.length
            }
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
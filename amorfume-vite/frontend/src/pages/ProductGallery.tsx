import React, { useState, useEffect } from "react";

interface Product {
  name: string;
  image1: string;
  images: string[];
}

interface ProductGalleryProps {
  product?: Product;
}


const ProductGallery: React.FC<ProductGalleryProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string | undefined>(product?.image1);

  useEffect(() => {
    if (product) {
      setMainImage(product.image1);
    }
  }, [product]);

  if (!product || !product.images) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <div className="relative">
        <img
          src={mainImage ?? undefined}
          alt={product.name}
          className="w-full h-auto object-contain rounded-lg"
        />
        <div className="mt-4">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto py-2 px-1 scroll-px-2 scrollbar-hide touch-pan-x">
            {product.images.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`h-20 w-20 sm:h-20 sm:w-20 object-cover rounded-md cursor-pointer transition-all 
                  ${mainImage === image ? 'ring-2 ring-indigo-500' : 'hover:opacity-80'}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

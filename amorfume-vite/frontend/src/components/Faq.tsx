import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import FaqImage from "../assets/images/FaqImage.webp";

interface Product {
  fragranceNotes: {
    olfactiveFamily: string;
    top: string;
    heart: string;
    base: string;
  };
  applicationTips: string[];
  feelings: string[];
  legalInfo: {
    ingredients: string;
    isolates: string[];
  };
  occasions: string[];
  behindThePerfume: string;
  shoppingAndReturn: string[];
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const faqItems = [
    {
      title: "Fragrance Notes",
      content: `Olfactive Family: ${product.fragranceNotes.olfactiveFamily}
                Top Notes: ${product.fragranceNotes.top}
                Heart Notes: ${product.fragranceNotes.heart}
                Base Notes: ${product.fragranceNotes.base}`,
    },
    {
      title: "Application Tips",
      content: product.applicationTips.join("\n"),
    },
    {
      title: "Feelings",
      content: product.feelings.join(", "),
    },
    {
      title: "Legal Info (Ingredients and Isolates)",
      content: `Ingredients: ${product.legalInfo.ingredients}\n
                Isolates: ${product.legalInfo.isolates.join(", ")}`,
    },
    {
      title: "Occasions",
      content: product.occasions.join(", "),
    },
    {
      title: "Behind the Perfume",
      content: product.behindThePerfume,
    },
    {
      title: "Shopping and Return",
      content: `Free 2ml Try-Me included with your purchase so you can experience the fragrance before committing.
      Easy returns if you’re not completely satisfied—no questions asked.`,
    },
  ];

  return (
    <div className="bg-slate-50">
      <MaxWidthWrapper>
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
              <div className="w-full lg:w-1/2">
                <img
                  src={FaqImage}
                  alt="FAQ tailwind section"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="lg:max-w-xl">
                  <div className="mb-6 lg:mb-16">
                    <h6 className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left">
                      Legal Info (Ingredients and Allergens):
                    </h6>
                    <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                      Looking for answers?
                    </h2>
                  </div>
                  <div className="accordion-group">
                    {faqItems.map((item, index) => (
                      <div
                        key={index}
                        className={`accordion py-4 border-b border-solid border-gray-200 ${
                          activeIndex === index ? "active" : ""
                        }`}
                      >
                        <button
                          className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                          onClick={() => toggleAccordion(index)}
                        >
                          <h5>{item.title}</h5>
                          <svg
                            className={`transition-transform duration-500 ${
                              activeIndex === index ? "rotate-180" : ""
                            }`}
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <div
                          className={`accordion-content transition-all duration-500 overflow-hidden ${
                            activeIndex === index ? "max-h-screen" : "max-h-0"
                          }`}
                        >
                          <p className="text-base text-gray-500 font-normal mt-2">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Faq;

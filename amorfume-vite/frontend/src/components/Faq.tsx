import { useState } from "react";
import MaxWidthWrapper from "../@/components/MaxWidthWrapper";
import FaqImage from "../assets/images/FaqImage.webp";

const Faq = () => {
  // State to track the currently open accordion
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
                    {[
                      {
                        title: "Ingredients",
                        content:
                          "Aqua (De-ionized Water), Organic Vegan Glycerin, Parfum (Fragrance Oil).",
                      },
                      {
                        title: "Isolates",
                        content:
                          "Terpineol (🍃), Limonene (🍋), Linalyl Acetate (🌸), Damascone (🌹), and more...",
                      },
                      {
                        title: "Occasions",
                        content:
                          "Perfect for daily wear. Ideal for spring events, outdoor activities, or casual gatherings.",
                      },
                      {
                        title: "Behind the Perfume",
                        content:
                          "Spring Party 11 blends the effervescent freshness of grapefruit, raspberry, and more...",
                      },
                    ].map((item, index) => (
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

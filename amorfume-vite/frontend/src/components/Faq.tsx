import MaxWidthWrapper from "../@/components/MaxWidthWrapper"

const Faq = () => {
    return (
        <div className="bg-slate-50">
            <MaxWidthWrapper>
            <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full"
        >
          <div className="w-full lg:w-1/2">
            <img
              src="https://pagedone.io/asset/uploads/1696230182.png"
              alt="FAQ tailwind section"
              className="w-full rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                <h6
                  className="text-lg text-center font-medium text-indigo-600 mb-2 lg:text-left"
                >
                  Legal Info (Ingredients and Allergens):
                </h6>
                <h2
                  className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left"
                >
                  Looking for answers?
                </h2>
              </div>
              <div className="accordion-group" data-accordion="default-accordion">
                <div
                  className="accordion pb-8 border-b border-solid border-gray-200 active"
                  id="basic-heading-one-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium always-open"
                    aria-controls="basic-collapse-one-with-arrow-always-open"
                  >
                    <h5 >Ingredients: </h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-one-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden pr-4 active"
                    // style="max-height: 100px;"
                    aria-labelledby="basic-heading-one-with-arrow-always-open"
                  >
                    <p className="text-base font-normal text-gray-600 ">
                    Aqua (De-ionized Water), Organic Vegan Glycerin, Parfum (Fragrance Oil).
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 border-b border-solid border-gray-200 "
                  id="basic-heading-two-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium"
                    aria-controls="basic-collapse-two-with-arrow-always-open"
                  >
                    <h5>Isolates:</h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-two-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-two-with-arrow-always-open"
                    
                  >
                    <p className="text-base text-gray-500 font-normal">
                    Terpineol (🍃), Limonene (🍋), Linalyl Acetate (🌸), Damascone (🌹), Damascone Delta (🌹), Methyl Ionone (🌿), Vanillin (🍦), DMBCA (🍬), Geranyl Acetate (🌼), Benzyl Salicylate (🌹), Hydroxycitronellal (🍊), Hexyl Cinnamic Aldehyde (🌶️), Galaxolide Pure (🧴), Linalool (🌸), Citronellol (🌿).

                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 border-b border-solid border-gray-200"
                  id="basic-heading-three-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-three-with-arrow-always-open"
                  >
                    <h5>Occasions:</h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-three-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-three-with-arrow-always-open"
                  >
                    <p className="text-base text-gray-500 font-normal">
                    Perfect for daily wear.
• Ideal for spring events, outdoor activities, or casual gatherings.
• A wonderful gift for anyone who loves light, floral, and fresh fragrances.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 "
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5>Behind the Perfume:</h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base text-gray-500 font-normal">
                    Spring Party 11 blends the effervescent freshness of grapefruit, raspberry, and green notes with the delicate florals of muguet and white flowers, grounded by warm, woody amber and musk. Formulated with AI precision, this fragrance is safe, skin-friendly, and perfect for both kids and adults, bringing the uplifting energy of spring wherever you go.
                    </p>
                  </div>
                </div>
                <div
                  className="accordion py-4 "
                  id="basic-heading-four-with-arrow-always-open"
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                    aria-controls="basic-collapse-four-with-arrow-always-open"
                  >
                    <h5>Shopping & Return</h5>
                    <svg
                      className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="basic-collapse-four-with-arrow-always-open"
                    className="accordion-content w-full px-0 overflow-hidden pr-4"
                    aria-labelledby="basic-heading-four-with-arrow-always-open"
                  >
                    <p className="text-base text-gray-500 font-normal">
                    Free 2ml Try-Me included with your purchase so you can experience the fragrance before committing.
                    Easy returns if you’re not completely satisfied—no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
                                            



{/* <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h6 className="text-lg text-indigo-600 font-medium text-center mb-2">
            FAQs
          </h6>
          <h2
            className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]"
          >
            Frequently asked questions
          </h2>
        </div>

        <div className="accordion-group" data-accordion="default-accordion">
          <div
            className="accordion py-4 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50 active"
            id="basic-heading-one-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
              aria-controls="basic-collapse-one-with-arrow"
            >
              <h5>How do I update my billing information?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-one-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-one-with-arrow"
              style={{maxHeight: 250}}
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion py-4 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
            id="basic-heading-two-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
              aria-controls="basic-collapse-two-with-arrow"
            >
              <h5>How can I contact customer support?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-two-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-two-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion py-4 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I update my profile information?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
          <div
            className="accordion py-4 px-6 transition-all duration-500 rounded-2xl hover:bg-indigo-50 accordion-active:bg-indigo-50"
            id="basic-heading-three-with-arrow"
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600 accordion-active:text-indigo-600"
              aria-controls="basic-collapse-three-with-arrow"
            >
              <h5>How do I find my purchase history?</h5>
              <svg
                className="text-gray-500 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <div
              id="basic-collapse-three-with-arrow"
              className="accordion-content w-full px-0 overflow-hidden"
              aria-labelledby="basic-heading-three-with-arrow"
            >
              <p className="text-base text-gray-900 leading-6">
                To contact customer support, look for a 'Contact us' or 'Help'
                button or link on the website or platform. You may be able to
                email, call, or chat with customer support for assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}

            </MaxWidthWrapper>
        </div>
    )
}

export default Faq
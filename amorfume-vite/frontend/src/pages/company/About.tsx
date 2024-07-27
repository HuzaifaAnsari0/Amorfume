import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Random from "../../assets/images/random.png"
const About = () => {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="mx-auto max-w-5xl lg:text-center flex flex-col justify-center items-center">
          <h2 className="text-base font-semibold leading-7 text-blue-100 bg-blue-600 px-3 rounded-lg uppercase mb-4 lg:mb-8">
            About Us
          </h2>
          <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"> Amorfume:</span>
          </h1>
          <p className="mt-6 text-md text-gray-600 max-w-lg text-center">
            The New Standard in Modern Fragrance
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                Our Vision
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We believe fragrance is more than just a pleasant scent—it's a personal expression of identity and emotion. Our mission is to create bespoke fragrances that resonate with your unique emotional profile.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"></path>
                  </svg>
                </div>
                The Amorfume Difference: Amor-AI Technology
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Our proprietary Amor-AI technology analyzes your emotional landscape to create a fragrance that's uniquely you. It goes beyond preferences, delving into your emotional responses and personality to craft a scent that speaks to your essence.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-gray-50 py-8 md:py-16">
    <h3 className="flex justify-center items-center font-medium text-center text-2xl py-4">
        Our Gen Z Visionary Founders
    </h3>
        <div className="w-11/12 lg:w-10/12 xl:w-1200 m-auto space-y-16">
          <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center">
            <div className="w-full md:w-1/4 space-y-4">
              <p>
              <span className="font-semibold"> Tushar AA (Tushi)</span> - Financial Professional and Tech Innovator
              Co-founder and financial expert, Tushi's innovative approach led to Amor-AI's development. He was also a key improviser in TAIS, a leading technical analysis tool              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
              <img src={Random} className="w-full md:w-80" alt="Facial Recognition" />
            </div>
          </div>
          <div className="space-y-8 md:space-y-0 text-center md:text-left md:space-x-16 md:justify-center md:flex md:items-center md:flex-row-reverse">
            <div className="w-full md:w-1/4 space-y-4">
              {/* <h3 className="font-medium text-2xl">Multi-Device Synchronization</h3> */}
              <p>
              <span className="font-semibold"> Sanil SM (Sunny) </span> - The Creative Maestro
Based in Melbourne, Australia, Sunny Co-founder is a seasoned expert in advertising and digital marketing. His extensive creative knowledge and strategic mind are instrumental in shaping Amorfume's global presence, creating a brand that speaks to the heart and soul of our customers.
              </p>
            </div>
            <div className="mx-auto w-1/2 md:w-1/3">
              <img src={Random}className="w-full md:w-80" alt="Facial Recognition" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <section id="features" className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30">
          <div className="relative mx-auto max-w-5xl text-center">
            <span className="text-gray-400 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
              Why choose us
            </span>
            <h2 className="block w-full bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
              Build a Website That Your Customers Love
            </h2>
            <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
              Our templates allow for maximum customization. No technical skills required – our intuitive design tools let you get the job done easily.
            </p>
          </div>

          <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-color-swatch" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-gray-400">Customizable</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Tailor your landing page's look and feel, from the color scheme to the font size, to the design of the page.
              </p>
            </div>

            <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
              <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bolt" width="24"
                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
                </svg>
            </div>
            <h3 className="mt-6 text-gray-400">Fast Performance</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                We build our templates for speed in mind, for super-fast load times so your customers never waver.
            </p>
        </div>

        <div className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow">
            <div className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools" width="24"
                    height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4a2 2 0 0 0 2 2h12"></path>
                    <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                    <polyline points="12 8 7 3 3 7 8 12"></polyline>
                    <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                    <polyline points="16 12 21 17 17 21 12 16"></polyline>
                    <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
                </svg>
            </div>
            <h3 className="mt-6 text-gray-400">Fully Featured</h3>
            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.
            </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-0 h-1/3 w-full border-b"
          style={{ background: 'linear-gradient(to right top, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}>
      </div>
      <div className="absolute bottom-0 right-0 z-0 h-1/3 w-full"
          style={{ background: 'linear-gradient(to left top, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)', borderColor: 'rgba(92, 79, 240, 0.2)' }}>
      </div>
    </section>
  </div>

  <Footer />
</>
);
};

export default About;

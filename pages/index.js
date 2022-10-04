import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio Aji Muhammad Sofwan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="hero" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                Hello semua 👋, saya
                <span className="block text-bold text-dark text-4xl mt-1 mb-2 lg:text-5xl">
                  Aji Muhammad Sofwan
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
                Back-End Develover &{" "}
                <span className="text-dark">Front-End Developer</span>
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed">
                Belajar web programing itu sangat{" "}
                <span className="text-dark font-bold">membagongkan!</span>
              </p>
              <a
                href="#contact"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 transition duration-300 ease-in-out"
              >
                Hubungi Saya
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-0 lg:right-0">
                <img
                  className="max-w-full mx-auto"
                  src="/assets/img/aji.png"
                  alt="Aji"
                />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125 md:bottom-10">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#14b8a6"
                      d="M60.6,-33C70.6,-17.6,65.5,8.7,52.9,25.9C40.3,43.1,20.1,51.3,2.4,49.9C-15.4,48.5,-30.8,37.6,-43.9,20.1C-57,2.6,-67.8,-21.4,-60.1,-35.5C-52.4,-49.6,-26.2,-53.8,-0.5,-53.5C25.3,-53.2,50.5,-48.5,60.6,-33Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Mari belajar web programing
              </h2>
              <p className="font-medium font-base text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                explicabo recusandae eaque eveniet minima laborum placeat.
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 lg:pt-10">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl">
                Mari berteman
              </h3>
              <p className="font-medium font-base text-secondary mb-6 lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate enim dicta magnam eaque, eum blanditiis odit.
              </p>
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/msofwanaji"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/ajimsofwan/"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/ajimsofwan/"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@ajimsofwan"
                  target="_blank"
                  className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>TikTok</title>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto text-center mb-16">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 md:text-4xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum ut illo commodi, quasi dolores veniam facilis sequi
                enim voluptate quibusdam?
              </p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden mb-3">
                <img
                  src="assets/img/portfolio/1.webp"
                  alt="portfolio 1"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Boardject UI
              </h3>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                aliquam?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="assets/img/portfolio/2.webp"
                  alt="portfolio 1"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Taskhero UI
              </h3>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                aliquam?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="assets/img/portfolio/3.webp"
                  alt="portfolio 1"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Sprint UI
              </h3>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                aliquam?
              </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img
                  src="assets/img/portfolio/4.webp"
                  alt="portfolio 1"
                  width="w-full"
                />
              </div>
              <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                Krejo UI
              </h3>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
                aliquam?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="clients" className="pt-36 pb-32 bg-slate-800">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto text-center mb-16">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Clients
              </h4>
              <h2 className="font-bold text-white text-3xl mb-4 md:text-4xl">
                Yang Pernah Bekerjasama
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                totam nulla libero.
              </p>
            </div>
          </div>
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              <a
                href=""
                target="_blank"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 trasition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="assets/img/clients/google.svg" alt="Google" />
              </a>
              <a
                href=""
                target="_blank"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 trasition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="assets/img/clients/gojek.svg" alt="Gojek" />
              </a>
              <a
                href=""
                target="_blank"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 trasition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="assets/img/clients/traveloka.svg" alt="Traveloka" />
              </a>
              <a
                href=""
                target="_blank"
                className="max-w-[120px] mx-4 py-4 grayscale opacity-60 trasition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
              >
                <img src="assets/img/clients/paypal.svg" alt="PayPal" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="pt-36 pb-32 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto text-center mb-16">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Blog
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 md:text-4xl">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid doloribus et laudantium!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?programing"
                  alt="programing"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Tips Belajar Programing
                    </a>
                  </h3>
                  <p className="font-medium text-md text-secondary mb-4 lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, ducimus!
                  </p>
                  <a
                    href="#"
                    className="font-semibold text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Slengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?mechanical+keyboard"
                  alt="programing"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Jenis Keyboard Mechanical
                    </a>
                  </h3>
                  <p className="font-medium text-md text-secondary mb-4 lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia dolorum odit facere?
                  </p>
                  <a
                    href="#"
                    className="font-semibold text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Slengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <img
                  src="https://source.unsplash.com/360x200?coffee"
                  alt="programing"
                  className="w-full"
                />
                <div className="py-8 px-6">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"
                    >
                      Menikmati Secangkir Coffee
                    </a>
                  </h3>
                  <p className="font-medium text-md text-secondary mb-4 lg:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatum dicta possimus!
                  </p>
                  <a
                    href="#"
                    className="font-semibold text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80"
                  >
                    Baca Slengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto text-center mb-16">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Contact
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 md:text-4xl">
                Hubungi Saya
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, excepturi!
              </p>
            </div>
          </div>
          <form action="">
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="name"
                  className="text-base text-primary font-bold mb-8"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="email"
                  className="text-base text-primary font-bold mb-8"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label
                  htmlFor="message"
                  className="text-base text-primary font-bold mb-8"
                >
                  Pesan
                </label>
                <textarea
                  type="text"
                  id="message"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                ></textarea>
              </div>
              <div className="w-full px-4 mb-8">
                <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 ">
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

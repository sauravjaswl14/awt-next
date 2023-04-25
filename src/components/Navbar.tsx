import React from "react";

function Navbar(): JSX.Element {
  return (
    <>
      <section
        id="navbar"
        className="sticky top-0 border-b shadow-sm bg-white z-30"
      >
        <nav className="relative">
          {/* <!-- Flex Container --> */}
          <div className="flex justify-between px-4 h-[110px] items-center lg:justify-around md:h-[140px] lg:mx-4 xl:max-w-[1920px] xl:mx-auto">
            {/* <!-- Logo --> */}
            <div className="items-left">
              <img
                src="https://www.accessworld.net/img/logos/primary-gradient-horizontal-lockup.png"
                alt="awt-logo"
                className="w-32 md:w-[248px] md:h-87"
              />
            </div>
            {/* <!-- Menu --> */}
            <div className="hidden lg:inline">
              {/* <!-- first dropdown menu --> */}
              <div className="group flex space-x-4 text-sm">
                <div className="flex space-x-4 group-hover:cursor-pointer">
                  <button className="text-[#4d4d4d] font-bold">Services</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="flex space-x-4 group-hover:cursor-pointer">
                  <button className="text-[#4d4d4d] font-bold">
                    Solutions
                  </button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="flex space-x-4 group-hover:cursor-pointer">
                  <button className="text-[#4d4d4d] font-bold">About</button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* <!-- Buttons --> */}

            {/* <!-- Flex-container --> */}
            <div className="hidden lg:inline-flex space-x-4">
              <a
                href="#"
                className="hidden font-bold md:block text-[#0000cc] w-[220px] h-[44px] px-[60px] py-[10px] border-[2px] border-[#0000cc] rounded-md hover:border-opacity-40 hover:scale-95 duration-150"
              >
                Be A Partner
              </a>
              <a
                href="#"
                className="hidden font-bold md:block text-[#4D4D4D] w-[220px] h-[44px] px-20 py-[10px] border-[2px] border-[#4D4D4D] rounded-md hover:border-black hover:text-[#0000cc] hover:scale-95 duration-150"
              >
                Login
              </a>
            </div>

            {/* <!-- Right search and social --> */}
            <div className="">
              {/* <!-- Flex-container --> */}
              <div className="flex space-x-4 md:space-x-12">
                {/* <!-- Search --> */}
                <div className="hidden lg:inline-flex md:mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>

                {/* <!-- flex-col container --> */}
                <div className="group flex flex-col">
                  {/* <!-- Dropdown --> */}
                  <div className="hidden w-[122px] h-[40px] border-2 border-black rounded-md text-center items-center justify-center lg:inline-flex group-hover:cursor-pointer">
                    <select
                      name=""
                      id="currency"
                      className="group-hover:cursor-pointer focus:outline-none"
                    >
                      <option value="currency">NPR</option>
                      <option value="currency">INR</option>
                      <option value="currency">USD</option>
                    </select>
                  </div>

                  {/* <!-- social --> */}
                  <div className="absolute top-0 right-4 mt-3 flex space-x-3 items-center lg:relative lg:ml-4">
                    {/* <!-- Medium --> */}
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="w-5 h-5 md:w-[24px] md:h-[24px] rounded-md hover:scale-110"
                      >
                        <path d="M24 24h-24v-24h24v24zm-4.03-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z" />
                      </svg>
                    </a>
                    {/* <!-- Facebook --> */}
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 md:w-[24px] md:h-[24px] rounded-md hover:scale-110"
                      >
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                    {/* <!-- instagram --> */}
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 md:w-[24px] md:h-[24px] rounded-md hover:scale-110"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    {/* <!-- Linkedin --> */}
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5 md:w-[24px] md:h-[24px] rounded-md hover:scale-110"
                      >
                        <path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Hamburger Icon --> */}

              <button
                id="menu-btn"
                className="block mt-10 hamburger lg:hidden focus:outline-none"
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </div>

          <div className="lg:hidden">
            <div
              id="menu"
              className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-[#f4f8f9] sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            >
              <a
                href="#"
                className="block w-full text-center py-3 px-5 duration-150 transition-all hover:bg-opacity-40 hover:bg-white hover:text-[#0000cc]"
              >
                Services
              </a>
              <a
                href="#"
                className="block w-full text-center py-3 px-5 duration-150 transition-all hover:bg-opacity-40 hover:bg-white hover:text-[#0000cc]"
              >
                Solutions
              </a>
              <a
                href="#"
                className="block w-full text-center py-3 px-5 duration-150 transition-all hover:bg-opacity-40 hover:bg-white hover:text-[#0000cc]"
              >
                About
              </a>
              <a
                href="#"
                className="block w-full text-center py-3 px-5 duration-150 transition-all hover:bg-opacity-40 hover:bg-white hover:text-[#0000cc]"
              >
                Be A Partner
              </a>
              <a
                href="#"
                className="block w-full text-center py-3 px-5 duration-150 transition hover:bg-opacity-40 hover:bg-white hover:text-[#0000cc]"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
export default Navbar;

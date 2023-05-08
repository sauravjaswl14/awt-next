import React, { useState, useRef, useEffect } from "react";

import ServiceDetail from "./ServiceDetail";
import SolutionsDetail from "./SolutionsDetail";

function Navbar(): JSX.Element {
  interface navObj {
    services: boolean;
    solutions: boolean;
    about: boolean;
  }

  let [toggle, setToggle] = useState<navObj>({
    services: false,
    solutions: false,
    about: false,
  });

  let [activeNav, setActiveNav] = useState<string>("");

  function handleServices() {
    // document.getElementById("services_arrow")!.classList.toggle("rotate-180");
    setToggle((prev) => {
      return { ...prev, services: !prev.services, solutions: false };
    });
  }

  function handleSolutions() {
    // document.getElementById("solution_arrow")!.classList.toggle("rotate-180");
    setToggle((prev) => {
      return { ...prev, services: false, solutions: !prev.solutions };
    });
  }

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
                <button
                  onClick={handleServices}
                  className="text-[#4d4d4d] font-bold focus:text-[#0000cc] flex space-x-8 group-hover:cursor-pointer "
                >
                  Services
                </button>
                <img
                  src="../img/new/arrow-down.png"
                  className="w-5 h-5"
                  alt=""
                />

                <button
                  onClick={handleSolutions}
                  className="text-[#4d4d4d] font-bold focus:text-[#0000cc] flex space-x-8 group-hover:cursor-pointer"
                >
                  Solutions
                </button>
                <img
                  src="../img/new/arrow-down.png"
                  className="w-5 h-5"
                  alt=""
                />
                <div className="flex space-x-4 group-hover:cursor-pointer">
                  <button className="text-[#4d4d4d] font-bold focus:text-[#0000cc]">
                    About
                  </button>
                  <img
                    src="../img/new/arrow-down.png"
                    className="w-5 h-5"
                    alt=""
                  />
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
                  <img src="../img/new/search.png" className="w-8 h-8" alt="" />
                </div>
                <div className="hidden lg:inline-flex md:mt-4">
                  <img
                    src="../img/new/shopping-cart.png"
                    className="w-8 h-8"
                    alt=""
                  />
                </div>

                {/* <!-- flex-col container --> */}
                <div className="group flex flex-col">
                  {/* <!-- Dropdown --> */}
                  <div className="hidden w-[122px] h-[40px] border-2 border-black rounded-md text-center items-center justify-center lg:flex lg:space-x-8 group-hover:cursor-pointer">
                    <select
                      name=""
                      id="currency"
                      className="space-x-8 group-hover:cursor-pointer focus:outline-none px-2 appearance-none"
                    >
                      <option value="currency">NPR</option>
                      <option value="currency">INR</option>
                      <option value="currency">USD</option>
                    </select>
                    <div className="">
                      <img src="../img/new/Polygon 5.png" alt="" />
                    </div>
                  </div>

                  {/* <!-- social --> */}
                  <div className="absolute top-0 right-4 mt-3 flex space-x-3 items-center lg:relative lg:ml-4">
                    {/* <!-- Medium --> */}
                    <a href="#">
                      <img
                        src="../img/new/medium.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </a>
                    {/* <!-- Facebook --> */}
                    <a href="#">
                      <img
                        src="../img/new/facebook.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </a>
                    {/* <!-- instagram --> */}
                    <a href="#">
                      <img
                        src="../img/new/instagram.png"
                        className="w-5 h-5"
                        alt=""
                      />
                    </a>
                    {/* <!-- Linkedin --> */}
                    <a href="#">
                      <img
                        src="../img/new/linkedin.png"
                        className="w-5 h-5"
                        alt=""
                      />
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
      {/* <ServiceDetail /> */}

      {toggle.services && <ServiceDetail />}
      {toggle.solutions && <SolutionsDetail />}
    </>
  );
}
export default Navbar;

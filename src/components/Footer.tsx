function Footer() {
  return (
    <footer>
      <div className="max-w-screen bg-[#292929] text-white p-6 lg:p-20 lg:pb-4 md:h-[400px]">
        {/* <!-- Flex container --> */}
        <div className="flex justify-between space-x-16">
          {/* <!-- Logo and social --> */}
          <div className="flex flex-col space-y-2 md:space-y-16">
            {/* <!-- logo --> */}
            <div className="max-w-sm">
              <img src="../img/awt-acronym-logo.svg" alt="" />
            </div>
            {/* <!-- social flex --> */}
            <div className="flex max-w-sm space-x-2">
              <div>
                <img src="../img/icon-medium.svg" alt="" />
              </div>
              <div>
                <img src="../img/icon-facebook-square.svg" alt="" />
              </div>
              <div>
                <img src="../img/icon-instagram.svg" alt="" />
              </div>
              <div>
                <img src="../img/icon-linkedin.svg" alt="" />
              </div>
            </div>
          </div>

          {/* <!-- About,services,solutions etc. --> */}
          <div className="flex space-x-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white font-medium">
                About
              </a>
              <a href="#" className="text-white font-medium">
                Services
              </a>
              <a href="#" className="text-white font-medium">
                Solutions
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="#" className="font-medium">
                Privacy Policy
              </a>
              <a href="#" className="font-medium">
                Terms & Conditions
              </a>
              <a href="#" className="font-medium">
                Sitemap
              </a>
            </div>
            <div className="hidden md:flex md:flex-col md:space-y-6">
              <a
                href="#"
                className="flex justify-center items-center w-[260px] h-[44px] py-3 px-5 border-2 border-white rounded-md hover:border-opacity-40 hover:scale-95 duration-150"
              >
                Login
              </a>
              <div className="flex items-center border-2 justify-between w-[398px] h-[44px] bg-white rounded-xl active:border-green-500">
                <input
                  type="text"
                  className="border-none placeholder:text-gray-400 pl-2 focus:outline-none text-black"
                  placeholder="Enter your search"
                />
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="cursor-pointer pr-4 w-10 h-10 font-extrabold text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Flex-container  --> */}
        <div className="mt-6 flex flex-col justify-center space-y-2 md:justify-start md:flex-row md:space-y-0 md:space-x-16 lg:mt-16">
          <p className="text-xs md:text-sm">
            &copy; Copyright 2012-2023| AccessWorld Tech P.(L)
          </p>
          <p className="text-xs md:text-sm">
            Patan Dhoka, 5F BhatBhateni Super Market, Krishna Galli, Lalitpur,
            Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

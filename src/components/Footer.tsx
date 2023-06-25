import Link from 'next/link'

function Footer() {
  return (
    <footer>
      <div className='max-w-screen bg-[#292929] text-white p-8 lg:px-20 lg:pb-4 md:h-[400px]'>
        {/* <!-- Flex container --> */}
        <div className='flex space-x-32'>
          {/* <!-- Logo and social --> */}
          <div className='flex flex-col space-y-2 md:space-y-16'>
            {/* <!-- logo --> */}
            <div className='max-w-sm'>
              <img src='../img/new/awt-acronym-logo.png' alt='' />
            </div>
            {/* <!-- social flex --> */}
            <div className='flex max-w-sm space-x-4'>
              <img src='../img/new/icon-medium.png' alt='' />
              <img src='../img/new/icon-facebook-square.png' alt='' />
              <img src='../img/new/icon-instagram.png' alt='' />
              <img src='../img/new/icon-linkedin.png' alt='' />
            </div>
          </div>

          {/* <!-- About,services,solutions etc. --> */}
          <div className='flex space-x-10 lg: lg:mt-10'>
            <div className='flex flex-col space-y-4'>
              <a href='#' className='text-white font-medium'>
                About
              </a>
              <a href='#' className='text-white font-medium'>
                Services
              </a>
              <a href='#' className='text-white font-medium'>
                Solutions
              </a>
            </div>
            <div className='flex flex-col space-y-4'>
              <a href='#' className='font-medium'>
                Privacy Policy
              </a>
              <a href='#' className='font-medium'>
                Terms & Conditions
              </a>
              <a href='#' className='font-medium'>
                Sitemap
              </a>
            </div>
            <div className='hidden md:flex md:flex-col md:space-y-6'>
              <Link
                href='/login'
                className='flex justify-center items-center w-[260px] h-[44px] py-3 px-5 border-2 border-white rounded-md hover:border-opacity-40 hover:scale-95 duration-150'
              >
                Login
              </Link>
              <div className='flex items-center border-2 justify-around w-[398px] h-[44px] bg-white rounded-xl active:border-green-500'>
                <input
                  type='text'
                  className='border-none placeholder:text-gray-400 pl-2 focus:outline-none text-black'
                  placeholder='Enter your search'
                />
                <button>
                  <img src='../img/new/search.png' className='w-5 h-5' alt='' />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Flex-container  --> */}
        <div className='mt-6 flex flex-col justify-center space-y-2 md:justify-start md:flex-row md:space-y-0 md:space-x-16 lg:mt-28'>
          <p className='text-xs md:text-sm'>
            &copy; Copyright 2012-2023| AccessWorld Tech P.(L)
          </p>
          <p className='text-xs md:text-sm'>
            Patan Dhoka, 5F BhatBhateni Super Market, Krishna Galli, Lalitpur,
            Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer

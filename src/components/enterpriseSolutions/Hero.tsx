import React from 'react'

function Hero() {
  return (
    <>
      <section
        id='hero'
        className='relative bg-gradient-to-r from-[#0000cc] to-[#00EEFF]'
      >
        <div className='lg:max-w-[1920px] lg:h-[450px]'>
          <div className='flex flex-col space-y-10 lg:items-left lg:ml-[70px]'>
            <h2 className='text-3xl font-extrabold text-white ml-5 mt-10 lg:mt-[68px] lg:text-5xl lg:mb-[60px] md:mb-[45px]'>
              Flexible and scalable cloud server <br />
              for your changing business needs
            </h2>
            <div className='ml-6'>
              <a
                href='#'
                className='font-bold text-white w-[220px] h-[44px] px-[64px] py-[11px] border-[1.5px] border-[#fff] rounded-md hover:bg-slate-400 duration-150'
              >
                Learn More
              </a>
            </div>
            {/* <!-- square dots --> */}
            <div className='flex p-4 space-x-2 items-center mt-10 ml-6 md:mt-[33px]'>
              <div className='w-[20px] h-[20px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

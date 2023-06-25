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
            <div className='p-6 lg:ml-6 lg:p-4'>
              <a
                href='#'
                className='font-bold text-white w-[220px] h-[44px] px-[64px] py-[11px] border-[1.5px] border-[#fff] rounded-md duration-150 hover:bg-slate-400 hover:text-[#0000cc]'
              >
                Learn More
              </a>
            </div>
          </div>
          <div className='hidden absolute bottom-0 left-0 right-0 bg-[#e5e5e5] lg:block'>
            <div className='flex justify-around text-[#4d4d4d] font-bold text-lg'>
              <a href='#' className='py-4 px-32 bg-[#4d4d4d] text-white'>
                Overview
              </a>
              <a href='#whyawt' className='p-4'>
                Why AWT?
              </a>
              <a href='#benefits' className='p-4'>
                Benefits
              </a>
              <a href='#plansAndPricing' className='p-4'>
                Plans & Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

import React from 'react'

function Hero() {
  return (
    <>
      <section className='relative bg-gradient-to-r from-[#0000cc] to-[#00EEFF]'>
        <div className='lg:max-w-[1920px] lg:h-[450px]'>
          <div className='flex flex-col space-y-10 lg:items-left lg:ml-[70px]'>
            <h2 className='text-3xl font-extrabold leading-relaxed text-white ml-5 mt-10 max-w-2xl lg:mt-[68px] lg:text-5xl lg:mb-[60px] md:mb-[45px]'>
              Advance your business with real-time protection
            </h2>
            <div className='p-6'>
              <a
                href='#'
                className='font-bold text-white w-[220px] h-[44px] px-[64px] py-[11px] border-[1.5px] border-[#fff] rounded-md hover:bg-slate-400 duration-150'
              >
                Browse Plans
              </a>
            </div>
          </div>
          <div className='hidden absolute bottom-0 left-0 right-0 bg-[#e5e5e5] lg:block'>
            <div className='flex justify-around text-[#4d4d4d] font-bold text-lg'>
              <a href='#' className='py-4 px-32 bg-[#4d4d4d] text-white'>
                Overview
              </a>
              <a href='#' className='p-4'>
                Why AWT?
              </a>
              <a href='#' className='p-4'>
                Benefits
              </a>
              <a href='#' className='p-4'>
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

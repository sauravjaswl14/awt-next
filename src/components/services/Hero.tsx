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
            <div className='flex space-x-2 p-4 items-center my-10 ml-6 md:mt-[33px]'>
              <div className='w-[20px] h-[20px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
              <div className='w-[15px] h-[15px] bg-[#fff] duration-150 hover:scale-150 ease-in-out'></div>
            </div>
          </div>

          <div className='absolute bottom-0 right-0 left-0 max-w-full bg-[#000066] lg:block'>
            <div className='flex py-3 px-6 text-white font-bold space-x-6 whitespace-nowrap text-sm mx-20'>
              <a href='#'>Compute</a>
              <a href='#security'>Security</a>
              <a href='#iaas'>Infrastructure as a Service</a>
              <a href='#cloud'>Cloud Services</a>
              <a href='#management'>Management & Support</a>
              <a href='#saas'>Solutions as a Service</a>
              <a href='#dataProtection'>Data Protection</a>
              <a href='#managedSecurity'>Managed Security</a>
              <a href='#itEssentials'>IT Essentials</a>
              <a href='#storage'>Storage</a>
              <a href='#collaboration'>Collaboration</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

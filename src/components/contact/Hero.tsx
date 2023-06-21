import React from 'react'

function Hero() {
  return (
    <>
      <section className='relative bg-gradient-to-r from-[#0000cc] to-[#00EEFF]'>
        <div className='lg:max-w-[1920px] lg:h-[450px]'>
          <div className='flex flex-col space-y-10 lg:items-left lg:ml-[70px]'>
            <h2 className='max-w-3xl leading-relaxed text-3xl font-extrabold text-white ml-5 mt-10 lg:mt-[68px] lg:text-5xl lg:mb-[60px] md:mb-[45px]'>
              Power your business with secure cloud solutions. Contact us now
            </h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

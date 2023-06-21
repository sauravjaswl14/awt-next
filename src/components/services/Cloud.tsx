import React from 'react'

function Cloud() {
  return (
    <>
      <section>
        <div className='mx-10 my-20'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-24 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Cloud Services
          </div>
          <div className='grid grid-cols-2 gap-6 lg:mx-6 text-[#4d4d4d] lg:grid-cols-4 p-2 lg:p-6'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/hosting-services-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Hosting Services
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/web-hosting-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Web Hosting</p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/dns-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>DNS Service</p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/buy-domain-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Buy Domain</p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/c-panel-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Managed cPanel</p>
              </div>
              <p className='max-w-sm text-sm'>
                Reliable secure email service for your business with our
                advanced email gateway solution
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cloud

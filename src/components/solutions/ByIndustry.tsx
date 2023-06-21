import React from 'react'

function ByIndustry() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-20'>
          <h3 className='font-bold text-2xl pl-24 pb-2 text-[#4d4d4d]'>
            By Industry
          </h3>
          <hr className='h-1 bg-[#0000cc] mr-60 lg:mr-[1024px]' />
          <div className='grid grid-cols-2 gap-6 text-[#4d4d4d] lg:grid-cols-4 p-2 lg:p-4'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/enterprise-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Enterprise</p>
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
                <img src='./icons/healthcare-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Healthcare</p>
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
                <img src='./icons/education-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Education</p>
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
                <img src='./icons/financial-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Financial</p>
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
                <img src='./icons/manufacturing-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Manufacturing</p>
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

export default ByIndustry

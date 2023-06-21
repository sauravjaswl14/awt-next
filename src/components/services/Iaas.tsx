import React from 'react'

function Iaas() {
  return (
    <>
      <section>
        <div className='my-32 mx-10'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-10 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Infrastructure as a Service
          </div>
          <div className='flex space-x-8 lg:mx-10 text-[#4d4d4d]'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/co-location-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Co-Location</p>
              </div>
              <p className='max-w-sm text-sm'>
                Secured and controled hosting environment with redundant power
                and internet connection, technical support, and on-site
                maintanance
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/baremetal-server-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  BareMetal Server
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Lightning-fast performance featuring powerful processors and
                dedicated resources for unmatched speed and reliability
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

export default Iaas

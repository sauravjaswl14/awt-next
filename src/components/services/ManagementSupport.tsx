import React from 'react'

function ManagementSupport() {
  return (
    <>
      <section>
        <div className='ml-10 my-20'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-16 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Management & Support
          </div>
          <div className='grid grid-cols-2 gap-6 lg:mx-6 text-[#4d4d4d] lg:grid-cols-4 p-2 lg:p-6'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/ams-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Annual Maintenance Service
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Monitoring regular system updates security patches and
                performance optimization to keep the cloud environment running
                at optimal levels
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
                <img src='./icons/server-maintenance-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Server Maintenance
                </p>
              </div>
              <p className='max-w-2xl text-sm'>
                Entrust us with your server maintenance needs and let us take
                care of ensuring smooth and uninterrupted server operations for
                your organization
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-6 lg:space-y-8 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/setup-configuration-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Setup and Configuration
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Expertly set up and configure your cloud servers for optimal
                security
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-8 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex space-x-4 lg:space-x-2'>
                <img src='./icons/it-support-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>IT Support</p>
              </div>
              <p className='max-w-sm text-sm'>
                Optimize your business with AWT's expert IT Support service
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

export default ManagementSupport

import React from 'react'

function Security() {
  return (
    <>
      <section>
        <div className='mx-10 my-20'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-32 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Security
          </div>
          <div className='grid grid-cols-2 gap-6 text-[#4d4d4d] lg:grid-cols-4 p-2 lg:p-6 lg:mx-6'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/ssl-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>SSL</p>
              </div>
              <p className='max-w-sm text-sm'>
                A cutting-edge encryption which uses both public and symmetric
                keys to safeguard your web browser
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 p-2 border-b-2 border-black lg:space-y-6 lg:p-6'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/end-point-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base whitespace-nowrap'>
                  Endpoint Security
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Benefit from real-time monitoring and automatic updates for
                round-the-clock protection
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 p-2 border-b-2 border-black lg:space-y-6 lg:p-6'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/soar-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>SOAR</p>
              </div>
              <p className='max-w-sm text-sm'>
                Unlock the full potential of your SecOps team by streaming
                incident response and automation with Cloud SOAR
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 p-2 border-b-2 border-black lg:p-6 lg:space-y-6'>
              <div className='flex space-x-4 lg:space-x-2'>
                <img src='./icons/managed-soc-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Managed SOC Services
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Providing you an AI-based platform using machine learning for
                real-time threat detection and response
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
                <img src='./icons/email-gateway-icon.png' alt='' />
                <p className='font-bold text-sm'>Email Gateway as a Service</p>
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

export default Security

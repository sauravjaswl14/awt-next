import React from 'react'

function ManagedSecurity() {
  return (
    <>
      <section id='managedSecurity'>
        <div className='mx-10 my-20'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-20 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Managed Security
          </div>
          <div className='grid grid-cols-2 gap-6 lg:mx-6 text-[#4d4d4d] lg:grid-cols-4 p-4 lg:p-6'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/firewall-icon.png' className='' alt='' />

                <p className='font-bold text-sm lg:text-base'>
                  Firewall as a Service
                </p>
              </div>
              <p className='max-w-lg text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-spacing-6 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-7 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/siem-icon.png' className='' alt='' />

                <p className='font-bold text-sm lg:text-base'>
                  SIEM as a Service
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-spacing-6 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/soc-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  SOC as a Service
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
                <img src='./icons/csa-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Cyber Security Assessment
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
          </div>
        </div>
      </section>
    </>
  )
}

export default ManagedSecurity

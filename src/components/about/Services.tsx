import React from 'react'

function Services() {
  return (
    <>
      <section id='services' className='max-w-full'>
        <div className='relative mx-auto mt-9 max-w-screen'>
          <h3 className='font-bold text-3xl text-center text-[#4d4d4d] mb-12 md:text-left md:ml-20'>
            Services
          </h3>
          {/* <!-- Services list -1 --> */}
          <div className='grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-7'>
            {/* <!-- Item-1 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/compute-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Compute</p>
              </div>
            </div>

            {/* <!-- Item-2 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/security-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Security</p>
              </div>
            </div>

            {/* <!-- Item-3 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/iaas-icon.png' alt='' />
                </div>

                <p className='font-thin text-sm'>Infrastructure as a Service</p>
              </div>
            </div>

            {/* <!-- Item-4 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/cloud-services-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Cloud Services</p>
              </div>
            </div>

            {/* <!-- Item-5 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/management&support - icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Management & support</p>
              </div>
            </div>

            {/* <!-- Item-6 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/saas-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Solution as a service</p>
              </div>
            </div>
          </div>
          <hr className='hidden md:block md:mt-10' />
          <div className='mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-7'>
            {/* <!-- Item-7 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4'>
                <div>
                  {/* <!-- svg --> */}
                  <img
                    src='../img/new/data-protection-icon.png'
                    className='w-24 bg-white rounded full'
                    alt=''
                  />
                </div>
                <p className='font-thin text-sm'>Data Protection</p>
              </div>
            </div>
            {/* <!-- Item-8 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/managed-security-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Managed Security</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/it-essentials-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>IT Essentials</p>
              </div>
            </div>
            {/* <!-- Item-10 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4 items-center'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/storage-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Storage</p>
              </div>
            </div>
            {/* <!-- Item-9 --> */}
            <div className='flex items-center justify-center px-8 hover:cursor-pointer'>
              <div className='flex flex-col space-y-4'>
                <div>
                  {/* <!-- svg --> */}
                  <img src='../img/new/collaboration-icon.png' alt='' />
                </div>
                <p className='font-thin text-sm'>Collaboration</p>
              </div>
            </div>
          </div>

          <button className='ml-12 mt-10 mb-10 py-2 px-8 border-2 font-semibold border-[#4d4d4d] duration-200 rounded-lg hover:bg-[#0000cc] hover:text-white'>
            View All Services
          </button>
        </div>
        <hr className='hidden lg:block w-[760px] ml-10 bg-black h-[0.2em]' />
      </section>
    </>
  )
}

export default Services

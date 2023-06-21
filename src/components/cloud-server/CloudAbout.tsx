import React from 'react'

function CloudAbout() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <h3 className='text-3xl text-[#4d4d4d] font-bold inline-block border-b-2 border-[#4d4d4d]'>
            Why AWT?
          </h3>

          <div className='my-10 flex space-x-4'>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] w-[398px] h-[240px] p-4 lg:px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/scale-up-icon@2x.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-sm'>
                  <p className='text-sm text-center font-bold'>
                    Design and implement a cloud-based solution for a scalable
                    load
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] w-[398px] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/support-icon@2x.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold'>
                    Consistent monitoring and 24/7 support
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] w-[398px] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img src='./icons/team-icon@2x.png' className='w-20' alt='' />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm font-bold'>
                    A team of dedicated experts
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className='text-4xl text-[#0000cc] font-bold max-w-xl'>
            Robust cloud architecture that delivers the perfect balance of speed
            and reliability
          </p>

          <div className='mt-8'>
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-lg font-bold'>Upgraded performance</p>
                  <p>
                    With our cloud server you can access a larger pool of
                    resources and can be easily scaled to meet the demands of
                    applications and services
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-lg font-bold'>Authority</p>
                  <p>
                    AWT's cloud server offers the benefits of increased
                    authority and control over the hosting environment, allowing
                    for custom configurations and increased security measures
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-lg font-bold'>Security</p>
                  <p>
                    Our cloud server provides robust security with remote access
                    to services
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-lg font-bold'>Cost-effective</p>
                  <p>
                    For a cloud server, you only pay for the resources you use
                    and do not need to purchase and maintain the physical
                    hardware
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CloudAbout

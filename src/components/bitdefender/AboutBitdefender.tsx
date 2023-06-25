import React from 'react'

function AboutBitdefender() {
  return (
    <>
      <section id='whyawt'>
        <div className='m-10 lg:m-24'>
          <h3 className='text-3xl text-[#4d4d4d] font-bold inline-block border-b-2 border-[#4d4d4d]'>
            Why AWT?
          </h3>

          <div className='my-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/advanced-threat-protection-icon.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold'>
                    Advanced threat protection
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/multi-layer-icon.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold'>
                    Multi-layer security
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-1 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/cloud-infra-icon1.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm font-bold lg:whitespace-nowrap'>
                    Integration with Cloud infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/automated-reporting-icon.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold whitespace-nowrap'>
                    Automated compliance and reporting
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p
            id='benefits'
            className='text-4xl text-[#0000cc] font-extrabold max-w-xl'
          >
            Defend your IT infrastructure from the threats in cyberspace
          </p>

          <div className='mt-8'>
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-base lg:text-lg font-extrabold'>
                    Updated security information
                  </p>
                  <p>
                    By regularly synchronizing with the Bitdefender update
                    server, the BitDefender as a Service server makes sure the
                    recent security upgrades are constantly in place.
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-base lg:text-lg font-extrabold'>
                    Data storing
                  </p>
                  <p>
                    The BitDefender as a Service database by AWT stores vital
                    information about managed systems on your network, enabling
                    the server to maintain system security and ensure they are
                    up-to-date.
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-base lg:text-lg font-extrabold'>
                    Agent-server secure communication (ASSC)
                  </p>
                  <p>
                    Periodic ASSC exchanges take place between end systems and
                    the Server to ensure consistent and secure communication.
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

export default AboutBitdefender

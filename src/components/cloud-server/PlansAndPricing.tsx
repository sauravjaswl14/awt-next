import React from 'react'

function PlansAndPricing() {
  return (
    <>
      <section>
        <div id='plansAndPricing' className='m-10 lg:m-24'>
          <h4 className='font-bold text-2xl text-[#4d4d4d] inline-block border-b-2 border-[#4d4d4d]'>
            Plans and Pricing
          </h4>

          <p className='my-10 max-w-xl text-lg'>
            Are you a business in need of accommodating a large number of users
            or in a need to control the sudden spikes in traffic? Cloud Server
            is exactly what you need right now and for the future
          </p>

          <div className='grid grid-cols-1 gap-6 lg:grid-cols-4'>
            <div className='bg-[#e5e5e5] rounded-xl py-6'>
              <h4 className='uppercase text-2xl text-center font-bold mb-4 text-[#4d4d4d]'>
                small
              </h4>
              <hr className='h-1 bg-[#CCC]' />
              <div className='p-6'>
                <p className='text-center'>
                  Suitable for SMEs, freekancers and individuals
                </p>
                <div className='mt-10'>
                  <div className='flex flex-col space-y-6 p-4'>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon feather-cpu.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>VCPU</p>
                        <p className='font-bold text-sm'>1 CORE</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon feather-hard-drive.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>Storage</p>
                        <p className='font-bold text-sm'>40 Gigabyte</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-12'>
                      <div>
                        <img
                          src='./icons/Icon awesome-memory.png'
                          className=''
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>RAM</p>
                        <p className='font-bold text-sm'>02 Gigabyte</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon material-web-asset.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>Traffic</p>
                        <p className='font-bold text-sm'>300 Gigabyte/month</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 flex flex-col space-y-4 justify-center items-center'>
                    <p className='text-2xl text-[#0000cc] font-bold'>
                      NPR 1500
                    </p>
                    <button className='py-2 px-8 w-[200px] border-2 border-[#4d4d4d] rounded-lg bg-white duration-200 hover:bg-[#0000cc] hover:text-white transition ease-in-out'>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#e5e5e5] rounded-xl py-6'>
              <h4 className='uppercase text-2xl text-center font-bold mb-4 text-[#4d4d4d]'>
                medium
              </h4>
              <hr className='h-1 bg-[#CCC]' />
              <div className='p-6'>
                <p className='text-center'>
                  Suitable for SMEs, freekancers and individuals
                </p>
                <div className='mt-10'>
                  <div className='flex flex-col space-y-6 p-4'>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon feather-cpu.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>VCPU</p>
                        <p className='font-bold text-sm'>1 CORE</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon feather-hard-drive.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>Storage</p>
                        <p className='font-bold text-sm'>40 Gigabyte</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-12'>
                      <div>
                        <img
                          src='./icons/Icon awesome-memory.png'
                          className=''
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>RAM</p>
                        <p className='font-bold text-sm'>02 Gigabyte</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon material-web-asset.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>Traffic</p>
                        <p className='font-bold text-sm'>300 Gigabyte/month</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 flex flex-col space-y-4 justify-center items-center'>
                    <p className='text-2xl text-[#0000cc] font-bold'>
                      NPR 1500
                    </p>
                    <button className='py-2 px-8 w-[200px] border-2 border-[#4d4d4d] rounded-lg bg-white duration-200 hover:bg-[#0000cc] hover:text-white transition ease-in-out'>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-[#e5e5e5] rounded-xl py-6'>
              <h4 className='uppercase text-2xl text-center mb-4 font-bold text-[#4d4d4d]'>
                large
              </h4>
              <hr className='h-1 bg-[#CCC]' />
              <div className='p-6'>
                <p className='text-center'>
                  Suitable for SMEs, freekancers and individuals
                </p>
                <div className='mt-10'>
                  <div className='flex flex-col space-y-6 p-4'>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon feather-cpu.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>VCPU</p>
                        <p className='font-bold text-sm'>1 CORE</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon feather-hard-drive.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>Storage</p>
                        <p className='font-bold text-sm'>40 Gigabyte</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-12'>
                      <div>
                        <img
                          src='./icons/Icon awesome-memory.png'
                          className=''
                          alt=''
                        />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>RAM</p>
                        <p className='font-bold text-sm'>02 Gigabyte</p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-16'>
                      <div>
                        <img src='./icons/Icon material-web-asset.png' alt='' />
                      </div>
                      <div className='flex flex-col space-y-2'>
                        <p className='text-[#4d4d4d]'>Traffic</p>
                        <p className='font-bold text-sm'>300 Gigabyte/month</p>
                      </div>
                    </div>
                  </div>
                  <div className='mt-4 flex flex-col space-y-4 justify-center items-center'>
                    <p className='text-2xl text-[#0000cc] font-bold'>
                      NPR 1500
                    </p>
                    <button className='py-2 px-8 w-[200px] border-2 border-[#4d4d4d] rounded-lg bg-white duration-200 hover:bg-[#0000cc] hover:text-white transition ease-in-out'>
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-[#0000cc] text-white rounded-xl py-6'>
              <h4 className='uppercase text-2xl text-center font-bold mb-4'>
                Custom
              </h4>
              <hr className='h-1 bg-[#CCC]' />
              <div className='p-6 flex flex-col h-full justify-between items-center'>
                <div className='px-6'>
                  <p className='text-2xl font-bold text-center'>
                    Customize your server and subscribe for only the necessary
                    services.
                  </p>
                </div>
                <button className='text-[#4d4d4d] py-2 px-8 mb-14 w-[200px] border-2 border-[#4d4d4d] rounded-lg bg-white duration-200 hover:bg-[#4d4d4d] hover:text-white transition ease-in-out'>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlansAndPricing

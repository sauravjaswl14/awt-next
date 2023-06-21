import React from 'react'

function Solution() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <h2 className='text-4xl mb-16 font-extrabold text-[#4d4d4d]'>
            Choose your solution
          </h2>
          <div>
            <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-6'>
              <div className='bg-[#e5e5e5] p-4 px-8 rounded-lg'>
                <div className='flex space-x-44 items-center'>
                  <img
                    src='./img/mcafee.png'
                    className='shadow-2xl -mt-12'
                    alt=''
                  />
                  <div className='flex flex-col items-center space-y-6'>
                    <p className='text-[#000000] text-2xl font-extrabold'>
                      McAfee as a Service
                    </p>
                    <button className='text-[#0000cc] font-bold py-3 px-5 w-44 border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-white transition ease-in-out'>
                      Browse Plans
                    </button>
                  </div>
                </div>
              </div>

              <div className='bg-[#e5e5e5] p-4 px-8 rounded-lg'>
                <div className='flex space-x-44 items-center'>
                  <img
                    src='./img/bitdefender.png'
                    className='shadow-2xl -mt-12'
                    alt=''
                  />
                  <div className='flex flex-col items-center space-y-6'>
                    <p className='text-[#000000] text-2xl font-extrabold'>
                      BitDefendee as a Service
                    </p>
                    <button className='text-[#0000cc] font-bold py-3 px-5 w-44 border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-white transition ease-in-out'>
                      Browse Plans
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solution

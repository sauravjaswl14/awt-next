import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-8 lg:m-24'>
          <div className='flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:justify-between'>
            <div className='flex flex-col space-y-6 text-[#4d4d4d]'>
              <h2 className='pt-6 font-bold text-3xl text-[#4d4d4d] lg:p-0'>
                Cloud Server
              </h2>
              <p className='max-w-xl text-[20px]'>
                Are you a business in need of accommodating a large number of
                users or in a need to control the sudden spikes in traffic?
                Cloud Server is exactly what you need right now and for the
                future
              </p>
              <button className='py-3 px-6 font-bold text-[#0000cc] w-[200px] border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-gray-200 hover:scale-y-110 transition'>
                Browse plans
              </button>
            </div>
            <div>
              <img
                src='./img/cloud server.webp'
                className='w-[612px] h-[300px] rounded-lg'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Desc

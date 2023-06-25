import React from 'react'

function Saas() {
  return (
    <>
      <section id='saas'>
        <div className='mt-16 mb-32 mx-10'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-16 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Solution as a Service
          </div>
          <div className='flex space-x-8 lg:mx-10 text-[#4d4d4d]'>
            <div className='flex flex-col space-y-6 p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-2'>
                <img src='./icons/goaml-icon.png' alt='' />
                <p className='font-bold'>goAML</p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that derives the perfect balance of
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

export default Saas

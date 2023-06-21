import React from 'react'

function Featured() {
  return (
    <>
      <section>
        <div className='m-8 lg:m-20'>
          <h3 className='text-2xl font-bold text-[#4d4d4d] pl-4'>
            Featured Solutions
          </h3>

          <div className='flex flex-col-reverse mt-8 bg-[#e5e5e5] rounded-lg lg:rounded-3xl md:flex-row md:space-y-0 md:justify-between m-0'>
            <div className='p-8 flex flex-col space-y-24'>
              <div className='flex flex-col space-y-6'>
                <h4 className='text-xl text-[#0000cc] font-bold'>
                  Swostha | Digital Health
                </h4>
                <p className='max-w-lg font-bold'>
                  SWOSTHA is an innovative integrated health care platform to
                  cater health delivery system that touches multiple channels to
                  target the right patients at the right time and in the right
                  way
                </p>
              </div>
              <div className='flex items-center space-x-4'>
                <p className='inline-block font-bold border-b-2 border-[#4d4d4d] text-[#4d4d4d]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='lg:w-[50%]'>
              <img
                src='./img/Smartwatch Mockup2-1@2x.png'
                className=''
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Featured

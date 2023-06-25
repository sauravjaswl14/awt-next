import React from 'react'
import Link from 'next/link'
function ByIndustry() {
  return (
    <div id='by-industry' className='grid grid-cols-4 gap-6 max-w-screen '>
      {/* <!-- Item-1 --> */}
      <Link href='/enterpriseSolutions'>
        <div className='flex flex-col max-w-sm h-[139px] px-5 py-3 space-y-4 flex-wrap '>
          <div className='flex items-center space-x-2'>
            <img src='../img/enterprise-icon.svg' alt='' />
            <h5 className='text-[#4D4D4D] font-bold'>Enterprise</h5>
          </div>

          <p className='text-grayishBlue text-sm max-w-sm '>
            Robust cloud architecture that delivers the perfect balance of speed
            and reliability
          </p>
        </div>
      </Link>
      {/* <!-- Item-2 --> */}
      <div className='flex flex-col max-w-sm h-[139px] px-5 py-3 space-y-4 flex-wrap'>
        <div className='flex items-center space-x-2'>
          <img src='../img/healthcare-icon.svg' alt='' />
          <h5 className='text-[#4D4D4D] font-bold'>Healthcare</h5>
        </div>

        <p className='text-grayishBlue text-sm'>
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-3 --> */}
      <div className='flex flex-col max-w-sm h-[139px] px-5 py-3 space-y-4 flex-wrap'>
        <div className='flex items-center space-x-2'>
          <img src='../img/education-icon.svg' alt='' />
          <h5 className='text-[#4D4D4D] font-bold'>Education</h5>
        </div>

        <p className='text-grayishBlue text-sm'>
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-4 --> */}
      <div className='flex flex-col max-w-sm h-[139px] px-5 py-3 space-y-4 flex-wrap'>
        <div className='flex items-center space-x-2'>
          <img src='../img/financial-icon.svg' alt='' />
          <h5 className='text-[#4D4D4D] font-bold'>Financial</h5>
        </div>

        <p className='text-grayishBlue text-sm'>
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
      {/* <!-- Item-5 --> */}
      <div className='flex flex-col max-w-sm h-[139px] px-5 py-3 space-y-4 flex-wrap'>
        <div className='flex items-center space-x-2'>
          <img src='../img/manufacturing-icon.svg' alt='' />
          <h5 className='text-[#4D4D4D] font-bold'>Manufacturing</h5>
        </div>

        <p className='text-grayishBlue text-sm'>
          Robust cloud architecture that delivers the perfect balance of speed
          and reliability
        </p>
      </div>
    </div>
  )
}
export default ByIndustry

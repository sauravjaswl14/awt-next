import React from 'react'
import Link from 'next/link'

function Solutions() {
  return (
    <>
      <section className='text-[#4d4d4d] max-w-full'>
        <h3 className='text-3xl text-center font-bold m-10 lg:mb-20 lg:text-left lg:ml-10'>
          Solutions
        </h3>
        <div className='m-10 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
          {/* <!--  --> */}
          <div className='flex flex-col space-y-4'>
            <h4 className='font-bold ml-16'>Featured</h4>
            <div className='flex space-x-8 justify-between border-2 border-[#4d4d4d] lg:w-[700px] rounded-2xl'>
              <div className='p-4 flex flex-col space-y-4 max-w-xs'>
                <p className='text-[#0000cc]'>Swostha | Digital Health</p>
                <p className='text-sm max-w-xs'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maiores eos, ad iusto totam sunt nihil nesciunt unde harum
                  dolorem tempora illo qui ut voluptatum illum neque itaque
                  natus
                </p>
              </div>
              <img
                src='../img/Smartwatch Mockup2.png'
                className='w-1/2'
                alt=''
              />
            </div>
          </div>

          {/* <!--  --> */}
          <div className='flex space-x-2'>
            {/* <!--  --> */}
            <div className='flex flex-col space-y-4'>
              <h4 className='font-bold ml-16'>By Industry</h4>
              <div className='lg:h-[175px] flex space-x-4 justify-between border-2 border-[#4d4d4d] rounded-2xl'>
                <div className='p-4 flex flex-col space-y-4 max-w-xs'>
                  <p className='text-[#0000cc]'>Solutions by Industry</p>
                  <p className='text-sm max-w-xs'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores
                  </p>
                </div>
                <img
                  src='../img/Smartwatch Mockup2.png'
                  className='w-1/2'
                  alt=''
                />
              </div>
            </div>
            {/* <!--  --> */}
            <div className='flex flex-col space-y-4'>
              <h4 className='font-bold ml-16'>By Type</h4>
              <div className='lg:h-[175px] flex space-x-4 justify-between border-2 border-[#4d4d4d] rounded-2xl'>
                <div className='p-4 flex flex-col space-y-4 max-w-xs'>
                  <p className='text-[#0000cc]'>Solutions by Type</p>
                  <p className='text-sm max-w-xs'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Maiores eos, ad iusto totam sunt nihil
                  </p>
                </div>
                <img
                  src='../img/Smartwatch Mockup2.png'
                  className='w-1/2'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <Link
          href='/solutions'
          className='m-10 py-3 px-8 border-2 font-semibold border-[#4d4d4d] rounded-lg hover:bg-[#0000cc] hover:text-white transition ease-in-out duration-200'
        >
          View All Solutions
        </Link>
      </section>
    </>
  )
}

export default Solutions

import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-8 lg:m-24'>
          <div className='flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:justify-between'>
            <div className='flex flex-col space-y-6 text-[#4d4d4d]'>
              <h2 className='pt-6 font-bold text-3xl text-[#4d4d4d] lg:p-0'>
                Enterprise Solutions
              </h2>
              <p className='max-w-xl text-[20px]'>
                Stay ahead in the competitive world of enterprise with our
                secure and scalable cloud computing solutions. Our expert team
                is here to help streamline your operations, reduce costs, and
                unlock limitless potential.
              </p>
              <button className='py-3 px-6 text-[#0000cc] w-[300px] border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-gray-200 transition'>
                Browse Solutions
              </button>
            </div>
            <div>
              <img
                src='./img/enterprise-solution.jpg'
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

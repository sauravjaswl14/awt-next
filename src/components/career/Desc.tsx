import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-20'>
          <h2 className='font-bold text-[#4d4d4d] text-4xl max-w-2xl'>
            We are always on the lookout for talented and motivated individuals
          </h2>

          <div className='mt-10 flex flex-col space-y-8 text-[#4d4d4d]'>
            <p className='max-w-2xl'>
              At AccessWorld, we recognize the value of our employees as the
              driving force behind our success. We stimulate a culture of
              creativity, innovation, and personal growth, providing a
              challenging and dynamic work environment for our team of experts
              in their field. Driven by passion and a commitment to excellence,
              we strive to deliver unparalleled service to our customers.
            </p>
            <p className='max-w-2xl font-bold'>
              Explore exciting career opportunities, here you can view our
              current job openings and submit your application to join our
              dynamic team. We can't wait to review your application.
            </p>
          </div>
        </div>
        <div className='m-10 grid gap-6 grid-cols-1 md:grid-cols-2 max-w-full lg:grid-cols-4 lg:m-20'>
          <div className='flex justify-between items-center py-3 px-6 border-2 border-[#4d4d4d] rounded-lg'>
            <p className='text-[#cccccc]'>Select Category</p>
            <img src='./icons/Polygon 4.png' className='w-5 h-5' alt='' />
          </div>
          <div className='flex justify-between items-center py-3 px-6 border-2 border-[#4d4d4d] rounded-lg'>
            <p className='text-[#cccccc]'>Select Skill Type</p>
            <img src='./icons/Polygon 4.png' className='w-5 h-5' alt='' />
          </div>
          <div className='flex justify-between items-center py-3 px-4 border-2 border-[#4d4d4d] rounded-lg'>
            <p className='text-[#cccccc]'>Select Country</p>
            <img src='./icons/Polygon 4.png' className='w-5 h-5' alt='' />
          </div>
          <button className='text-[#0000cc] font-bold py-3 border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-[#4d4d4d] hover:text-white'>
            Filter
          </button>
        </div>
      </section>
    </>
  )
}

export default Desc

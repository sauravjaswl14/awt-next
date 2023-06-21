import React from 'react'

function CareerApplyForm() {
  return (
    <>
      <section className='m-20'>
        <form className=''>
          <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='fullname' className='font-bold'>
                Full Name
              </label>
              <input
                type='text'
                id='fullname'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='address' className='font-bold'>
                Address
              </label>
              <input
                type='text'
                id='address'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='email' className='font-bold'>
                Email Address
              </label>
              <input
                type='email'
                id='email'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='contactno' className='font-bold'>
                Contact Number
              </label>
              <input
                type='number'
                id='contactno'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
          </div>

          <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='position' className='font-bold'>
                Current Position
              </label>
              <input
                type='text'
                id='position'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='salary' className='font-bold'>
                Current Salary
              </label>
              <input
                type='text'
                id='salary'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='company' className='font-bold'>
                Current Company
              </label>
              <input
                type='text'
                id='company'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='salary' className='font-bold'>
                Expected Salary
              </label>
              <input
                type='text'
                id='salary'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='notice' className='font-bold'>
                Notice Period
              </label>
              <input
                type='text'
                id='notice'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
            <div className='flex flex-col space-y-4'>
              <label htmlFor='resume' className='font-bold'>
                Upload CV/Resume
              </label>
              <input
                type='text'
                id='resume'
                className='py-3 px-10 border-2 border-[#6D6E71] rounded-lg'
              />
            </div>
          </div>

          <button
            type='submit'
            className='mt-8 py-2 px-16 border-2 border-[#0000cc] text-[#0000cc] font-bold rounded-lg duration-200 hover:bg-slate-300 hover:text-[#4d4d4d] transition ease-in-out'
          >
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default CareerApplyForm

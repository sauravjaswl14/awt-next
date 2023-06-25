import { useState } from 'react'

function RegNum() {
  const [isInputOpen, setIsInputOpen] = useState<boolean>(false)

  function handleClick() {
    const btn = document.getElementById('showInput')
    setIsInputOpen((prev) => !prev)
    btn?.classList.toggle('hidden')
  }
  return (
    <section className='bg-[#e5e5e5]'>
      <div className='container max-w-screen min-h-screen mx-auto p-10'>
        <div className='flex flex-col items-center justify-between space-y-10 mt-40'>
          <h2 className='text-4xl text-[#0000cc] font-extrabold text-center'>
            Let's get you started
          </h2>
          <p className='text-center text-xl text-[#4d4d4d] font-bold'>
            Please enter your number here and proceed to the next step.
          </p>
          {/* <!-- Flex Container --> */}

          <div>
            <button
              onClick={handleClick}
              id='showInput'
              className='border-2 border-[#4d4d4d] rounded-lg text-semibold capitalize bg-white py-3 px-5'
            >
              Use phone number
            </button>
          </div>

          {isInputOpen && (
            <div className='container max-w-lg flex space-x-2 justify-center items-center text-[#4d4d4d]'>
              <div>
                <select
                  name='country'
                  id='country'
                  className='flex items-center justify-around py-3 w-16 px-2  rounded-md font-bold outline-none'
                >
                  <option value='nepal'>NP</option>
                  <option value='india'>IN</option>
                </select>
              </div>
              <input
                type='text'
                onClick={handleClick}
                className='flex flex-1 justify-center items-center bg-white w-6 h-10 py-[25px] pl-4 pr-6 text-2xl text-[#4d4d4d] rounded-md outline-none placeholder:text-xs placeholder:text-start placeholder:text-[#ccc]'
                placeholder='Enter your phone number'
              />
              <button
                className='flex justify-center items-center py-3 px-5 border-2 border-[#0000cc] rounded-md'
                type='submit'
              >
                <img
                  src='./icons/right-arrow (4).png'
                  className='w-5 h-5'
                  alt=''
                />
              </button>
            </div>
          )}

          <div className='container max-w-lg flex space-x-2 justify-center items-center text-[#4d4d4d]'>
            <input
              type='email'
              className='w-56 flex flex-noshrink justify-center items-center bg-white  h-10 py-[25px] px-[25px] ml-1 text-2xl text-[#4d4d4d] rounded-md outline-none placeholder:text-sm placeholder:text-start placeholder:text-[#ccc] md:w-full'
              placeholder='Please enter your email address'
            />
            <button
              className='flex  justify-center items-center py-3 px-5 border-2 border-[#0000cc] rounded-md'
              type='submit'
            >
              <img
                src='./icons/right-arrow (4).png'
                className='w-5 h-5'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default RegNum

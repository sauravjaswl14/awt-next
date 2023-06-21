import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-10 lg:mx-24'>
          <p className='text-xl text-[#4d4d4d] font-bold max-w-lg'>
            Get in touch today and unlock the power of secure, reliable, and
            scalable cloud computing solutions for your business.
          </p>

          <p className='mt-6 text-4xl font-bold text-[#4d4d4d] max-w-2xl'>
            Let's take your digital transformation to the next level.
          </p>

          <form className='mt-6'>
            <div className='flex flex-col space-y-4'>
              <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
                <input
                  type='text'
                  className='outline-none border-2 rounded-lg py-2 px-6 w-[350px] placeholder:text-[#cccccc] placeholder:font-bold'
                  placeholder='Enter your full name'
                />
                <input
                  type='number'
                  className='outline-none border-2 rounded-lg py-2 px-6 w-[350px] placeholder:text-[#cccccc] placeholder:font-bold'
                  placeholder='Enter your contact number'
                />
                <input
                  type='email'
                  className='outline-none border-2 rounded-lg py-2 px-6 w-[350px] placeholder:text-[#cccccc] placeholder:font-bold'
                  placeholder='Enter your email address'
                />
              </div>

              <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
                <input
                  type='text'
                  className='outline-none border-2 rounded-lg py-2 px-6 w-[350px] placeholder:text-[#cccccc] placeholder:font-bold'
                  placeholder='Company Size'
                />
                <input
                  type='text'
                  className='outline-none border-2 rounded-lg py-2 px-6 w-[350px] placeholder:text-[#cccccc] placeholder:font-bold'
                  placeholder='Company Address'
                />
              </div>
            </div>

            <textarea
              name=''
              id=''
              cols={135}
              rows={10}
              className='outline-none border-2 rounded-lg mt-4 p-4 placeholder:text-[#cccccc] placeholder:font-bold'
              placeholder='What would you like to discuss about?'
            ></textarea>
          </form>

          <div className='mt-4'>
            <p className='text-2xl font-bold text-[#4d4d4d]'>
              You can also reach us through our social media.
            </p>

            <div className='mt-4'>
              <div className='flex flex-col space-y-4'>
                <div className='flex items-center space-x-4'>
                  <img src='./icons/icon-facebook-square.png' alt='' />
                  <p className='text-[#0000cc] border-b-2 border-[#0000cc] font-bold'>
                    Start a conversation on Facebook
                  </p>
                  <img src='./icons/next.png' className='w-8' alt='' />
                </div>
                <div className='flex items-center space-x-4'>
                  <img
                    src='./icons/icon-instagram@2x.png'
                    className='w-12'
                    alt=''
                  />
                  <p className='text-[#0000cc] border-b-2 border-[#0000cc] font-bold'>
                    Start a conversation on Instagram
                  </p>
                  <img src='./icons/next.png' className='w-8' alt='' />
                </div>
                <div className='flex items-center space-x-5'>
                  <img
                    src='./icons/icon-linkedin@2x.png'
                    className='w-12'
                    alt=''
                  />
                  <p className='text-[#0000cc] border-b-2 border-[#0000cc] font-bold'>
                    Start a conversation on Linkedin
                  </p>
                  <img src='./icons/next.png' className='w-8' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Desc

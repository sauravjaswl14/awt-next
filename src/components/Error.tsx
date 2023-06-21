import React from 'react'

function Error() {
  return (
    <>
      <section>
        <div className='m-20'>
          <div className='flex flex-col space-y-6 items-center lg:space-y-0 lg:flex-row lg:space-x-24'>
            <img src='./img/error-illustration.png' alt='' />
            <div className='flex flex-col space-y-8'>
              <p className='text-4xl font-extrabold text-[#000000]'>Oops...</p>
              <p className='text-2xl font-extrabold max-w-lg'>
                Looks like we lost the connection to our server
                <span className='text-[#0000cc] border-b-2 border-[#0000cc]'>
                  Reload the page
                </span>
                or
                <span className='text-[#0000cc] border-b-2 border-[#0000cc]'>
                  go back home
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Error

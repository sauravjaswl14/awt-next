import React from 'react'

function AccessAbout() {
  return (
    <>
      <section>
        <div className='bg-[#e5e5e5] p-8 lg:p-10'>
          <div className='flex flex-col-reverse space-y-12 lg:space-y-0 lg:flex-row lg:space-x-20 lg:justify-between'>
            <div className='mx-10 flex flex-col space-y-6'>
              <h3 className='mt-[30px] font-bold text-3xl text-[#0000cc] max-w-xl'>
                Join the AWT Community and get exclusive access to updates
              </h3>
              <div className='flex flex-col space-y-4'>
                <p className='max-w-3xl'>
                  Are you ready to soar to new heights in the cloud computing
                  world? Join our community today! As a member, you'll have
                  access to exclusive content, expert advice, and a network of
                  like-minded individuals who share your passion for innovation
                  and technology. Whether you're a seasoned pro or just getting
                  started, our community is the perfect place to learn, grow,
                  and connect with the best and brightest in the industry.
                </p>
                <p className='max-w-4xl'>
                  So why wait? Join us today and let's make the future of cloud
                  computing together!
                </p>
              </div>

              <button className='w-[250px] font-bold py-3 px-6 text-[#0000cc] border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-gray-500 hover:text-white hover:border-black transition ease-in-out'>
                Join the Community
              </button>
            </div>

            <div className='mb-8 lg:w-[674px]'>
              <img
                src='./img/partnership-image@2x.png'
                className='w-full'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AccessAbout

import React from 'react'

function About() {
  return (
    <>
      <section id='about'>
        <div className='p-12 mb-12 lg:p-20 bg-[#4d4d4d] text-white max-w-screen mx-auto'>
          {/* <!-- Flex-container --> */}
          <div className='flex flex-col-reverse justify-around lg:flex-row lg:space-y-0 lg:justify-between'>
            {/* <!-- Content container --> */}
            <div className='flex flex-col space-y-6 max-w-lg md:max-w-xl'>
              <h2 className='mt-[20px] font-bold text-3xl lg:text-4xl'>
                Partnership Program - Innovation meets Collaboration and Growth
              </h2>

              <p>
                At AWT, we are passionate about driving innovation, fostering
                collaboration, and accelarating growth. Our Partnership Program
                embodies these values and provides enterpreneurs, small business
                owners, and seasoned professionals with the tools, resources,
                and experties to achieve their goals. By joining our community
                of like-minded individuals, you'll gain access to the latest
                cloud solutions, receive personalized support from our team of
                experts, and take your business to the next level. Partner with
                AWT today and unlock unparalled opportunities for success!
              </p>

              <a
                href='#'
                className='flex justify-center items-center py-3 px-5 w-[220px] h-[44px] border-2 border-white rounded-md hover:text-[#0000cc] hover:bg-gray-300 hover:border-black duration-150'
              >
                Be A Partner
              </a>
            </div>
            <div>
              <img src='./img/partnership-image.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

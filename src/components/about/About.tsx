import React from 'react'

function About() {
  return (
    <>
      <section id='about'>
        <div className='p-40 mb-12 lg:p-20 bg-[#4d4d4d] text-white max-w-screen'>
          {/* <!-- Flex-container --> */}
          <div className='flex flex-col-reverse justify-around lg:flex-row lg:space-y-0 lg:justify-between lg:space-x-16'>
            {/* <!-- Content container --> */}
            <div className='flex flex-col space-y-6 max-w-lg md:max-w-xl'>
              <h2 className='mt-[20px] font-bold text-3xl lg:text-4xl'>
                Empowering Your business with the latest technologies and tools
              </h2>

              <p className='max-w-6xl'>
                We understand that every business is unique and has specific IT
                needs, that's why we offer customizable solutions to fit your
                business. Whether you need a full-fledged IT department or
                complementary support for your current team, our team of experts
                has got you covered. With AccessWorld, you can save money,
                increase efficiently and feel secure knowing that your IT needs
                are in the hands of professionals. Trust us to be your partner
                in powering ahead for growth, overcoming IT challenges, and
                navigating any emergency that may come your way.
              </p>
            </div>
            <div>
              <img src='../img/blank_billboard.png' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

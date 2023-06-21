import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-8 lg:m-24'>
          <div className='flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:justify-between'>
            <div className='flex flex-col space-y-6 text-[#4d4d4d]'>
              <h2 className='pt-6 font-bold text-3xl text-[#4d4d4d] lg:p-0'>
                BitDefender as a Service
              </h2>
              <p className='max-w-xl text-[20px]'>
                A cloud-based solution equipped with advanced features like
                patch management, mobile device support, antivirus protection,
                and native device encryption to safeguard physical workstations
                from various cyber-attacks such as data breaches, ransomware,
                and phishing.
              </p>
              <button className='py-3 px-6 font-extrabold text-[#0000cc] w-[200px] border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-gray-200 transition'>
                Browse plans
              </button>
            </div>
            <div>
              <img
                src='./img/bit-defender-image.png'
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

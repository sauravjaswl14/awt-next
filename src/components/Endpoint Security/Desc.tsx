import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-8 lg:m-24'>
          <div className='flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:justify-between'>
            <div className='flex flex-col space-y-6 text-[#4d4d4d]'>
              <h2 className='pt-6 font-bold text-3xl text-[#4d4d4d] lg:p-0'>
                Endpoint Security
              </h2>
              <p className='max-w-xl text-[20px]'>
                Upgrade your cybersecurity game and safeguard your business from
                potential cyber threats with AWT's endpoint security solution.
                Our innovative software detects and neutralizes malicious
                attacks on all connected devices, ensuring that your
                confidential data remains secure.
              </p>
              <p className='max-w-xl text-[20px]'>
                And for an extra layer of protection, we offer the added benefit
                of BitDefender and McAfee as a Service, ensuring that your
                business is fully protected from potential cyber threats.
              </p>
            </div>
            <div>
              <img
                src='./img/endpoint-image.png'
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

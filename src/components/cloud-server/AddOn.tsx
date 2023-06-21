import React from 'react'

function AddOn() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <div className='flex items-center space-x-4'>
            <img
              src='./icons/icons8-add-64.png'
              className='w-14 text-[#0000cc]'
              alt=''
            />
            <h3 className='font-bold text-2xl text-[#0000cc] inline-block underline underline-offset-8 underline-[#0000cc]'>
              Add On Services
            </h3>
          </div>
          <div className='my-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4'>
            <div className='bg-[#e5e5e5] text-center rounded-lg'>
              <p className='font-bold text-[#4d4d4d] py-4 text-lg'>
                Automatic Failover
              </p>
              <hr className='h-1 bg-[#CCCCCC]' />
              <div className='flex flex-col p-9 space-y-12 lg:p-6'>
                <p className='text-sm'>
                  Our Automatic Failover solution ensures that your business
                  stays up and running, even in the event of an unexpected
                  outage.With our cutting-edge technology, your critical systems
                  and applications are automatically transferred to a secondary
                  site, minimizing interruption and maximizing productivity
                </p>
                <button className='text-[#4d4d4d] py-2 px-6 bg-white border-2 border-[#4d4d4d] rounded-lg duration-200 hover:bg-black hover:text-white transition ease-in-out'>
                  Add to cart
                </button>
              </div>
            </div>
            <div className='bg-[#e5e5e5] text-center rounded-lg'>
              <p className='font-bold text-[#4d4d4d] py-4 text-lg'>
                Data Backup
              </p>
              <hr className='h-1 bg-[#CCCCCC]' />
              <div className='flex flex-col p-6 space-y-24 mb-2 lg:py-9'>
                <p className='text-sm'>
                  With our comprehensive data backup service, protect your
                  important data. Even in the event of a disaster, our data
                  backup service makes sure that your data is secure and readily
                  available
                </p>
                <button className='text-[#4d4d4d] py-2 px-6 bg-white border-2 border-[#4d4d4d] rounded-lg duration-200 hover:bg-black hover:text-white transition ease-in-out'>
                  Add to cart
                </button>
              </div>
            </div>
            <div className='bg-[#e5e5e5] text-center rounded-lg'>
              <p className='font-bold text-[#4d4d4d] py-4 text-lg'>Recovery</p>
              <hr className='h-1 bg-[#CCCCCC]' />
              <div className='flex flex-col p-8 space-y-16 lg:p-6'>
                <p className='text-sm'>
                  AWT's Recovery service ensures that your valuable data remains
                  secure and accessible, even in the face of unexpected outages
                  or disasters. Our advanced technology and dedicated team
                  provide unparalleled protection and assurance for your
                  business.
                </p>
                <button className='text-[#4d4d4d] py-2 px-6 bg-white border-2 border-[#4d4d4d] rounded-lg duration-200 hover:bg-black hover:text-white transition ease-in-out'>
                  Add to cart
                </button>
              </div>
            </div>
            <div className='bg-[#e5e5e5] text-center rounded-lg'>
              <p className='font-bold text-[#4d4d4d] py-4 text-lg'>
                Additional IP
              </p>
              <hr className='h-1 bg-[#CCCCCC]' />
              <div className='flex flex-col p-6 space-y-12'>
                <p className='text-sm'>
                  We offer a wide range of services to help you maximize the
                  potential of your business. With Additional IP, you can enjoy
                  more flexibility, security, and scalability for your business
                  operations. From automatic IP management to dynamic IP
                  allocation, we've got everything you need to take your
                  business to the next level
                </p>
                <button className='text-[#4d4d4d] py-2 px-6 bg-white border-2 border-[#4d4d4d] rounded-lg duration-200 hover:bg-black hover:text-white transition ease-in-out'>
                  Add to cart
                </button>
              </div>
            </div>
            <div className='bg-[#e5e5e5] text-center rounded-lg'>
              <p className='font-bold text-[#4d4d4d] py-4 text-lg'>
                VPN Connection
              </p>
              <hr className='h-1 bg-[#CCCCCC]' />
              <div className='flex flex-col p-6 space-y-12'>
                <p className='text-sm max-w-xs'>
                  Our VPN service offers a robust and reliable connection to
                  your services in CLOUD that guarantees to safeguard your
                  online activities from cyber threats, hackers and prying eyes,
                  using advanced encryption technology. Compatible with all
                  leading operating systems Network Architecture
                </p>
                <button className='text-[#4d4d4d] py-2 px-6 bg-white border-2 border-[#4d4d4d] rounded-lg duration-200 hover:bg-black hover:text-white transition ease-in-out'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddOn

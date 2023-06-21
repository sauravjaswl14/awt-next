import React from 'react'

function AddOn() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <div className='flex space-x-4'>
            <img src='./icons/icons8-add-64.png' className='w-8 h-8' alt='' />
            <p className='text-2xl font-extrabold text-[#0000cc] border-b-2 border-[#0000cc]'>
              Add On Services
            </p>
          </div>

          <div className='mt-12 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
            <div className='flex flex-col w-[398px]'>
              <div className='bg-[#e5e5e5] flex justify-center items-center py-3 px-5 text-[#4d4d4d] text-xl font-bold border-b-2 border-[#cccccc] rounded-t-lg'>
                Business Security
              </div>
              <div className='flex items-center bg-[#e5e5e5] py-4 px-6 rounded-b-lg'>
                <div className='h-[341px] flex flex-col items-center justify-between'>
                  <p className='text-center text-[#000000] max-w-lg'>
                    A whole range of security services are available to small
                    and medium-sized enterprises by AWT, effortlessly fusing
                    superior security with the simple central administration of
                    all workstations and servers
                  </p>

                  <button className='text-[#4d4d4d] w-44 bg-white py-3 px-5 flex items-center justify-center border-2 border-[#4d4d4d] rounded-lg'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[398px]'>
              <div className='bg-[#e5e5e5] flex justify-center items-center py-3 px-5 text-[#4d4d4d] text-xl font-bold border-b-2 border-[#cccccc] rounded-t-lg'>
                Advance Business Security
              </div>
              <div className='flex items-center bg-[#e5e5e5] py-4 px-6 rounded-b-lg'>
                <div className='h-[341px] flex flex-col items-center justify-between'>
                  <p className='text-center text-[#000000] max-w-lg'>
                    AWT offers comprehensive protection and centralized
                    management for workstations, servers, email, and mobile
                    devices, making it an all-wncompassing security solution.
                  </p>

                  <button className='text-[#4d4d4d] w-44 bg-white py-3 px-5 flex items-center justify-center border-2 border-[#4d4d4d] rounded-lg'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-[398px]'>
              <div className='bg-[#e5e5e5] flex justify-center items-center py-3 px-5 text-[#4d4d4d] text-xl font-bold border-b-2 border-[#cccccc] rounded-t-lg'>
                Elite Suite
              </div>
              <div className='flex items-center bg-[#e5e5e5] py-4 px-6 rounded-b-lg'>
                <div className='h-[341px] flex flex-col items-center justify-between'>
                  <p className='text-center text-[#000000] max-w-lg'>
                    With cutting-edge technology and tried-and-true methods, AWT
                    delivers security protection for all corporate endpoints
                    against complex cyber threats.
                  </p>

                  <button className='text-[#4d4d4d] w-44 bg-white py-3 px-5 flex items-center justify-center border-2 border-[#4d4d4d] rounded-lg'>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AddOn

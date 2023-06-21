import React from 'react'

function Dataprotection() {
  return (
    <>
      <section>
        <div className='mx-10 my-20'>
          <div className='text-2xl font-bold border-b-4 border-[#0000cc] pl-24 text-[#4d4d4d] pb-2 lg:mx-10 lg:mr-[1024px]'>
            Data Protection
          </div>
          <div className='grid grid-cols-2 gap-6 lg:mx-6 text-[#4d4d4d] lg:grid-cols-4 p-4 lg:p-6'>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/draas-icon.png' className='' alt='' />

                <p className='font-bold text-sm lg:text-base'>
                  Data Recovery as a Service
                </p>
              </div>
              <p className='max-w-lg text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-spacing-6 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-7 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/backup-repli-icon.png' className='' alt='' />

                <p className='font-bold text-sm lg:text-base'>
                  Backup & Replication
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-spacing-6 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/data-vault-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>AWT DataVault</p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/data-share-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>Data Share</p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>

            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/o365-icon.png' alt='' />
                <p className='font-bold text-sm lg:text-base'>
                  Office365 Backup
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>
            <div className='flex flex-col space-y-4 lg:space-y-6 p-2 lg:p-6 border-b-2 border-black'>
              <div className='flex items-center space-x-4 lg:space-x-2'>
                <img src='./icons/cloud-to-cloud-icon.png' alt='' />
                <p className='font-bold sm:text-sm lg:text-base'>
                  Cloud-to-Cloud Backup
                </p>
              </div>
              <p className='max-w-sm text-sm'>
                Robust cloud architecture that delivers the perfect balance of
                speed and reliability
              </p>
              <div className='flex space-x-4'>
                <p className='font-bold inline-block border-b-2 border-[#CCCCCC]'>
                  Learn More
                </p>
                <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dataprotection

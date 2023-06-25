import React from 'react'
import Link from 'next/link'
function Desc() {
  const divStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  return (
    <>
      <section>
        <div className='mx-20 my-10'>
          <p className='text-xl text-[#4d4d4d] font-bold max-w-xl'>
            Explore our collection of informative and insightful cloud computing
            articles, offering you valuable knowledge to stay at the forefront
            of the industry.
          </p>

          <div className='mt-12 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
            <div className='flex flex-col'>
              <div className='relative'>
                <img src='./img/article-image.png' className=' ' alt='' />
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed'
                  style={divStyle}
                >
                  <p className=' pt-6 pl-4 text-3xl max-w-sm font-extrabold text-white'>
                    Changing landscape of cloud computing businesses in Nepal
                  </p>
                </div>
              </div>
              <div className='-mt-1 bg-[#e5e5e5] rounded-b-xl py-3 px-5'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-4'>
                    <Link href='/articlesRead' className='text-[4d4d4d]'>
                      Learn More
                    </Link>
                    <img
                      src='./icons/right-arrow.png'
                      className='w-5 h-5'
                      alt=''
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <img src='./img/writer-icon.png' alt='' />
                    <p className='text-[4d4d4d]'>Oliver John Doe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='relative'>
                <img src='./img/article-image1.png' alt='' />
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed'
                  style={divStyle}
                >
                  <p className=' pt-6 pl-4 text-3xl max-w-sm font-extrabold text-white'>
                    Would co-location be the best fit for your business?
                  </p>
                </div>
              </div>
              <div className='-mt-1 bg-[#e5e5e5] rounded-b-xl py-3 px-5'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-4'>
                    <p className='text-[4d4d4d]'>Learn More</p>
                    <img
                      src='./icons/right-arrow.png'
                      className='w-5 h-5'
                      alt=''
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <img src='./img/writer-icon.png' alt='' />
                    <p className='text-[4d4d4d]'>Oliver John Doe</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='mt-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
            <div className='flex flex-col rouded-t-2xl'>
              <div className='relative '>
                <img src='./img/article-image-3.png' alt='' />
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed'
                  style={divStyle}
                >
                  <p className=' pt-6 pl-4 text-2xl max-w-sm font-extrabold text-white'>
                    Debunking the myths about cybersecurity
                  </p>
                </div>
              </div>

              <div className='-mt-1 bg-[#e5e5e5] rounded-b-xl py-3 px-5'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-4'>
                    <p className='text-[4d4d4d]'>Learn More</p>
                    <img
                      src='./icons/right-arrow.png'
                      className='w-5 h-5'
                      alt=''
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <img src='./img/writer-icon.png' alt='' />
                    <p className='text-[4d4d4d]'>Oliver John Doe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='relative'>
                <img src='./img/article-image-3.png' alt='' />
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed'
                  style={divStyle}
                >
                  <p className=' pt-6 pl-4 text-2xl max-w-sm font-extrabold text-white'>
                    Debunking the myths about cybersecurity
                  </p>
                </div>
              </div>

              <div className='-mt-1 bg-[#e5e5e5] rounded-b-xl py-3 px-5'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-4'>
                    <p className='text-[4d4d4d]'>Learn More</p>
                    <img
                      src='./icons/right-arrow.png'
                      className='w-5 h-5'
                      alt=''
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <img src='./img/writer-icon.png' alt='' />
                    <p className='text-[4d4d4d]'>Oliver John Doe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='relative'>
                <img src='./img/article-image-3.png' alt='' />
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed'
                  style={divStyle}
                >
                  <p className=' pt-6 pl-4 text-2xl max-w-sm font-extrabold text-white'>
                    Debunking the myths about cybersecurity
                  </p>
                </div>
              </div>

              <div className='-mt-1 bg-[#e5e5e5] rounded-b-xl py-3 px-5'>
                <div className='flex justify-between'>
                  <div className='flex items-center space-x-4'>
                    <p className='text-[4d4d4d]'>Learn More</p>
                    <img
                      src='./icons/right-arrow.png'
                      className='w-5 h-5'
                      alt=''
                    />
                  </div>
                  <div className='flex items-center space-x-2'>
                    <img src='./img/writer-icon.png' alt='' />
                    <p className='text-[4d4d4d]'>Oliver John Doe</p>
                  </div>
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

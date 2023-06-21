import React from 'react'

function ReadPreviousArticle() {
  return (
    <>
      <section>
        <div className='m-10 mb-20'>
          <h5 className='pl-24 font-extrabold text-2xl text-[#4d4d4d]'>
            Previous Articles
          </h5>

          <div className='my-6 flex items-center space-x-4'>
            <img
              src='./icons/scroll-side-button.png'
              className='w-8 h-8 rotate-180'
              alt=''
            />
            <div className='flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4'>
              <div className='flex flex-col'>
                <img src='./img/article-image-3.png' alt='' />
                <div className='bg-[#e5e5e5] py-3 px-4'>
                  <div className='flex justify-between'>
                    <div className='flex items-center space-x-6'>
                      <a
                        href='#'
                        className='text-[#4d4d4d] border-b-2 border-[#4d4d4d]'
                      >
                        Learn More
                      </a>
                      <img
                        src='./icons/right-arrow.png'
                        className='w-5 h-5'
                        alt=''
                      />
                    </div>

                    <div className='flex items-center space-x-6'>
                      <img
                        src='./img/writer-icon.png'
                        className='w-8 h-8'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <img src='./img/article-image-3.png' alt='' />
                <div className='bg-[#e5e5e5] py-3 px-4'>
                  <div className='flex justify-between'>
                    <div className='flex items-center space-x-6'>
                      <a
                        href='#'
                        className='text-[#4d4d4d] border-b-2 border-[#4d4d4d]'
                      >
                        Learn More
                      </a>
                      <img
                        src='./icons/right-arrow.png'
                        className='w-5 h-5'
                        alt=''
                      />
                    </div>

                    <div className='flex items-center space-x-6'>
                      <img
                        src='./img/writer-icon.png'
                        className='w-8 h-8'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col'>
                <img src='./img/article-image-3.png' alt='' />
                <div className='bg-[#e5e5e5] py-3 px-4'>
                  <div className='flex justify-between'>
                    <div className='flex items-center space-x-6'>
                      <a
                        href='#'
                        className='text-[#4d4d4d] border-b-2 border-[#4d4d4d]'
                      >
                        Learn More
                      </a>
                      <img
                        src='./icons/right-arrow.png'
                        className='w-5 h-5'
                        alt=''
                      />
                    </div>

                    <div className='flex items-center space-x-6'>
                      <img
                        src='./img/writer-icon.png'
                        className='w-8 h-8'
                        alt=''
                      />
                      <p className='text-[#4d4d4d]'>John Doe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src='./icons/scroll-side-button.png'
              className='w-8 h-8'
              alt=''
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ReadPreviousArticle

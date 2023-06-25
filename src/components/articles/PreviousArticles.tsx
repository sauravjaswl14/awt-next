import React from 'react'

function PreviousArticles() {
  const divStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

  return (
    <>
      <section>
        <div className='mx-4 my-20 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-around'>
          <div>
            <h2 className='pl-8 text-xl font-extrabold text-[#4d4d4d]'>
              Previous Articles
            </h2>

            <div className='my-10 lg:w-[800px] flex flex-col space-y-4'>
              <p className='-mr-16 text-2xl font-bold text-[#4d4d4d]'>
                Get an insight on how to secure your data
              </p>
              <div className='flex justify-between py-4 pr-6 border-b-2 border-[#4d4d4d]'>
                <div className='flex items-center space-x-4'>
                  <img src='./img/writer-icon.png' alt='' />
                  <p className='text-[#4d4d4d]'>Oliver John Doe</p>
                </div>

                <div className='flex items-center space-x-4'>
                  <p className='text-[#4d4d4d]'>Learn More</p>
                  <img
                    src='./icons/right-arrow.png'
                    className='w-5 h-5'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='my-8 lg:w-[800px] flex flex-col space-y-4'>
              <p className='text-2xl font-bold text-[#4d4d4d]'>
                Get an insight on how to secure your data
              </p>
              <div className='flex justify-between py-4 pr-6 border-b-2 border-[#4d4d4d]'>
                <div className='flex items-center space-x-4'>
                  <img src='./img/writer-icon.png' alt='' />
                  <p className='text-[#4d4d4d]'>Oliver John Doe</p>
                </div>

                <div className='flex items-center space-x-4'>
                  <p className='text-[#4d4d4d]'>Learn More</p>
                  <img
                    src='./icons/right-arrow.png'
                    className='w-5 h-5'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='my-8 lg:w-[800px] flex flex-col space-y-4'>
              <p className='text-2xl font-bold text-[#4d4d4d]'>
                Get an insight on how to secure your data
              </p>
              <div className='flex justify-between py-4 pr-6 border-b-2 border-[#4d4d4d]'>
                <div className='flex items-center space-x-4'>
                  <img src='./img/writer-icon.png' alt='' />
                  <p className='text-[#4d4d4d]'>Oliver John Doe</p>
                </div>

                <div className='flex items-center space-x-4'>
                  <p className='text-[#4d4d4d]'>Learn More</p>
                  <img
                    src='./icons/right-arrow.png'
                    className='w-5 h-5'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='my-8 lg:w-[800px] flex flex-col space-y-4'>
              <p className='text-2xl font-bold text-[#4d4d4d]'>
                Get an insight on how to secure your data
              </p>
              <div className='flex justify-between py-4 pr-6 border-b-2 border-[#4d4d4d]'>
                <div className='flex items-center space-x-4'>
                  <img src='./img/writer-icon.png' alt='' />
                  <p className='text-[#4d4d4d]'>Oliver John Doe</p>
                </div>

                <div className='flex items-center space-x-4'>
                  <p className='text-[#4d4d4d]'>Learn More</p>
                  <img
                    src='./icons/right-arrow.png'
                    className='w-5 h-5'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='my-8 lg:w-[800px] flex flex-col space-y-4'>
              <p className='text-2xl font-bold text-[#4d4d4d]'>
                Get an insight on how to secure your data
              </p>
              <div className='flex justify-between py-4 pr-6 border-b-2 border-[#4d4d4d]'>
                <div className='flex items-center space-x-4'>
                  <img src='./img/writer-icon.png' alt='' />
                  <p className='text-[#4d4d4d]'>Oliver John Doe</p>
                </div>

                <div className='flex items-center space-x-4'>
                  <p className='text-[#4d4d4d]'>Learn More</p>
                  <img
                    src='./icons/right-arrow.png'
                    className='w-5 h-5'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-col'>
              <div className='relative'>
                <img
                  src='./img/articlesImg.jpg'
                  className='lg:w-[400px] lg:h-[630px] rounded-t-lg'
                  alt=''
                />
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed'
                  style={divStyle}
                >
                  <p className=' pt-10 pl-4 text-lg max-w-xs font-extrabold text-white'>
                    Stay ahead of the curve with our exclusive newsletter
                  </p>
                  <p className=' pt-6 pl-4 text-lg max-w-xs font-extrabold text-white'>
                    Subscribe now and receive the latest updates, industry
                    trends, and insider insights directly in your inbox.
                  </p>
                  <p className=' pt-6 pl-4 text-lg max-w-xs font-extrabold text-white'>
                    Don't miss out on valuable content - join our community
                    today.
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-center bg-[#e5e5e5] py-6 px-8 rounded-b-lg'>
                <div className='flex flex-col items-center space-y-4'>
                  <input
                    type='email'
                    className='w-[300px] outline-none bg-white py-3 pl-5 pr-5 placeholder:text-[#cccccc] placeholder:font-bold placeholder:text-sm rounded-lg'
                    placeholder='Enter your email address'
                  />
                  <button className='w-44 py-3 px-5 text-[#0000cc] border-2 border-[#0000cc] rounded-lg font-bold duration-200 hover:bg-white transition ease-in-out'>
                    Subscribe
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

export default PreviousArticles

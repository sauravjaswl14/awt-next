import React from 'react'

function AboutSSL() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <h3 className='text-3xl text-[#4d4d4d] font-bold inline-block border-b-2 border-[#4d4d4d]'>
            Why AWT?
          </h3>

          <div className='my-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/secure-connection-icon@2x.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold'>
                    Secure Connections
                  </p>
                </div>
              </div>
            </div>

            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/authentication-icon@2x.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold'>
                    Authentication
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-1 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/cloud-infra-icon@2x.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm font-bold lg:whitespace-nowrap'>
                    Integration with Cloud infrastructure
                  </p>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center text-[#4d4d4d] bg-[#e5e5e5] h-[240px] py-3 px-6 rounded-xl'>
              <div className='flex lg:p-12 flex-col items-center justify-center space-y-6'>
                <img
                  src='./icons/protection-icon@2x.png'
                  className='w-20'
                  alt=''
                />

                <div className='flex justify-center items-center max-w-lg'>
                  <p className='text-sm text-center font-bold'>
                    Protection of sensitive data
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className='text-4xl text-[#0000cc] font-bold max-w-xl'>
            Build greater trust with the target market with premium security
            certification services
          </p>

          <div className='mt-8'>
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-3'>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-base lg:text-lg font-bold'>
                    Strong encryption
                  </p>
                  <p>
                    SSL secures data transmission over the internet by combining
                    public key and symmetric key encryption to prevent unwanted
                    access to sensitive data
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-base lg:text-lg font-bold'>
                    Browser ubiquity
                  </p>
                  <p>
                    AWT provides SSL service to make sure all the web browsers
                    such as Safari, Google, Chrome, Brave and Firefox are
                    compatible with the single SSL certificate
                  </p>
                </div>
              </div>
              <div className='bg-[#e5e5e5] p-6 text-[#4d4d4d] rounded-xl'>
                <div className='flex flex-col text-center space-y-6'>
                  <p className='text-base lg:text-lg font-bold'>
                    System-managed services
                  </p>
                  <p>
                    Our cloud server provides robust security with remote access
                    to services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSSL

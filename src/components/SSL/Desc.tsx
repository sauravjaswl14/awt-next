import React from 'react'

function Desc() {
  return (
    <>
      <section>
        <div className='m-8 lg:m-24'>
          <div className='flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:justify-between'>
            <div className='flex flex-col space-y-6 text-[#4d4d4d]'>
              <h2 className='pt-6 font-bold text-3xl text-[#4d4d4d] lg:p-0'>
                SSL
              </h2>
              <p className='max-w-xl text-[20px]'>
                SSL encrypts sensitive information such as credit card numbers,
                usernames, passwords, emails, etc., allowing for secure
                communication and reducing the risk of theft or tampering by
                hackers and identify thieves.
              </p>
              <button className='py-3 px-6 font-bold text-[#0000cc] w-[200px] border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-gray-200 transition'>
                Browse plans
              </button>
            </div>
            <div>
              <img
                src='./img/encryption.jpg'
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

import React from 'react'

function PlansAndPricing() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-24'>
          <h4 className='font-bold text-2xl text-[#4d4d4d] inline-block border-b-2 border-[#4d4d4d]'>
            Plans and Pricing
          </h4>

          <p className='my-10 max-w-xl text-lg'>
            SSL encrypts sensitive information such as credit card numbers,
            usernames, passwords, emails, etc., allowing for secure
            communication and reducing the risk of theft or tampering by hackers
            and identity thieves.
          </p>

          <div className='bg-[#0000cc] w-[398px] text-white rounded-xl py-6'>
            <div className='flex flex-col h-[500px] lg:h-[737px]'>
              <h4 className='uppercase text-2xl text-center font-bold mb-4'>
                Custom
              </h4>
              <hr className='h-1 bg-[#CCC]' />

              <div className='p-6 flex flex-col h-full justify-between items-center'>
                <div className='px-10'>
                  <p className='text-2xl font-bold text-center'>
                    Contact our sales team to discuss and purchase the required
                    SSL Certification for your business
                  </p>
                </div>
                <button className='text-[#4d4d4d] py-2 px-8 mb-14 w-[200px] border-2 border-[#4d4d4d] rounded-lg bg-white duration-200 hover:bg-[#4d4d4d] hover:text-white transition ease-in-out'>
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PlansAndPricing

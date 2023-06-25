import Link from 'next/link'

function AboutHero() {
  return (
    <>
      <section className='p-6 bg-gradient-to-r from-[#0000cc] to-[#000066] overflow-hidden'>
        <div className='max-w-screen lg:h-[450px]'>
          <div className='flex flex-col-reverse space-y-10 lg:flex-row'>
            <div className='flex flex-col space-y-10 lg:items-left lg:ml-12'>
              <h2 className='text-3xl font-bold text-white ml-5 mt-10 lg:mt-[68px] lg:text-5xl lg:mb-[60px] lg:max-w-3xl leading-loose md:mb-[45px]'>
                A one-stop solution for all your cloud computing needs
              </h2>
              <div className='ml-6'>
                <Link
                  href='/contact'
                  className='font-bold text-white w-[220px] h-[44px] px-[64px] py-[11px] border-[1.5px] border-[#fff] rounded-md hover:bg-slate-400 duration-150'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AboutHero

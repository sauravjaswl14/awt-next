import { solutionsData } from '@/model/data'
import Link from 'next/link'

function SolutionsDetail(): JSX.Element {
  return (
    <section
      id='service_panel'
      className='fixed bg-[#e5e5e5] top-[140px] left-0  overflow-hidden z-50 w-screen lg:h-[500px]'
    >
      <div className=' container'>
        {/* <!-- parent flex container --> */}
        <div className='flex flex-col md:flex-row'>
          {/* <!-- left flex container --> */}
          <div className='flex flex-col space-y-72'>
            <div className='flex flex-col space-y-4 pl-20 pr-8 py-4 '>
              {solutionsData.services.map((service, index) => {
                return (
                  <p
                    key={index}
                    className=' text-[#4d4d4d] font-bold whitespace-nowrap'
                  >
                    {service}
                  </p>
                )
              })}
            </div>

            <div className=' pl-20 pr-16 flex space-x-4 items-center'>
              <Link href='/solutions'>
                <p className='font-extrabold text-[#4d4d4d] text-base whitespace-nowrap'>
                  View All Solutions
                </p>
              </Link>

              <img src='./icons/right-arrow.png' className='w-5 h-5' alt='' />
            </div>
          </div>
          {/* <!-- right flex container --> */}
          <div className='flex flex-col h-[800px] space-y-6 p-4 pr-8 border-l-4 border-l-gray-400'>
            <h2 className='text-[24px] font-bold text-[#4d4d4d]'>
              By Industry
            </h2>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2'>
              {solutionsData.details.map((item) => {
                return (
                  <div key={item.id} className='flex flex-col space-y-2'>
                    <h4 className='text-[#4d4d4d] text-[16px] font-bold'>
                      {item.service}
                    </h4>
                    <p className='max-w-lg text-sm text-[#4d4d4d]'>
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SolutionsDetail

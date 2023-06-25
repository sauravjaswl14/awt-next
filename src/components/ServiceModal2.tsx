import { Service, ServicesType, AllServices, datas } from '@/model/ServicesData'

import Link from 'next/link'

function ServiceModal2(props: { data: Service[] }) {
  const { data } = props

  return (
    <section id='modal'>
      <div className='absolute top-[450px] left-0 right-0 container bg-[#e5e5e5] mt-10 p-10  max-w-full md:p-16 md:pb-40'>
        {/* <!-- Grid Container --> */}
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-4 md:grid-rows-2'>
          {/* <!-- Flex Container --> */}
          {data.map((service) => {
            {
              if (service.id === 1.1) {
                return (
                  <Link href='/cloudServerMain'>
                    <div
                      key={service.id}
                      className='flex flex-col space-y-5 max-w-sm'
                    >
                      <div className='flex space-x-2'>
                        {/* <!-- icon --> */}
                        <img src={service.icon} alt='' />
                        {/* <!-- heading --> */}
                        <h4>{service.name}</h4>
                      </div>
                      <p>{service.desc}</p>
                    </div>
                  </Link>
                )
              } else if (service.id === 2.1) {
                return (
                  <Link href='/ssl'>
                    <div
                      key={service.id}
                      className='flex flex-col space-y-5 max-w-sm'
                    >
                      <div className='flex space-x-2'>
                        {/* <!-- icon --> */}
                        <img src={service.icon} alt='' />
                        {/* <!-- heading --> */}
                        <h4>{service.name}</h4>
                      </div>
                      <p>{service.desc}</p>
                    </div>
                  </Link>
                )
              } else if (service.id === 2.2) {
                return (
                  <Link href='endpointSecurity'>
                    <div
                      key={service.id}
                      className='flex flex-col space-y-5 max-w-sm'
                    >
                      <div className='flex space-x-2'>
                        {/* <!-- icon --> */}
                        <img src={service.icon} alt='' />
                        {/* <!-- heading --> */}
                        <h4>{service.name}</h4>
                      </div>
                      <p>{service.desc}</p>
                    </div>
                  </Link>
                )
              }
            }
            return (
              <div
                key={service.id}
                className='flex flex-col space-y-5 max-w-sm'
              >
                <div className='flex space-x-2'>
                  {/* <!-- icon --> */}
                  <img src={service.icon} alt='' />
                  {/* <!-- heading --> */}
                  <h4>{service.name}</h4>
                </div>
                <p>{service.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default ServiceModal2

import Link from 'next/link'

function AboutDetail() {
  return (
    <>
      <section className='fixed bg-[#e5e5e5] top-[140px] left-0  overflow-hidden z-50 w-screen lg:h-[500px] py-3 px-20 pb-40'>
        <div className='container flex space-x-16 w-screen'>
          <div className='flex flex-col space-y-4'>
            <h3 className='font-extrabold text-[#4d4d4d] text-xl'>About AWT</h3>
            <Link href='/about' className='text-[#4d4d4d] font-semibold'>
              Company Overview
            </Link>
            <Link href='/careerPage' className='text-[#4d4d4d] font-semibold'>
              Careers
            </Link>
            <p className='text-[#4d4d4d] font-semibold'>
              Corporate Social Responsibility
            </p>
            <p className='text-[#4d4d4d] font-semibold'>The AWT Community</p>
            <Link href='/contact' className='text-[#4d4d4d] font-semibold'>
              Contact Us
            </Link>
            <p className='text-[#4d4d4d] font-semibold'>
              Privacy Policy and Terms
            </p>
          </div>

          <div className='flex flex-col space-y-4'>
            <h3 className='font-extrabold text-[#4d4d4d] text-xl'>
              Partner Program
            </h3>
            <p className='text-[#4d4d4d] font-semibold'>Be a Partner</p>
            <p className='text-[#4d4d4d] font-semibold'>Be a Reseller</p>
          </div>

          <div className='flex flex-col space-y-4'>
            <h3 className='font-extrabold text-[#4d4d4d] text-xl'>Resources</h3>
            <Link
              href='/whitepaperDownload'
              className='text-[#4d4d4d] font-semibold'
            >
              Download Whitepapers
            </Link>
            <Link
              href='/articlesDisplay'
              className='text-[#4d4d4d] font-semibold'
            >
              Articles
            </Link>
            <p className='text-[#4d4d4d] font-semibold'>
              Newsletter Subscription
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutDetail

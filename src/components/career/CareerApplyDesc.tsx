import React from 'react'

function CareerApplyDesc() {
  return (
    <>
      <section>
        <div className='m-10 lg:m-20'>
          <h2 className='text-[#4d4d4d] text-3xl font-bold mb-6'>
            Graphic Designer
          </h2>
          <div className='flex flex-col space-y-6'>
            <div className='flex items-center space-x-4'>
              <img src='./icons/pin-icon.png' alt='' />
              <p>Kathmandu</p>
            </div>
            <div className='flex items-center space-x-4'>
              <img src='./icons/person-icon.png' alt='' />
              <p>11 Nos.</p>
            </div>
            <div className='flex flex-col space-y-6'>
              <p className='max-w-4xl'>
                We are looking for a creative and driven Junior Fraphic Designer
                to join our team. The ideal candidate should be able to produce
                visually stunning designs that effectively communicate our
                message to our target audience
              </p>
              <p className='text-xl font-bold'>Responsibilities:</p>
              <div>
                <p>
                  Work collaboratively with our design team to develop creative
                  concepts and execute them into high-quality designs. Design
                  marketing materials such as social media graphics, email
                  newsletters, brochures, flyers, and posters.
                </p>
                <p>Develop creative concepts and layouts for website design.</p>
                <p>
                  Work closely with the marketing team to ensure that all
                  materials are on-brand
                </p>
                <p>
                  Take feedbacks from senior desifners and incorporate it into
                  your work to improve your designs.
                </p>
                <p>
                  Stay up-to-date with industry trends and incorporate them into
                  your designs.
                </p>
                <p>Maintain and organize design files and assets.</p>
              </div>
              <p className='text-xl font-bold'>Requirements:</p>
              <div>
                <p>
                  Bachelor degree in graphic design, visual communication, or a
                  related field.
                </p>
                <p>
                  Strong knowledge of Adobe Creative Suite, particularly
                  photoshop, Illustrator, and InDesign.
                </p>
                <p>Strong portfolio showcasing design skills.</p>
                <p>Ability to work on multiple projects simultaneously.</p>
                <p>Strong attention to detail.</p>
                <p>Excellent communication skills.</p>
                <p>Ability to work collaboratively with a team.</p>
              </div>
              <div>
                <p>
                  We offer a competitive salary and benefits package and a
                  collaborative and creative work environment. If you are a
                  driven and creative individual who is looking to develop your
                  design skills in a fast-paced and dynamic workplace, please
                  apply with your resume and portfolio.
                </p>
              </div>
              <div className='flex space-x-6'>
                <button className='font-bold py-2 px-8 text-[#0000cc] border-2 border-[#0000cc] rounded-lg duration-200 hover:bg-[#0000cc] hover:text-white transition ease-in-out'>
                  Apply for job
                </button>
                <button className='font-bold py-2 px-8 text-[#4d4d4d] border-2 border-[#4d4d4d] rounded-lg duration-200 hover:bg-[#0000cc] hover:text-white transition ease-in-out'>
                  View on Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareerApplyDesc

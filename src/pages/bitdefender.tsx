import About from '@/components/AboutPartnership'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AboutBitdefender from '@/components/bitdefender/AboutBitdefender'
import AddOn from '@/components/bitdefender/AddOn'
import Desc from '@/components/bitdefender/Desc'
import Hero from '@/components/bitdefender/Hero'
import PlansAndPricing from '@/components/bitdefender/PlansAndPricing'
import React from 'react'

function bitdefender() {
  return (
    <div className='relative'>
      <a href='#hero' className='fixed bottom-6 right-4'>
        <img src='./icons/scroll-up-button.png' className='w-10 h-10' alt='' />
      </a>
      <Navbar />
      <Hero />
      <Desc />
      <AboutBitdefender />
      <PlansAndPricing />
      <AddOn />
      <About />
      <Description />
      <Footer />
    </div>
  )
}

export default bitdefender

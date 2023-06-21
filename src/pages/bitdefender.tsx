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
    <>
      <Navbar />
      <Hero />
      <Desc />
      <AboutBitdefender />
      <PlansAndPricing />
      <AddOn />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default bitdefender

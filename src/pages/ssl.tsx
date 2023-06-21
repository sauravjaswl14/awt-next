import Navbar from '@/components/Navbar'
import AboutSSL from '@/components/SSL/AboutSSL'
import Desc from '@/components/SSL/Desc'
import Hero from '@/components/SSL/Hero'
import About from '@/components/AboutPartnership'
import PlansAndPricing from '@/components/SSL/PlansAndPricing'
import React from 'react'
import Description from '@/components/Description'
import Footer from '@/components/Footer'

function ssl() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <AboutSSL />
      <PlansAndPricing />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default ssl

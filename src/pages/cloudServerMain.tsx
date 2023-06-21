import Navbar from '@/components/Navbar'
import AddOn from '@/components/cloud-server/AddOn'
import CloudAbout from '@/components/cloud-server/CloudAbout'
import Desc from '@/components/cloud-server/Desc'
import Hero from '@/components/cloud-server/Hero'
import About from '@/components/AboutPartnership'
import PlansAndPricing from '@/components/cloud-server/PlansAndPricing'
import React from 'react'
import Description from '@/components/Description'
import Footer from '@/components/Footer'

function CloudServerMain() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <CloudAbout />
      <PlansAndPricing />
      <AddOn />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default CloudServerMain

import About from '@/components/AboutPartnership'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Desc from '@/components/enterpriseSolutions/Desc'
import Hero from '@/components/enterpriseSolutions/Hero'
import Cloud from '@/components/services/Cloud'
import Compute from '@/components/services/Compute'
import Dataprotection from '@/components/services/Dataprotection'
import Iaas from '@/components/services/Iaas'
import ManagedSecurity from '@/components/services/ManagedSecurity'
import Security from '@/components/services/Security'
import React from 'react'

function EnterpriseSolutions() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <Compute />
      <Security />
      <Iaas />
      <Cloud />
      <Dataprotection />
      <ManagedSecurity />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default EnterpriseSolutions

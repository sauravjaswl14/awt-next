import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import About from '@/components/AboutPartnership'
import Cloud from '@/components/services/Cloud'
import Collaboration from '@/components/services/Collaboration'
import Compute from '@/components/services/Compute'
import Dataprotection from '@/components/services/Dataprotection'
import Description from '@/components/Description'
import Hero from '@/components/services/Hero'
import ITessentials from '@/components/services/ITessentials'
import Iaas from '@/components/services/Iaas'
import ManagedSecurity from '@/components/services/ManagedSecurity'
import ManagementSupport from '@/components/services/ManagementSupport'
import Saas from '@/components/services/Saas'
import Security from '@/components/services/Security'
import Storage from '@/components/services/Storage'
import React from 'react'

function Services() {
  return (
    <>
      <Navbar />
      <Hero />
      <Compute />
      <Security />
      <Iaas />
      <Cloud />
      <ManagementSupport />
      <Saas />
      <Dataprotection />
      <ManagedSecurity />
      <ITessentials />
      <Storage />
      <Collaboration />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default Services

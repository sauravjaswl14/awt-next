import About from '@/components/AboutPartnership'
import Description from '@/components/Description'
import Desc from '@/components/Endpoint Security/Desc'
import Hero from '@/components/Endpoint Security/Hero'
import Solution from '@/components/Endpoint Security/Solution'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function EndpointSecurity() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <Solution />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default EndpointSecurity

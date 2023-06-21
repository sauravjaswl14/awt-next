import Navbar from '@/components/Navbar'
import ByIndustry from '@/components/solutions/ByIndustry'
import ByType from '@/components/solutions/ByType'
import Hero from '@/components/solutions/Hero'
import About from '@/components/AboutPartnership'
import React from 'react'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Featured from '@/components/solutions/Featured'

function solutions() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <ByIndustry />
      <ByType />
      <About />
      <Description />
      <Footer />
    </>
  )
}

export default solutions

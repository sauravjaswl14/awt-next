import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import About from '@/components/HomeAbout'
import Certification from '@/components/Certification'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import SolutionsDetail from '@/components/SolutionsDetail'

// import SolutionsDetail from "@/components/SolutionsDetail";
// import ServiceDetail from "@/components/ServiceDetail";

function HomeComponent(): JSX.Element {
  return (
    <>
      <Navbar />
      {/* <SolutionsDetail /> */}
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Certification />
      <Description />
      <Footer />
    </>
  )
}

export default HomeComponent

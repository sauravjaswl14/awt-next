import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import About from '@/components/HomeAbout'
import Certification from '@/components/Certification'
import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Link from 'next/link'
import SolutionsDetail from '@/components/SolutionsDetail'

// import SolutionsDetail from "@/components/SolutionsDetail";
// import ServiceDetail from "@/components/ServiceDetail";

function HomeComponent(): JSX.Element {
  return (
    <div>
      <a href='#hero' className='fixed bottom-6 right-4 z-50'>
        <img
          src='./icons/scroll-up-button.png'
          className='z-50 w-10 h-10'
          alt=''
        />
      </a>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Certification />
      <Description />
      <Footer />
    </div>
  )
}

export default HomeComponent

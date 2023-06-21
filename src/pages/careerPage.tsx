import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Desc from '@/components/career/Desc'
import Role from '@/components/career/Role'
import Hero from '@/components/career/Hero'
import React from 'react'

function careerPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <Role />
      <Footer />
    </>
  )
}

export default careerPage

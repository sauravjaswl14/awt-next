import AccessAbout from '@/components/AccessAbout'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CareerApplyDesc from '@/components/career/CareerApplyDesc'
import CareerApplyForm from '@/components/career/CareerApplyForm'
import Hero from '@/components/career/Hero'
import React from 'react'

function careerPageApply() {
  return (
    <>
      <Navbar />
      <Hero />
      <CareerApplyDesc />

      <AccessAbout />
      <Footer />
    </>
  )
}

export default careerPageApply

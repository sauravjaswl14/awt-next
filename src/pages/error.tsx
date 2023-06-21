import Error from '@/components/Error'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function error() {
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  )
}

export default error

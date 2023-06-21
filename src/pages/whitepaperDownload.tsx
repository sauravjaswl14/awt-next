import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WhitepaperDesc from '@/components/articles/WhitepaperDesc'
import WhitepaperHero from '@/components/articles/WhitepaperHero'
import React from 'react'

function whitepaperDownload() {
  return (
    <>
      <Navbar />
      <WhitepaperHero />
      <WhitepaperDesc />
      <Footer />
    </>
  )
}

export default whitepaperDownload

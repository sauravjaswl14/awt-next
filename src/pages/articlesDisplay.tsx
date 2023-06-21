import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Desc from '@/components/articles/Desc'
import Hero from '@/components/articles/Hero'
import PreviousArticles from '@/components/articles/PreviousArticles'
import React from 'react'

function ArticlesDisplay() {
  return (
    <>
      <Navbar />
      <Hero />
      <Desc />
      <PreviousArticles />
      <Footer />
    </>
  )
}

export default ArticlesDisplay

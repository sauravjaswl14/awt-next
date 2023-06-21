import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ReadDesc from '@/components/articles/ReadDesc'
import ReadHero from '@/components/articles/ReadHero'
import ReadPreviousArticle from '@/components/articles/ReadPreviousArticle'
import React from 'react'

function ArticlesRead() {
  return (
    <>
      <Navbar />
      <ReadHero />
      <ReadDesc />
      <ReadPreviousArticle />
      <Footer />
    </>
  )
}

export default ArticlesRead

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import Desc from '@/components/about/Desc'
import Certification from '@/components/about/Certification'
import About from '@/components/about/About'
import Services from '@/components/about/Services'
import Solutions from '@/components/about/Solutions'
import Clients from '@/components/about/Clients'

function AboutOverview() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Desc />
      <Certification />
      <About />
      <Services />
      <Solutions />
      <Clients />
      <Footer />
    </>
  )
}

export default AboutOverview

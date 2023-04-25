import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Certification from "@/components/Certification";
import Description from "@/components/Description";
import Footer from "@/components/Footer";

function HomeComponent(): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <About />
      <Certification />
      <Description />
      <Footer />
    </>
  );
}

export default HomeComponent;

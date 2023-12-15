import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import hero1 from "../assets/camping-7856198_640.webp"
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero 
        cname="heroabout"
        heroImg={hero1}
        title="Tracks of Adventure"
        text="Stories from a Life of Endless Exploration."
        
     
        btnClass="hide"
      />
      <AboutUs />
      <Footer/>
    </div>
  )
}

export default About

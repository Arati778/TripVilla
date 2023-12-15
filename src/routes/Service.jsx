import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import hero1 from "../assets/pexels-photo-2249601.webp"
import Footer from '../components/Footer';
import Trip from '../components/Trip';
import TripData from '../components/TripData';


const Service = () => {
  return (
    <div>
       <Navbar />
      <Hero 
        cname="heroservice"
        heroImg={hero1}
        title="Service"
        //text="Stories from a Life of Endless Exploration."
        
     
        btnClass="hide"
      />
      <TripData/>
      <Footer />
    </div>
  )
}

export default Service

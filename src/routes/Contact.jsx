import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import hero1 from "../assets/kerala-o2yLG8yO.jpg"
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';


const Contact = () => {
  return (
    <div>
        <Navbar />
      <Hero 
        cname="heroabout"
        heroImg={hero1}
        title="Contact"
        //text="Stories from a Life of Endless Exploration."
        
     
        btnClass="hide"
      />

      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact

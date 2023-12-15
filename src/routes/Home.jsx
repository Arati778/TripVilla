import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import hero from "../assets/road-8395119_1280.jpg"
import Destination from '../components/Destination'
import DestinationData from '../components/DestinationData'
import Trip from '../components/Trip'
import TripData from '../components/TripData'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
    <Navbar />
      <Hero 
        cname="hero"
        heroImg={hero}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <DestinationData/>
      <TripData/>
      <Footer />
    </div>
  )
}


export default Home

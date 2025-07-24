import React from 'react'
import Header from '../Components/Header'
import Video from '../Components/Home/Video'
import Footer from '../Components/Footer'
import LandscapeBanner from '../Components/Home/LandscapeBanner'
import ScrollableDubaiPackages from '../Components/ScrollableDubaiPackages'
import Testimonials from '../Components/Home/Testimonials'
import HowToBook from '../Components/Home/HowToBook'
import ScrollableUmrahPackages from '../Components/ScrollableUmrahPackages'
import Chauffeurhome from '../Components/Home/Chaufferhome'

function Home() {
  return (
    <>
      <Header/>
      <Video/>
      <LandscapeBanner/>
      <ScrollableDubaiPackages/>
      <ScrollableUmrahPackages/>
      <Chauffeurhome/>
      <HowToBook/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home

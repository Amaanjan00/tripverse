import React from 'react'
import Header from '../Components/Header'
import Video from '../Components/Home/Video'
import Footer from '../Components/Footer'
import LandscapeBanner from '../Components/Home/LandscapeBanner'
import ScrollableDubaiPackages from '../Components/ScrollableDubaiPackages'
import Testimonials from '../Components/Home/Testimonials'
import Trust from '../Components/Home/Trust'
import HowToBook from '../Components/Home/HowToBook'
import ScrollableUmrahPackages from '../Components/ScrollableUmrahPackages'

function Home() {
  return (
    <>
      <Header/>
      <Video/>
      <LandscapeBanner/>
      <ScrollableDubaiPackages/>
      <ScrollableUmrahPackages/>
      <HowToBook/>
      <Trust/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home

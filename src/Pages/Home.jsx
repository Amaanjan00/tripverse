import React from 'react'
import Header from '../Components/Header'
import Video from '../Components/Home/Video'
import Footer from '../Components/Footer'
import LandscapeBanner from '../Components/Home/LandscapeBanner'
import DubaiPackages from '../Components/Home/DubaiPackages'
import UmrahPackages from '../Components/Home/UmrahPackages'
import Testimonials from '../Components/Home/Testimonials'
import Trust from '../Components/Home/Trust'
import HowToBook from '../Components/Home/HowToBook'

function Home() {
  return (
    <>
      <Header/>
      <Video/>
      <LandscapeBanner/>
      <DubaiPackages/>
      <UmrahPackages/>
      <HowToBook/>
      <Trust/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home

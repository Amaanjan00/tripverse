import React from 'react'
import Header from '../Components/Header'
import Video from '../Components/Home/Video'
import Footer from '../Components/Footer'
import LandscapeBanner from '../Components/Home/LandscapeBanner'
import DubaiPackages from '../Components/Home/DubaiPackages'
import UmrahPackages from '../Components/Home/UmrahPackages'

function Home() {
  return (
    <>
      <Header/>
      <Video/>
      <LandscapeBanner/>
      <DubaiPackages/>
      <UmrahPackages/>
      <Footer/>
    </>
  )
}

export default Home

import React from 'react'
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

function Contact() {
  return (
    <>
    <Header/>
    <div className='p-10 sm:px-40 sm:p-10 h-[100vh]'>
      <h1 className='font-bold text-4xl'>Contact Us</h1>
      <br />
      <p><b>Email:</b> inquiry.tripverse@gmail.com</p>
      <br />
      <p><b>Phone:</b> +971 05216 01190</p>
      <br />
      <p><b>Address:</b> England Z06,Shop - 17 - Dubai International City - Dubai - United Arab Emirates</p>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
Contact
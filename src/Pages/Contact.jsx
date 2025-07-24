import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
      <Header/>
      <div>
            <div className='p-10 md:px-20 lg:px-40 text-[20px] text-gray-500 flex flex-col gap-5 md:items-start'>
              
              <div className='flex flex-col gap-2 md:px-5'>
                <h1 className='text-yellow-500 text-3xl font-bold mt-20'>Contact Us</h1>
                <h2 className='text-2xl font-bold'>Find Us!</h2>
              </div>

              <section className='flex flex-col lg:flex-row justify-between items-center md:items-start gap-5'>
                <div className='hidden md:flex w-fit shadow-2xl rounded-2xl p-2'>
                  <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8825225108053!2d55.402111675476576!3d25.17344427772628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f539a6bc50d672d%3A0xa03e372c9a132d19!2sWheels%20on%20Luxury%20Car%20Rental%20LLC!5e0!3m2!1sen!2sae!4v1753352230376!5m2!1sen!2sae" width="500" height="500" loading="lazy"></iframe>
                </div>

                <div className='flex md:hidden w-fit shadow-2xl rounded-2xl p-2 mb-10'>
                  <iframe className='rounded-2xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8825225108053!2d55.402111675476576!3d25.17344427772628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4f539a6bc50d672d%3A0xa03e372c9a132d19!2sWheels%20on%20Luxury%20Car%20Rental%20LLC!5e0!3m2!1sen!2sae!4v1753352230376!5m2!1sen!2sae" width="350" height="500" loading="lazy"></iframe>
                </div>
                <div className='lg:p-10 flex flex-col gap-5'>
                  <p><b className='text-yellow-500'>Address: </b>England Z06,Shop - 17 - Dubai International City - Dubai</p>
                  <p><b className='text-yellow-500'>Contact No: </b><a href="tel:+971521601190">+971 521601190</a></p>
                  <p><b className='text-yellow-500'>Email Address: </b><a href="mailto:inquiry.tripverse@gmail.com">inquiry.tripverse@gmail.com</a></p>
                </div>
              </section>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Contact

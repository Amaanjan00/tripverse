import { Link } from 'react-router'
import logo from '../assets/logo.png'

function Footer() {

     const handleClick = () => {window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })};

  return (
    <>
        <footer>
        <div className="flex px-7 flex-col justify-center items-center gap-7 bg-amber-50 py-10">

            <h1 className="text-2xl text-center px-5 text-amber-600 font-medium">Get exclusive updates to offers, deals & surprises.</h1>

            <div className="bg-white shadow-[0_10px_50px_rgba(194,_103,_0,_0.8)] w-full lg:w-[30vw] h-12 flex justify-between rounded-[7px]">
                <input type="text" className="p-2 h-full w-full font-medium" placeholder="Enter your email to register" />
                <button className="bg-amber-600 text-white px-5 m-1 rounded-[5px]">Submit</button>
            </div>

            <p className="text-[12px] text-center mt-7 text-gray-500 font-medium">You are signing up to receive updates and newsletters. <br /> By signing up, you are consenting to our privacy policy but you can opt out at any time.</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-25 px-10 lg:px-20 py-15 bg-gray-800 text-gray-400">
            <div className='flex lg:flex-row flex-col gap-25 text-[16px] font-bold'>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900]'>OUR SERVICES</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[14px]'>
                        <li className='hover:text-white'><a href="">Umrah Packages</a></li>
                        <li className='hover:text-white'><a href="">Dubai Packages</a></li>
                        <li className='hover:text-white'><a href="">Flight Booking</a></li>
                        <li className='hover:text-white'><a href="">Visa Assistance</a></li>
                        <li className='hover:text-white'><a href="">Hotel Stay</a></li>
                        <li className='hover:text-white'><a href="">Transport</a></li>
                        <li className='hover:text-white'><a href="">Group Booking</a></li>
                        <li className='hover:text-white'><a href="">24/7 Support</a></li>
                    </ul>
                </div>

                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900]'>HELP</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[14px]'>
                        <li className='hover:text-white'><a href="tel:+919007167409">Customer Care</a></li>
                        <li className='hover:text-white' onClick={handleClick}><Link to="/refund-policy">Refund Policy</Link></li>
                        <li className='hover:text-white' onClick={handleClick}><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                        <li className='hover:text-white' onClick={handleClick}><Link to="/privacy-policy">Privacy Poilicy</Link></li>
                    </ul>
                </div>
                
                <div className="gap-3 flex lg:items-start items-center flex-col">
                    <h1 className='text-[#e09900]'>ABOUT</h1>
                    <ul className='items-center lg:items-start flex flex-col gap-1 text-[14px]'>
                        <li className='hover:text-white' onClick={handleClick}><Link to='/contact'>Contact Us</Link></li>
                        <li className='hover:text-white' onClick={handleClick}><Link to='/about'>About Us</Link></li>
                        <li className='hover:text-white' onClick={handleClick}><Link to=''>License & Registration</Link></li>
                    </ul>
                </div>
            </div>

            <div className='w-50'>
                <img src={logo} className='object-contain brightness-1 invert-100' alt="" />
            </div>
        </div>

        <div className="flex items-center lg:justify-between lg:flex-row flex-col gap-5 mt-[1px] py-5 lg:px-20 bg-gray-800 text-gray-400 text-[14px]">
            <div className="flex lg:flex-row flex-col items-center gap-1">
                <p>Got a question? Contact: </p>
                <a className="text-[#e09900]" href="">zuroorytt@gmail.com</a>
            </div>

            <p>All rights reserved &copy; 2025 Tripverse travel and tourism L.L.C</p>
        </div>
    </footer> 
    </>
  )
}

export default Footer

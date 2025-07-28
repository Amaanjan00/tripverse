import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router'

function Header() {

    const [head, setHead] = useState(false)
    const handleClick = () => {window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })};

  return (
    <>
        <div className='hidden lg:block fixed z-99999 w-full h-fit px-50 pt-5'>
            <div className='bg-white/80 backdrop-blur-xs w-full rounded-full shadow-2xl'>
                <header className='flex justify-between items-center px-10 py-0'>
                    <div className='w-35'>
                        <Link onClick={handleClick} to='/'><img className='object-contain' src={logo} alt="" /></Link>
                    </div>
                    <nav>
                        <ul className='flex text-gray-500 text-[14px] font-semibold gap-5'>
                            <Link onClick={handleClick} to='/'><li className='rounded-2xl hover:bg-[#e09900] hover:text-white transition-all duration-100 py-1 px-2'>Home</li></Link>
                            <Link onClick={handleClick} to='/umrahpackage'><li className='rounded-2xl hover:bg-[#e09900] hover:text-white transition-all duration-100 py-1 px-2'>Umrah Packages</li></Link>
                            <Link onClick={handleClick} to='/dubaipackage'><li className='rounded-2xl hover:bg-[#e09900] hover:text-white transition-all duration-100 py-1 px-2'>Dubai Packages</li></Link>
                            <Link onClick={handleClick} to='/chaufferservice'><li className='rounded-2xl hover:bg-[#e09900] hover:text-white transition-all duration-100 py-1 px-2'>Chauffer Service</li></Link>
                            <Link onClick={handleClick} to='/about'><li className='rounded-2xl hover:bg-[#e09900] hover:text-white transition-all duration-100 py-1 px-2'>About Us</li></Link>
                        </ul>
                    </nav>
                    <div className=''>
                        <h1 className='text-[#E07231] '>Contact: <span><a className='text-gray-500' type='phone' href="tel:+971 521601190">+971 521601190</a></span></h1>
                    </div>
                </header>
            </div>
        </div>


        <div className='block lg:hidden fixed h-fit z-999999 w-full bg-transparent px-4 pt-4'>
            <div className='bg-white/90 z-99999 w-full rounded-full shadow-2xl'>
                <header className='flex justify-between items-center px-10 py-2'>

                    <div className='w-30'>
                        <Link onClick={handleClick} to='/'><img className='object-contain' src={logo} alt="" /></Link>
                    </div>

                    <div className=''>
                        <svg onClick={() => setHead(true)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" fill='#E07231' viewBox="0 0 50 50">
                            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                    </div>
                </header>
            </div>
        </div>

        {
            head &&

            <div className='fixed top-0 bg-white h-full w-full z-999999'>

                <div className='my-0 h-full flex flex-col justify-between'>
                    <div>
                        <div className='flex justify-between pl-2'>
                            <img className='w-50 object-contain' src={logo} alt="" />
                            <div className='px-8 py-10'>
                                <svg onClick={() => setHead(false)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" fill='#E07231' height="40" viewBox="0 0 50 50">
                                    <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                                </svg>
                            </div>
                        </div>

                        <div className='bg-white/50 backdrop-blur-2xl rounded-2xl shadow-2xl m-10'>
                            <nav className='p-10'>
                                <ul className='flex flex-col text-gray-500 text-[18px] font-bold gap-10 uppercase'>
                                    <li onClick={handleClick}><Link to='/'>Home</Link></li>
                                    <li onClick={handleClick}><Link to="/umrahpackage">Umrah Package</Link></li>
                                    <li onClick={handleClick}><Link to="/dubaipackage">Dubai Package</Link></li>
                                    <li onClick={handleClick}><Link to='/contact'>Contact</Link></li>
                                    <li onClick={handleClick}><Link to='/about'>About Us</Link></li>
                                    <li onClick={handleClick}><Link to="/privacypolicy">Privacy Poilicy</Link></li>
                                    <li onClick={handleClick}><Link to="/termsandconditions">Terms and Conditions</Link></li>
                                    <li><a href="https://wa.me/message/SMEYWM2EEXHVM1">Text on Whatsapp</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className='p-10 mb-5 text-gray-500'>

                        <div>

                        </div>

                        <div>
                            <div className="flex flex-col gap-1">
                                <p>Got a question? Contact: </p>
                                <a className="text-yellow-500" href="mailto:inquiry.tripverse@gmail.com">inquiry.tripverse@gmail.com</a>
                            </div>

                            <p>All rights reserved &copy; 2025 Tripverse travel and tourism L.L.C</p>
                        </div>
                    </div>
                </div>

            </div>
        }
    </>
  )
}

export default Header

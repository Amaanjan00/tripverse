import logo from '../assets/logo.png'
import ButtonP from '../Constants/ButtonP'
import menu from '../assets/icons/menu.png'
import close from '../assets/icons/close.png'
import { use, useState } from 'react'

function Header() {

  const [m, setM] = useState(false) 

  return (
    <>
        <div className='flex justify-between px-5 relative sm:px-50 items-center'>
            <img className='aspect-video w-35 object-contain' src={logo} alt="" />

            <nav className='hidden sm:flex'>
                <ul className='flex font-bold text-amber-700'>
                    <li><a className='header-a' href="/">Home</a></li>
                    <li><a className='header-a' href="/packages">Packages</a></li>
                    <li><a className='header-a' href="/about">About Us</a></li>
                    <li><a className='header-a' href="/contact">Contact Us</a></li>
                </ul>
            </nav>

   
            <div className='flex items-center gap-4'>
              <ButtonP button="Login"/>
              <img className='h-8 sm:hidden' src={menu} alt="" onClick={() => setM(true)} />
            </div>
              
        </div> 

        {
          m &&
          <div className='flex flex-col fixed h-[100vh] z-9999999 top-0 w-full bg-white'>

          <div className='flex items-center justify-between px-10'>
            <img className='aspect-video w-35 object-contain h-30' src={logo} alt="" />
            <img className='h-10' src={close} alt="" onClick={() => setM(false)} />
          </div>
          
          <nav className='w-full h-[50vh]'>
                <ul className='flex flex-col gap-2 h-full w-full p-10'>
                    <li className='flex items-center h-20'><a className='header-b' href="/">Home</a></li>
                    <li className='flex items-center h-20'><a className='header-b' href="/packages">Packages</a></li>
                    <li className='flex items-center h-20'><a className='header-b' href="/about">About Us</a></li>
                    <li className='flex items-center h-20'><a className='header-b' href="/contact">Contact Us</a></li>
                </ul>
            </nav>

          <div className='px-10 flex flex-col gap-10'>
            <ButtonP button="Login"/>
          </div>

        </div>
        }

    </>
  )
}

export default Header

import {React, useState} from 'react'
import './header.css'
import CompanyLogo from '../assets/Q1.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white relative'>
        <nav className='mx-auto flex w-full items-center justify-between px-3 p-2 lg:px-8'>
            <div className='flex flex-row items-center'>
                <a href="" className='m-1 p-1 flex items-center'>
                  <img src={CompanyLogo} alt="Company Logo" className='h-15 w-auto object-cover' />
                  <p className='font-cedarville whitespace-nowrap px-1 text-2xl'>Brains At Work</p>
                </a>
            </div>
            <div className="burger-menu absolute p-3 right-0 md:invisible flex flex-col items-center gap-1 cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </div>
            <ul
              className={`absolute top-full right-0 w-full backdrop-blur-sm p-4 space-y-4 justify-end ${menuOpen ? 'block': 'invisible'} md:visible md:flex md:flex-row md:space-x-6 md:static md:p-0 md:backdrop-blur-none`}
            >
              <li ><a href="">Offer</a></li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">Contact Us</a></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header


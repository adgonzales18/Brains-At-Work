import {React, useState} from 'react'
import './header.css'
import CompanyLogo from '../assets/Q1.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='bg-white'>
        <nav className='mx-auto flex w-full max-w-7xl items-center justify-between px-5 p-3 lg:px-8'>
            <div className='flex flex-row items-center'>
                <a href="" className='m-1.5 p-1.5 flex items-center'>
                  <img src={CompanyLogo} alt="Company Logo" className='h-15 w-auto object-cover' />
                  <p className='font-teacher uppercase px-1 text-xl'>Brains At Work</p>
                </a>
            </div>
            <div className="md:hidden burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </div>
            <ul
              className={`absolute top-full left-0 w-full bg-white p-4 space-y-4 ${menuOpen ? 'block' : 'hidden'} md:flex md:flex-row md:block`}
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


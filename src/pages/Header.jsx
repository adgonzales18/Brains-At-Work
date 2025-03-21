import {React, use, useState} from 'react'
import './header.css'
import CompanyLogo from '../assets/Q1.png'

function Header({toggleForm}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleEnrollClick = () => {
    toggleForm();    
    setMenuOpen(false);  
  }
  return (
    <header className='bg-transparent relative'>
        <nav className='mx-auto flex w-full items-center justify-between px-3 p-2 lg:px-8'>
            <div className='flex flex-row items-center'>
                  <img src={CompanyLogo} alt="Company Logo" className='h-15 w-auto object-cover md:h-20' />
                  <p className='font-cedarville whitespace-nowrap px-1 text-2xl text-black md:text-4xl'>Creative Education</p>
            </div>
            <div className="burger-menu absolute p-3 right-0 md:invisible flex flex-col items-center gap-1 cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
              <div className="burger-line"></div>
            </div>
            <ul
              className={`absolute font-montserrat top-full right-0 w-full backdrop-blur-sm p-4 space-y-4 justify-end z-100 text-black 
                ${menuOpen ? 'block opacity-100': 'invisible opacity-0'} 
                transition-opacity duration-300 
                sm:visible sm:opacity-100 sm:flex sm:flex-row sm:space-x-15 sm:text-center sm:static sm:p-2 sm:backdrop-blur-none sm:text-2xl`}
            >
              <li><a href="#offer">Offer</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a className="text-black" href="#" onClick={handleEnrollClick}>Enroll</a></li>
            </ul>
        </nav>
    </header>
    
  )
}

export default Header


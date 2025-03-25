import React from 'react'
import BannerPhoto from '../assets/banner-photo.jpg'
import Button from '../components/Button'
import Form from '../components/Form'

function Hero({isFormVisible, toggleForm}) {
  return (
    <section id='hero' className='flex flex-col items-center bg-blue-900 h-full sm:flex-row'>
        <div className='relative sm:w-2/3 sm:h-full'>
          <img src={BannerPhoto} alt="Woman Teaching Children Photo, Header Photo" className='w-full h-full brightness-80 sm:h-full sm:bg-cover' />
          <div className='absolute bottom-0 left-0 w-full h-3/8 bg-gradient-to-t from-black to-transparent'></div>
          <div className='absolute bottom-1/16 left-1/3 transform -translate-x-1/2 text-white'>
            <h1 className='relative font-bold text-2xl text-nowrap sm:text-5xl '>Creative Education</h1>
            <p className='relative text-xl sm:text-4xl'>Tutorial Center</p>
          </div>
        </div>
        <div className='flex flex-col text-center text-white sm:w-0.5/10'>
          <h1 className='text-3xl font-extrabold p-10 sm:text-4xl'>"Fueling Success with a Creative Approach to Learning"</h1>
          <div className='p-5 text-xl sm:text-3xl'>
          <h2 className='text-center'>Tutorial Services for:</h2>
            <ul className='flex flex-col justify-center list-disc list-inside space-x-6'>
              <li className='mr-4'>Pre-School</li>
              <li className='mr-4'>Kindergarten</li>
              <li className='mr-4'>Elementary</li>
              <li className='mr-4'>High School</li>
            </ul>
          </div>
          <Button 
          label="Enroll Now"
          toggleForm={toggleForm}
          />
        </div>
        {isFormVisible && (
        <div className="fixed top-40 left-0 right-0 z-50 bg-transparent p-6 shadow-lg transform transition-all duration-300 ease-in-out">
          <Form toggleForm={toggleForm}/>
        </div>
      )}
    </section>
    
  )
}

export default Hero
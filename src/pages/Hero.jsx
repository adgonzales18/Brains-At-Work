import React from 'react'
import BannerPhoto from '../assets/banner-photo.jpg'
import Button from '../components/Button'

function Hero() {
  return (
    <section id='hero' className='flex flex-col items-center bg-blue-900 h-full'>
        <div className='relative'>
          <img src={BannerPhoto} alt="Woman Teaching Children Photo, Header Photo" className='w-screen h-auto brightness-80' />
          <div className='absolute bottom-0 left-0 w-full h-3/8 bg-gradient-to-t from-black to-transparent'></div>
          <div className='absolute bottom-1/16 left-1/3 transform -translate-x-1/2 text-white'>
            <h1 className='relative font-bold text-2xl text-nowrap '>Creative Education</h1>
            <p className='relative text-xl'>Tutorial Center</p>
          </div>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-3xl font-extrabold p-10'>"Fueling Success with a Creative Approach to Learning"</h1>
          <div className='p-5 text-xl'>
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
          />
        </div>
    </section>
    
  )
}

export default Hero
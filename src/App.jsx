import React, { useState } from 'react';
import './App.css'
import Header from './pages/Header'
import Hero from './pages/Hero'
import Offer from './pages/Offer'
import Contact from './pages/Contact'
import Footer from './pages/Footer'

function App() {
  const [isFormVisible, setIsFromVisible] = useState(false);

  const toggleForm = () => {
    setIsFromVisible(!isFormVisible);
  };

  return (
    <>
    <div className='h-screen w-screen flex flex-col sm:h-screen'>
        <Header toggleForm={toggleForm} />
        <Hero toggleForm={toggleForm} isFormVisible={isFormVisible} />
      </div>
      <div className='h-auto w-screen flex flex-col'>
        <Offer />
      </div>
      <div className='h-auto w-screen bg-blue-900 flex flex-col sm:h-screen'>
        <Contact />
        <Footer />
      </div>
    </>
      
  )
}

export default App

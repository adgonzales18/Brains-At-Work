import './App.css'
import Header from './pages/Header'
import Hero from './pages/Hero'
import Offer from './pages/Offer'

function App() {

  return (
    <>
    <div className='h-screen w-screen flex flex-col'>
      <Header />
      <Hero />
    </div>
    <div className='h-screen w-screen flex flex-col'>
      <Offer />
    </div>
    </>
  )
}

export default App

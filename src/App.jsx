import React from 'react'

import Hero from './components/Hero/Hero'
import CNavbar from './components/Navbar/CNavbar'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      
      <CNavbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>

  )
}

export default App
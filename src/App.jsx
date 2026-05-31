import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Navbar from './Components/NavbarComponent/Navbar'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Meetings from '../src/pages/Meetings'
import Event from '../src/pages/Event'
import JoinUs from '../src/pages/JoinUs'
import Gallery from '../src/pages/Gallery'
import Footer from './Components/FooterComponent/Footer'




function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
   
      <Navbar />
      
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 lg:px-8 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/meetings" element={<Meetings />} />
           <Route path="/event" element={<Event />} />
              <Route path="/joinUs" element={<JoinUs />} />
              <Route path="/gallery" element={<Gallery />} />

          
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
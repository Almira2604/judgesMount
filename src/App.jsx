import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'

// 1. Fixed Components path (Ensure 'Components' is capitalized in your actual folder name)
import Navbar from './Components/NavbarComponent/Navbar'
import Footer from './Components/FooterComponent/Footer'

// 2. Fixed Pages paths (Removed the awkward '../src/' loop)
import Home from './pages/Home'
import About from './pages/About'
import Meetings from './pages/Meetings'
import Event from './pages/Event'
import JoinUs from './pages/JoinUs'
import Gallery from './pages/Gallery'




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
import React from 'react'
import { Routes, Route, Router } from 'react-router-dom'
import Navbar from './Components/NavbarComponent/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Meetings from './Pages/Meetings'
import Event from './Pages/Event'
import JoinUs from './pages/JoinUs'
import Gallery from './pages/Gallery'
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
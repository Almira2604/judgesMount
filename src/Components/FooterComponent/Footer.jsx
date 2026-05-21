import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF,  FaInstagram,  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaTelegram } from 'react-icons/fa'
import Logo from '../../assets/Logo.png' // Adjust path based on your file setup

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black/90 text-gray-300 border-t border-yellow-500/10 backdrop-blur-md mt-auto">
      
      {/* Upper Footer: Dynamic Links and Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Ministry Branding & Mandate */}
        <div className="space-y-4">
          <NavLink to="/" className="inline-block">
            <img src={Logo} alt="Judges Mount Logo" className="w-28 lg:w-36" />
          </NavLink>
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            A spiritual training ground dedicated to raising men and women who reflect Christ in character, conviction, and authority. Building uncompromising believers through prayer and the Word.
          </p>
          {/* Social Icons Stack */}
          <div className="flex items-center gap-4 pt-2">
            <a href="https://www.facebook.com/share/1DhWdqwDjB/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300">
              <FaFacebookF size={14} />
            </a>
          
           
            <a href="https://www.instagram.com/judges_mount?igsh=MTM4OTMwYWthM3Jlag==" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300">
              <FaInstagram size={14} />
            </a>
            <a href="https://t.me/mountofjudgesfellowship" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400 transition-all duration-300">
              <FaTelegram size={14} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Navigation Matrix */}
        <div>
          <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-5 border-l-2 border-yellow-400 pl-3">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/about" className="hover:text-yellow-400 transition duration-200 block">About The Ministry</NavLink>
            </li>
            <li>
              <NavLink to="/meeting" className="hover:text-yellow-400 transition duration-200 block">Weekly Services</NavLink>
            </li>
            <li>
              <NavLink to="/event" className="hover:text-yellow-400 transition duration-200 block">Upcoming Events</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className="hover:text-yellow-400 transition duration-200 block">Media Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/joinUs" className="hover:text-yellow-400 transition duration-200 block">Join A Tribe</NavLink>
            </li>
          </ul>
        </div>

        {/* Column 3: The Global Watch (Service Times) */}
        <div>
          <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-5 border-l-2 border-yellow-400 pl-3">
            Weekly Watches
          </h4>
          <ul className="space-y-4 text-sm font-light text-gray-400">
            <li className="border-b border-white/5 pb-2">
              <span className="block text-white font-medium">Prayer Meeting</span>
              <span className="text-xs text-yellow-400/80">Mondays - 5:00 PM (GMT+1)</span>
            </li>
            <li className="border-b border-white/5 pb-2">
              <span className="block text-white font-medium">Prayer Meeting</span>
              <span className="text-xs text-yellow-400/80">Wednesdays - 5:00 PM (GMT+1)</span>
            </li>
            <li>
              <span className="block text-white font-medium">Light Fridays - Teaching &Training</span>
              <span className="text-xs text-yellow-400/80">Fridays — 4:30 PM (GMT+1)</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Citadel Location */}
        <div>
          <h4 className="text-yellow-400 font-bold uppercase tracking-wider text-sm mb-5 border-l-2 border-yellow-400 pl-3">
            The Citadel
          </h4>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 shrink-0 mt-1" />
              <span>RCCG Rising Star Beside Saint Margaret School Station Bus Stop, Lagos, Nigeria </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400 shrink-0" />
              <span>08142343624 </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400 shrink-0" />
              <span>thcodsr@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Lower Footer: Copyright & Bottom-line Bar */}
      <div className="w-full border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Judges’ Mount. All Rights Reserved. Raised to Command Darkness.</p>
          <div className="flex gap-6">
            <NavLink to="/privacy" className="hover:text-gray-400 transition">Privacy Guard</NavLink>
            <NavLink to="/terms" className="hover:text-gray-400 transition">Terms of Fellowship</NavLink>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi"
import Logo from '../../assets/Logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainNavItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Meetings", link: "/meetings" },
    { name: "Event", link: "/event" },
    { name: "Join Us", link: "/joinUs" },
  ]

  const extraNavItems = [
    { name: "Gallery", link: "/gallery" },
   
  ]

  return (
    // Changed text-black to text-white so it's readable over the dark background
   // Find the opening nav tag in your Navbar.jsx and change it to exactly this:
<nav className="sticky top-0 w-full z-50 bg-black/80 backdrop-blur-md text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <NavLink to="/">
          <img
            src={Logo}
            alt="Logo"
            className="w-28 lg:w-36"
          />
        </NavLink>

        {/* Desktop Main Links */}
        <ul className="hidden md:flex items-center gap-8">
          {mainNavItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "text-gray-200 hover:text-yellow-400 transition duration-300"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Desktop Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-4 top-20 bg-black/95 backdrop-blur-md w-64 rounded-xl shadow-xl p-6 hidden md:block">
          <ul className="flex flex-col gap-5">
            {extraNavItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-yellow-400 transition text-white"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Full Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md px-6 py-6 text-white absolute left-0 w-full shadow-lg">
          <ul className="flex flex-col gap-6">
            {/* Main Links */}
            {mainNavItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg hover:text-yellow-400 transition block"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <hr className="border-gray-700" />

            {/* Extra Links */}
            {extraNavItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg hover:text-yellow-400 transition block"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar

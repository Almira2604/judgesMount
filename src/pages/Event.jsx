import React from 'react'
import { FaFire, FaBullhorn, FaGraduationCap } from 'react-icons/fa'

// Correct component paths pointing to your EventComponent folder
import Slider from '../Components/EventComponent/Slider'
import EventCard from '../Components/EventComponent/EventCard'

// Image imports
import Flyer1 from '../assets/Flyer1.jpeg'
import Flyer2 from '../assets/Flyer2.jpeg'
import Flyer3 from '../assets/Flyer3.jpeg'
import Flyer4 from '../assets/Flyer4.jpeg'
import Flyer5 from '../assets/Flyer5.jpeg'

function Events() {
  
  // FIX: Removed the curly braces from around the imported variables here
  const churchFlyers = [
    {
      id: 1,
      title: "Monthly Confession",
      tag: "TRAINING GROUND",
      image: Flyer1, 
    },
    {
      id: 2,
      title: "Faith Healing",
      tag: "INTENSE INTERCESSION",
      image: Flyer2,
    },
    {
      id: 3,
      title: "Student Retreat",
      tag: "TERRITORIAL ADVANCEMENT",
      image: Flyer3,
    },
    {
      id: 4,
      title: "Volunteer Meeting",
      tag: "TERRITORIAL ADVANCEMENT",
      image: Flyer4,
    },
    {
      id: 5,
      title: "THCOD",
      tag: "TERRITORIAL ADVANCEMENT",
      image: Flyer5,
    }
  ]

  const announcements = [
    {
      title: "Believers' Structural Retreat 2026",
      category: "Retreats & Conferences",
      date: "June 12 - 14, 2026",
      time: "4:00 PM Daily",
      venue: "RCCG Rising Star Auditorium",
      icon: <FaFire className="text-yellow-400" />,
      desc: "A consecutive 3-day consecration alignment block designed to forge structural kingdom authority."
    },
    {
      title: "Sovereign Systems Outreach",
      category: "Outreach Events",
      date: "Saturday, July 4, 2026",
      time: "9:00 AM",
      venue: "Station Bus Stop / Outer Environs",
      icon: <FaBullhorn className="text-yellow-400" />,
      desc: "Deploying deliverers to intentionally preach, dominate, and enforce divine righteousness in regional hot-zones."
    },
    {
      title: "Altar Doctrinal Alignment",
      category: "Monthly Training",
      date: "Every 1st Friday",
      time: "4:30 PM",
      venue: "Beside Saint Margaret School Venue",
      icon: <FaGraduationCap className="text-yellow-400" />,
      desc: "Unadulterated scriptural structural training parsing pure doctrine without cultural compromise."
    }
  ]

  return (
    <div className="w-full text-white min-h-screen pt-36 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Events & <span className="text-yellow-400">Decrees</span>
          </h1>
         
        </div>

        {/* FORCED HARD SPACER */}
        <div className="py-8 md:py-12"></div>

        {/* 1. CALL SLIDER COMPONENT AND PASS THE CORRECTED DATA */}
        <Slider data={churchFlyers} />

        {/* FORCED HARD SPACER */}
        <div className="py-10 md:py-14"></div>

        {/* Announcements List Container */}
        <div>
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-wide">Upcoming Convocations</h3>
            <div className="w-12 h-1 bg-yellow-400 mt-2 mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* 2. LOOP DATA INTO INDIVIDUAL COMPONENT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {announcements.map((item, idx) => (
              <EventCard 
                key={idx}
                title={item.title}
                category={item.category}
                date={item.date}
                time={item.time}
                venue={item.venue}
                icon={item.icon}
                desc={item.desc}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Events
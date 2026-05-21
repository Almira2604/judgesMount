import React from 'react'
import { FaRegClock, FaMapMarkerAlt, FaUsers, FaPray, FaBookReader, FaBullhorn, FaMapSigns } from 'react-icons/fa'

function Meetings() {
  const weeklyActivities = [
    { name: "Prayer Meetings", icon: <FaPray className="text-yellow-400 text-2xl" />, desc: "Intense, uncompromised communication lines generating raw spiritual power." },
    { name: "Teaching & Training", icon: <FaBookReader className="text-yellow-400 text-2xl" />, desc: "Doctrinal alignment and equipping believers with undeniable kingdom authority." },
    { name: "Discipleship", icon: <FaUsers className="text-yellow-400 text-2xl" />, desc: "Personal accountability, structural training, and thorough Christlike formation." },
    { name: "Outreach & Evangelism", icon: <FaBullhorn className="text-yellow-400 text-2xl" />, desc: "Intentionally confronting darkness and deploying deliverers into every sphere." }
  ]

  return (
    <div className="w-full text-white min-h-screen pt-36 pb-24 px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        
       
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Our <span className="text-yellow-400">Gatherings</span>
          </h1>
         
        </div>

        <div className="py-8 md:py-12"></div>

        {/* ==================== INTERACTIVE TIMETABLE GRID ==================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Monday Card */}
          <div className="bg-black/50 border border-white/5 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono tracking-widest text-yellow-400 uppercase mb-2">WEEK START</div>
              <h3 className="text-xl font-bold text-white mb-4">Monday Prayer & Communion Service</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">The engine room opening. Gathering to enforce divine ordinances early in the week.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-yellow-400/90 font-medium mt-6 pt-4 border-t border-gray-900">
              <FaRegClock /> <span>5:00 PM (WAT)</span>
            </div>
          </div>

          {/* Wednesday Card */}
          <div className="bg-black/50 border border-white/5 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="text-xs font-mono tracking-widest text-yellow-400 uppercase mb-2">MID-WEEK ALTAR</div>
              <h3 className="text-xl font-bold text-white mb-4">Wednesday Prayer</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Consuming intercessions designed to break limitations and maintain spiritual momentum.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-yellow-400/90 font-medium mt-6 pt-4 border-t border-gray-900">
              <FaRegClock /> <span>5:00 PM (WAT)</span>
            </div>
          </div>

          {/* Friday Card */}
          <div className="bg-gradient-to-br from-neutral-900/80 to-black/60 border border-yellow-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-mono font-black text-[10px] px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              Main Training
            </div>
            <div>
              <div className="text-xs font-mono tracking-widest text-yellow-400 uppercase mb-2">LIGHT FRIDAY</div>
              <h3 className="text-xl font-bold text-white mb-4">Teaching & Training</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Unadulterated Word, structural orientation, scriptural doctrine, and ministerial deployment rules.</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-yellow-400 font-bold mt-6 pt-4 border-t border-yellow-500/10">
              <FaRegClock /> <span>4:30 PM (WAT)</span>
            </div>
          </div>

        </div>

        <div className="py-10 md:py-14"></div>

        {/* ==================== CORE ACTIVITIES BENTO ==================== */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Weekly Focus Operations</h2>
            <div className="w-8 h-[2px] bg-yellow-400 mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {weeklyActivities.map((act, idx) => (
              <div key={idx} className="bg-neutral-900/40 border border-white/5 rounded-xl p-6 flex items-start gap-4">
                <div className="p-3 bg-yellow-400/5 rounded-lg border border-yellow-400/10 flex items-center justify-center shrink-0">
                  {act.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{act.name}</h4>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">{act.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 md:py-14"></div>

        {/* ==================== AESTHETIC VENUE LOCATION CARD ==================== */}
        <div className="bg-black/40 border border-yellow-500/10 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 font-mono text-xs px-3 py-1 rounded-full border border-yellow-400/20">
              <FaMapMarkerAlt /> PHYSICAL VENUE
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
              Locate the Mount
            </h3>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              We gather physically in an atmosphere prepared for intensive prayer and instruction. Locate us easily using these primary landmarks.
            </p>
            <div className="text-sm border-t border-gray-800 pt-4 text-gray-300 font-mono space-y-1">
              <p className="text-white font-bold text-base font-sans">RCCG Rising Star</p>
              <p>Beside Saint Margaret School</p>
              <p className="text-yellow-400 text-xs">Station Bus Stop</p>
            </div>
          </div>
          
          {/* AESTHETIC VISUAL PLACEHOLDER CONTAINER (Right Column) */}
          <div className="lg:col-span-7 w-full h-64 md:h-80 bg-neutral-950 rounded-2xl border border-white/5 overflow-hidden relative shadow-inner flex items-center justify-center">
            
            {/* The illustrative 'Aesthetic Landmark' art block */}
            <div className="absolute inset-0 opacity-80 flex items-center justify-center p-8">
              <div className="text-center">
                
                {/* Visual rendering of a rustic signpost leading to a destination */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 blur-3xl scale-125 opacity-20 bg-yellow-400 rounded-full"></div>
                  <FaMapSigns className="relative text-7xl md:text-8xl text-neutral-800" />
                  
                  {/* Subtle 'Rising Star' glow */}
                  <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full blur-[2px] opacity-90"></div>
                </div>

                {/* The aesthetic landmarks written visually */}
                <div className="space-y-1 text-sm md:text-base font-medium text-neutral-700 tracking-tight">
                  <p>Station Bus Stop <span className="text-yellow-400/30">/→/</span></p>
                  <p className="text-neutral-600">Beside St. Margaret School <span className="text-yellow-400/30">/→/</span></p>
                  <p className="text-neutral-500 font-mono uppercase tracking-widest text-[11px] pt-1">RCCG Rising Star Venue Position Active</p>
                </div>
              </div>
            </div>

            {/* Subtle overlay trees/foliage texture on the edges */}
            <div className="absolute bottom-0 right-0 w-2/3 h-1/2 opacity-10 bg-gradient-to-t from-neutral-800 via-transparent to-transparent rounded-bl-full"></div>
            <div className="absolute top-0 left-0 w-1/3 h-1/3 opacity-10 bg-gradient-to-b from-neutral-800 via-transparent to-transparent rounded-tr-full"></div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Meetings
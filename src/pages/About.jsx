import React from 'react'
import { FaCross, FaFire, FaHeart, FaBookOpen } from 'react-icons/fa'
import { LuShieldCheck, LuSparkles } from 'react-icons/lu'
import Pastor from './../assets/pastor.jpg'

function About() {
  const coreValues = [
    { 
      name: "Prayer", 
      icon: <LuSparkles className="text-yellow-400 text-3xl" />, 
      desc: "Our ultimate communication line and engine room for generating spiritual power." 
    },
    { 
      name: "The Word", 
      icon: <FaBookOpen className="text-yellow-400 text-3xl" />, 
      desc: "The unadulterated anchor for truth, doctrine, and continuous transformation." 
    },
    { 
      name: "Holiness", 
      icon: <FaCross className="text-yellow-400 text-3xl" />, 
      desc: "Living entirely separated unto God, reflecting Christlike character daily." 
    },
    { 
      name: "Discipleship", 
      icon: <LuShieldCheck className="text-yellow-400 text-3xl" />, 
      desc: "Spiritual formation, structural training, and personal accountability." 
    },
    { 
      name: "Courage", 
      icon: <FaFire className="text-yellow-400 text-3xl" />, 
      desc: "Standing boldly against the status quo to enforce divine righteousness." 
    },
    { 
      name: "Love", 
      icon: <FaHeart className="text-yellow-400 text-3xl" />, 
      desc: "The ultimate driving force binding our fellowship together in unity." 
    }
  ]

  return (
    /* Using absolute padding tops to push everything past the header */
    <div className="w-full text-white min-h-screen bg-transparent pt-40 pb-32 px-6 md:px-12 lg:px-16 flex flex-col items-center">
      
      <div className="w-full max-w-6xl">

        {/* 1. Header */}
        <div className="text-center ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-yellow-400">Judges Mount</span>
          </h1>
        </div>

        {/* FORCED HARD SPACER */}
        <div className="h-16 md:h-24 block clear-both"></div>

        {/* 2. Origin Story */}
        <div className="bg-black/50 border border-yellow-500/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-gray-800 pb-6 lg:pb-0 lg:pr-8">
            <h2 className="text-2xl md:text-3xl font-black text-yellow-400 uppercase tracking-wider">
              Our Divine <br />Foundation
            </h2>
            <p className="text-xs text-gray-500 mt-2 font-mono">ESTABLISHED ON GOD'S STANDARD</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-gray-200 text-lg leading-relaxed font-light">
              Judges’ Mount was birthed from a divine conviction rooted in <span className="text-yellow-400 font-semibold italic">Obadiah 1</span>, where deliverers arise to judge the systems of darkness. It began simply as a crushing burden to raise believers who will not compromise, but stand firmly for God’s standard. 
            </p>
            <p className="text-gray-300 text-base leading-relaxed font-light mt-4">
              From a small gathering, it has grown into a highly focused training ground where individuals are forged, equipped, and deployed to intentionally influence their world with undeniable kingdom authority.
            </p>
          </div>
        </div>

        {/* FORCED HARD SPACER */}
        <div className="h-16 md:h-24 block clear-both"></div>

        {/* 3. Mission / Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gradient-to-br from-neutral-900/80 to-black/60 border border-white/5 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-mono block mb-3">01 / THE ASSIGNMENT</span>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                To train believers through intense prayer, the unadulterated Word, and disciplined obedience to become spiritually mature, thoroughly Christlike, and highly effective in advancing God’s kingdom across generations.
              </p>
            </div>
            <div className="w-12 h-1 bg-yellow-400 mt-8 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900/80 to-black/60 border border-white/5 rounded-2xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs text-yellow-400 tracking-widest uppercase font-mono block mb-3">02 / THE END GOAL</span>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg">
                To raise a generation of uncompromising men and women who continually stand in God’s presence, walk unswervingly in righteousness without validation, and confront regional darkness with divine authority in every sphere of life.
              </p>
            </div>
            <div className="w-12 h-1 bg-yellow-400 mt-8 rounded-full"></div>
          </div>
        </div>

        {/* FORCED HARD SPACER */}
        <div className="h-16 md:h-24 block clear-both"></div>

        {/* 4. Core Pillars */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">Our Core Pillars</h2>
            <div className="w-8 h-[2px] bg-yellow-400 mx-auto mt-3"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-black/40 border border-white/5 rounded-xl p-6 hover:border-yellow-500/20 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-yellow-400/5 flex items-center justify-center mb-4 border border-yellow-400/10">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{val.name}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FORCED HARD SPACER */}
        <div className="h-16 md:h-24 block clear-both"></div>

        {/* 5. Leadership */}
        <div className="bg-black/60 border border-yellow-500/10 backdrop-blur-md rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center">
          <h3 className="text-xs uppercase tracking-widest font-mono text-gray-500 mb-6">Ministry Leadership</h3>
          
          <div className="w-32 h-32 rounded-full border-2 border-yellow-400 mx-auto overflow-hidden shadow-2xl bg-neutral-900 flex items-center justify-center mb-4">
            <img 
              src={Pastor} 
              alt="Pastor Abraham Salimonu" 
              className="w-full h-full object-cover object-top block" 
            />
          </div>

          <div className="space-y-1 mb-4">
            <h4 className="text-2xl font-black text-white">Pastor Abraham Salimonu</h4>
            <p className="text-yellow-400/80 text-sm font-medium tracking-wide">Lead Pastor, Judges' Mount</p>
          </div>

          <p className="text-gray-400 text-sm font-light max-w-md mx-auto leading-relaxed">
            Set apart by divine assignment to steer the training, altar discipline, and doctrinal alignment of the believers gathered at the Mount.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About
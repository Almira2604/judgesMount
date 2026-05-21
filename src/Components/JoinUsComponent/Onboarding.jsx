import React from 'react'
import { FaDoorOpen, FaPray, FaBookOpen, FaBullhorn, FaIdCard } from 'react-icons/fa'

function Onboarding() {
  const steps = [
    { number: "01", title: "Attend a Meeting", icon: <FaDoorOpen />, desc: "Locate the Mount at RCCG Rising Star and find your place among us physically or virtually." },
    { number: "02", title: "Commit to Prayer", icon: <FaPray />, desc: "Plug into our Monday and Wednesday prayer altars to establish your spiritual fire." },
    { number: "03", title: "Grow in the Word", icon: <FaBookOpen />, desc: "Submit to unadulterated scriptural alignment during our intensive Friday doctrinal training." },
    { number: "04", title: "Begin Witnessing", icon: <FaBullhorn />, desc: "Deploy into regional hot-zones to preach, dominate, and enforce kingdom righteousness." },
    { number: "05", title: "Join a Unit", icon: <FaIdCard />, desc: "Anchor your alignment by offering your grace to build the corporate spiritual machinery." },
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase bg-yellow-400/5 px-3 py-1 rounded-full border border-yellow-400/10">
          GROWTH TIMELINE
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-white mt-3">The Discipleship Pathway</h2>
        <div className="w-12 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-neutral-900/30 border border-white/5 p-6 rounded-2xl relative flex flex-col justify-between group hover:border-yellow-500/20 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-black text-neutral-800 font-mono group-hover:text-yellow-400/10 transition-colors">
                  {step.number}
                </span>
                <div className="w-8 h-8 rounded-lg bg-neutral-950 flex items-center justify-center text-sm text-yellow-400 border border-white/5 shadow-inner">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-base font-bold text-white tracking-tight mb-2">{step.title}</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Onboarding
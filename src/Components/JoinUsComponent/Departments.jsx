import React from 'react'
import { FaFire, FaHeart, FaSatellite, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'

function Departments() {
  const departments = [
    { name: "Prayer Unit", icon: <FaFire />, desc: "The engine room of the Mount. Holding structural prayer lines to generate raw kingdom authority." },
    { name: "Follow-Up & Care", icon: <FaHeart />, desc: "Enforcing intentional structural tracking, accountability, and thorough Christlike formation." },
    { name: "Outreach & Evangelism", icon: <FaSatellite />, desc: "Confronting territorial strongholds and deploying into systemic public spheres." },
    { name: "Media Team", icon: <FaLaptopCode />, desc: "Documenting divine blueprints, digital broadcasting, and tech system optimization." },
    { name: "Training & Discipleship", icon: <FaGraduationCap />, desc: "Parsing uncompromised core scriptural orientation and deployment rules." }
  ]

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <span className="text-xs font-mono tracking-widest text-yellow-400 uppercase bg-yellow-400/5 px-3 py-1 rounded-full border border-yellow-400/10">
          OPERATIONAL WINGS
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-white mt-3">Active Service Departments</h2>
        <div className="w-12 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {departments.map((dept, idx) => (
          <div key={idx} className="bg-neutral-900/20 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:bg-neutral-900/40 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/5 text-yellow-400 border border-yellow-400/10 flex items-center justify-center text-lg shrink-0">
              {dept.icon}
            </div>
            <div className="text-left">
              <h4 className="text-md font-bold text-white mb-1.5">{dept.name}</h4>
              <p className="text-xs text-gray-400 font-light leading-relaxed">{dept.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
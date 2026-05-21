import React from 'react'

function Hero() {
  return (
   
    <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center text-white px-4">
     
      <div className="max-w-4xl mb-8 space-y-4"> 
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-yellow-400">
          Judges Mount
        </h1>
        <p className="text-2xl md:text-4xl font-bold tracking-wide text-gray-100">
          Raising Uncompromising Believers
        </p>
      </div>
   
      <p className="max-w-2xl text-lg md:text-xl font-medium leading-relaxed text-gray-200">
        Judges’ Mount is a spiritual training ground dedicated to raising men and women 
        who reflect Christ in character, conviction, and authority. We build believers 
        through prayer and the Word, equipping them to stand in the gap for others and 
        confront darkness with righteousness. This is not just a fellowship it is a place 
        of formation, discipline, and spiritual growth.
      </p>

    </div>
  )
}

export default Hero
import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Slider({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1))
  }

  useEffect(() => {
    if (data.length === 0) return
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [currentIndex, data.length])

  if (data.length === 0) return null

  return (
    <div className="relative w-full min-h-[350px] md:h-[400px] bg-neutral-900/30 border border-white/5 rounded-3xl overflow-hidden shadow-2xl group">
      
      {/* Sliding Track Rail */}
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((slide) => (
          <div key={slide.id} className="w-full h-full shrink-0 grid grid-cols-1 md:grid-cols-12 items-center gap-6 p-6 md:p-8">
            
            {/* Left Side: The Flyer Image Container */}
            <div className="col-span-1 md:col-span-5 w-full h-64 md:h-full flex items-center justify-center overflow-hidden rounded-xl bg-black/40 border border-white/5">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Right Side: The Event Content Block */}
            <div className="col-span-1 md:col-span-7 flex flex-col justify-center text-left space-y-4 md:pl-4 pr-12">
              <div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 uppercase">
                  {slide.tag}
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
                {slide.title}
              </h2>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Join us for this powerful convocation. Make plans to attend physically and align with the direct corporate blueprint.
              </p>
            </div>

          </div>
        ))}
      </div>

      {/* Controllers (Positioned cleanly on the right or edges) */}
      <button onClick={prevSlide} className="absolute right-14 bottom-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center text-white md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400 hover:text-black z-20">
        <FaChevronLeft className="text-xs" />
      </button>

      <button onClick={nextSlide} className="absolute right-6 bottom-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-10 h-10 rounded-full bg-neutral-950 border border-white/10 flex items-center justify-center text-white md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400 hover:text-black z-20">
        <FaChevronRight className="text-xs" />
      </button>

      {/* Pagination Line/Dots */}
      <div className="absolute bottom-6 left-6 md:left-auto md:right-8 flex gap-1.5 z-20">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-6 bg-yellow-400' : 'w-2 bg-white/20'}`}
          ></button>
        ))}
      </div>

    </div>
  )
}

export default Slider
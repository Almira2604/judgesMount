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
    /* Notice the max-w-md mx-auto! It centers the slider and forces it to be a sharp flyer size */
    <div className="relative w-full max-w-sm mx-auto aspect-[4/5] sm:aspect-[3/4] bg-neutral-950 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
      
      {/* Sliding Track Rail */}
      <div 
        className="w-full h-full flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {data.map((slide) => (
          <div key={slide.id} className="w-full h-full shrink-0 relative">
            {/* The image takes up 100% of the frame naturally */}
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Elegant vignette shadow gradient directly over the flyer footer area */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
          </div>
        ))}
      </div>

      {/* Left Arrow Controller */}
      <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400 hover:text-black z-20">
        <FaChevronLeft className="text-xs" />
      </button>

      {/* Right Arrow Controller */}
      <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-yellow-400 hover:text-black z-20">
        <FaChevronRight className="text-xs" />
      </button>

      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
        {data.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-5 bg-yellow-400' : 'w-1.5 bg-white/40'}`}
          ></button>
        ))}
      </div>

    </div>
  )
}

export default Slider
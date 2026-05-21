import React, { useState, useEffect, useCallback} from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import confession from './../Components/data/confessions.json'

function ConfessionCard() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Navigate to the next slide safely - wrapped in useCallback so the auto-timer can use it safely
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === confession.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  // Navigate to the previous slide safely
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? confession.length - 1 : prevIndex - 1
    )
  }

  // 2. The Auto-Play Timer Logic
  useEffect(() => {
    // Set up a timer to trigger handleNext every 6000 milliseconds (6 seconds)
    // 6 seconds gives users plenty of time to read both the scripture and confession text
    const autoPlayTimer = setInterval(() => {
      handleNext()
    }, 100000)

    // IMPORTANT: The Cleanup Function
    // Clears the timer instantly if the user clicks manual controls or leaves the page
    return () => clearInterval(autoPlayTimer)
  }, [currentIndex, handleNext]) // Resets the 6-second countdown every time the slide changes

  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-4 md:px-8">
      
      {/* Main Slider Display Area Wrapper */}
      <div className="relative w-full max-w-3xl bg-black/60 border border-yellow-500/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 text-white overflow-hidden group">
        
        {/* Sliding Inner Container Track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {confession.map((slide) => (
            <div 
              key={slide.id} 
              className="w-full shrink-0 flex flex-col items-center text-center px-2 md:px-6"
            >
              {/* Dynamic Topic Tag */}
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1.5 rounded-full mb-8">
                {slide.topic}
              </span>

              {/* The Raw Scripture Quote Section */}
              <div className="mb-6 max-w-2xl">
                <p className="text-gray-300 italic text-xl md:text-2xl leading-relaxed font-light">
                  "{slide.scripture}"
                </p>
                <span className="block mt-3 text-sm font-semibold text-yellow-400/60 tracking-wider">
                  — {slide.reference}
                </span>
              </div>

              {/* Centered Minimal Design Ornament Line */}
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent my-4"></div>

              {/* Large Bold Faith Declaration */}
              <div className="min-h-[100px] flex items-center justify-center max-w-2xl">
                <p className="text-2xl md:text-3xl font-extrabold text-white tracking-wide leading-relaxed">
                  {slide.confession}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Interface Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-yellow-400 hover:text-black border border-white/10 flex items-center justify-center text-2xl transition-all duration-300 active:scale-90 cursor-pointer md:opacity-0 md:group-hover:opacity-100 shadow-lg"
          aria-label="Previous confession"
        >
          <FiChevronLeft />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 hover:bg-yellow-400 hover:text-black border border-white/10 flex items-center justify-center text-2xl transition-all duration-300 active:scale-90 cursor-pointer md:opacity-0 md:group-hover:opacity-100 shadow-lg"
          aria-label="Next confession"
        >
          <FiChevronRight />
        </button>

        {/* Dynamic Pagination Slide Counter Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {confession.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'w-6 bg-yellow-400' 
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  )
}

export default ConfessionCard
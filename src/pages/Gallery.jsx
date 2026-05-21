// Gallery.jsx
import React, { useState } from 'react'
import { categories, galleryData } from '../Components/GalleryData'

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')

  // State to track the active image index for each individual gallery card
  const [currentSlide, setCurrentSlide] = useState({})

  const filteredImages = activeFilter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeFilter)

  // Track scroll position to update the slide indicators dynamically
  const handleScroll = (cardId, event) => {
    const container = event.target
    const index = Math.round(container.scrollLeft / container.clientWidth)
    setCurrentSlide(prev => ({ ...prev, [cardId]: index }))
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Media <span className="text-yellow-400">Gallery</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
        <p className="text-sm text-gray-400 font-light mt-4 max-w-md mx-auto">
          Swipe horizontally inside any card to view historical meeting records.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
              activeFilter === category
                ? 'bg-yellow-400 text-black border-yellow-400 font-bold shadow-lg shadow-yellow-400/20'
                : 'bg-neutral-950 text-gray-400 border-white/10 hover:border-yellow-400/40 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((item) => {
          const activeIndex = currentSlide[item.id] || 0

          return (
            <div
              key={item.id}
              className="group relative aspect-video overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 transition-all duration-500 hover:border-yellow-400/30 shadow-xl"
            >
              {/* NATIVE SCROLL SNAP CONTAINER */}
              <div
                onScroll={(e) => handleScroll(item.id, e)}
                className="w-full h-full flex overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {item.images.map((imgUrl, index) => (
                  <div 
                    key={index} 
                    className="w-full h-full shrink-0 snap-center snap-always relative"
                  >
                    <img
                      src={imgUrl}
                      alt={`${item.title} - ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover select-none"
                    />
                  </div>
                ))}
              </div>

              {/* Constant Cinematic Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 pointer-events-none z-10" />

              {/* Floating Meta Labels */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left pointer-events-none z-20 flex justify-between items-end">
                <div className="space-y-2 max-w-[70%]">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-yellow-400 transition-colors">
                    {item.title}
                  </h4>
                </div>

                {/* Minimalist Slide Progress Dashboard Dots */}
                {item.images.length > 1 && (
                  <div className="flex items-center gap-1.5 pb-1">
                    {item.images.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          activeIndex === dotIdx 
                            ? 'w-4 bg-yellow-400' 
                            : 'w-1 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Fallback View */}
      {filteredImages.length === 0 && (
        <div className="text-gray-500 py-12 font-light text-sm">
          No media uploaded under this category yet.
        </div>
      )}
    </section>
  )
}

export default Gallery
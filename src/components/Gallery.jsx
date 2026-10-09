import { useState, useRef, useEffect } from 'react'
import { GALLERY_PHOTOS, GALLERY_VIDEOS } from '../galleryData'

export default function Gallery() {
  const [filter, setFilter] = useState('all') // 'all' | 'photos' | 'videos'
  const [isGrid, setIsGrid] = useState(false)
  const [activeMedia, setActiveMedia] = useState(null)
  const scrollRef = useRef(null)

  // Merge items for "all" tab alternating or combined
  const allItems = [
    ...GALLERY_PHOTOS.map(p => ({ ...p, mediaType: 'photo' })),
    ...GALLERY_VIDEOS.map(v => ({ ...v, mediaType: 'video', src: v.thumbnail, alt: v.title }))
  ]

  const items = filter === 'photos'
    ? GALLERY_PHOTOS.map(p => ({ ...p, mediaType: 'photo' }))
    : filter === 'videos'
    ? GALLERY_VIDEOS.map(v => ({ ...v, mediaType: 'video', src: v.thumbnail, alt: v.title }))
    : allItems

  // Scroll carousel left/right
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeMedia) return
      if (e.key === 'Escape') setActiveMedia(null)
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeMedia, items])

  const currentIndex = activeMedia ? items.findIndex(it => it.id === activeMedia.id) : -1

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < items.length - 1) {
      setActiveMedia(items[currentIndex + 1])
    } else if (currentIndex === items.length - 1) {
      setActiveMedia(items[0])
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveMedia(items[currentIndex - 1])
    } else if (currentIndex === 0) {
      setActiveMedia(items[items.length - 1])
    }
  }

  return (
    <section className="gl" id="gallery">
      <div className="w">
        <div className="hd">
          <div>
            <span className="sc" style={{ color: 'var(--g)', fontSize: 18 }}>Visual Showcase</span>
            <h2 style={{ fontSize: 26, margin: '2px 0 4px', color: 'var(--gd)' }}>🌿 Nursery Gallery & Video Tours</h2>
            <p style={{ color: 'var(--mu)', fontSize: 13 }}>
              Direct captures and tours from Sri Satyanarayana Nursery, Kadiyapulanka.
            </p>
          </div>

          <div className="gl-actions">
            {/* Filter Tabs */}
            <div className="gl-filters">
              <button
                className={`gl-tab ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All ({allItems.length})
              </button>
              <button
                className={`gl-tab ${filter === 'photos' ? 'active' : ''}`}
                onClick={() => setFilter('photos')}
              >
                📸 Photos ({GALLERY_PHOTOS.length})
              </button>
              <button
                className={`gl-tab ${filter === 'videos' ? 'active' : ''}`}
                onClick={() => setFilter('videos')}
              >
                🎥 Videos ({GALLERY_VIDEOS.length})
              </button>
            </div>

            <button
              className="btn s gl-toggle-btn"
              onClick={() => setIsGrid(!isGrid)}
              title="Toggle view"
            >
              {isGrid ? '‹ Scroll View ›' : '⊞ View All Grid'}
            </button>
          </div>
        </div>

        {/* Carousel / Slider View */}
        {!isGrid && (
          <div className="gl-carousel-wrapper">
            <button className="ar gl-arrow left" onClick={() => scroll('left')} aria-label="Previous">
              ‹
            </button>

            <div className="gr gl-scroll" ref={scrollRef}>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="gl-item-card"
                  onClick={() => setActiveMedia(item)}
                >
                  <img src={item.src} alt={item.alt || item.title} loading="lazy" />
                  <div className="gl-item-overlay">
                    {item.mediaType === 'video' ? (
                      <span className="gl-play-icon">▶</span>
                    ) : (
                      <span className="gl-zoom-icon">🔍</span>
                    )}
                    <span className="gl-item-title">{item.title}</span>
                    <span className={`gl-badge ${item.mediaType}`}>
                      {item.mediaType === 'video' ? 'Video' : 'Photo'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="ar gl-arrow right" onClick={() => scroll('right')} aria-label="Next">
              ›
            </button>
          </div>
        )}

        {/* Full Grid View */}
        {isGrid && (
          <div className="gl-grid-layout">
            {items.map((item) => (
              <div
                key={item.id}
                className="gl-grid-card"
                onClick={() => setActiveMedia(item)}
              >
                <div className="gl-grid-img-wrap">
                  <img src={item.src} alt={item.alt || item.title} loading="lazy" />
                  {item.mediaType === 'video' && (
                    <div className="gl-play-badge">▶</div>
                  )}
                  <span className={`gl-badge-corner ${item.mediaType}`}>
                    {item.mediaType === 'video' ? 'Video' : 'Photo'}
                  </span>
                </div>
                <div className="gl-grid-caption">
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Media Preview Modal / Lightbox */}
        {activeMedia && (
          <div className="gl-modal-backdrop" onClick={() => setActiveMedia(null)}>
            <div className="gl-modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="gl-modal-close"
                onClick={() => setActiveMedia(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {items.length > 1 && (
                <>
                  <button className="gl-modal-nav prev" onClick={handlePrev} aria-label="Previous">
                    ‹
                  </button>
                  <button className="gl-modal-nav next" onClick={handleNext} aria-label="Next">
                    ›
                  </button>
                </>
              )}

              <div className="gl-modal-body">
                {activeMedia.mediaType === 'video' ? (
                  <div className="gl-video-container">
                    <iframe
                      src={`https://www.youtube.com/embed/${activeMedia.youtubeId}?autoplay=1&rel=0`}
                      title={activeMedia.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="gl-image-container">
                    <img src={activeMedia.src} alt={activeMedia.alt || activeMedia.title} />
                  </div>
                )}
              </div>

              <div className="gl-modal-footer">
                <div className="gl-modal-title">
                  <span className={`gl-badge ${activeMedia.mediaType}`}>
                    {activeMedia.mediaType === 'video' ? '🎥 Nursery Video' : '📸 Nursery Photo'}
                  </span>
                  <h4>{activeMedia.title}</h4>
                </div>
                <span className="gl-counter">
                  {currentIndex + 1} / {items.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

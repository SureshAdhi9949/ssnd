import { useState, useEffect } from 'react'
import { SITE } from '../data'

const REVIEWS_DATA = [
  {
    id: 1,
    name: 'K. Ramakrishna Rao',
    role: 'Mango Orchard Owner',
    location: 'East Godavari',
    avatar: '/assets/a2.jpg',
    category: 'farm',
    rating: 5,
    date: 'Visited recently',
    verified: true,
    quote: 'Visited Sri Satyanarayana Nursery in Kadiyapulanka for Banganapalli and Guava saplings. The root quality and health of each plant is extraordinary. All 150 saplings thrived on our farm!'
  },
  {
    id: 2,
    name: 'Dr. Sunitha Reddy',
    role: 'Terrace Gardening Enthusiast',
    location: 'Hyderabad',
    avatar: '/assets/a1.jpg',
    category: 'home',
    rating: 5,
    date: '1 month ago',
    verified: true,
    quote: 'Ordered exotic indoor plants and flowering shrubs. Packing and doorstep delivery to Hyderabad was completely safe and fresh. Their WhatsApp team helped me with soil mixing tips too!'
  },
  {
    id: 3,
    name: 'M. Venkateswara Rao',
    role: 'Landscape Architect',
    location: 'Vijayawada',
    avatar: '/assets/a4.jpg',
    category: 'landscape',
    rating: 5,
    date: '2 weeks ago',
    verified: true,
    quote: 'We regularly source Avenue trees and Carpet grass from Sri Satyanarayana Nursery for our gated community projects. Best wholesale rates and unmatched variety across all of Andhra Pradesh.'
  },
  {
    id: 4,
    name: 'P. Anitha Varma',
    role: 'Bonsai Collector',
    location: 'Visakhapatnam',
    avatar: '/assets/a3.jpg',
    category: 'home',
    rating: 5,
    date: '3 weeks ago',
    verified: true,
    quote: 'Their Ficus Bonsai collection is an absolute masterpiece! You can see decades of dedicated training in their root formations. A true paradise for plant lovers and garden enthusiasts.'
  },
  {
    id: 5,
    name: 'Suresh Kumar',
    role: 'Villa Garden Owner',
    location: 'Rajahmundry',
    avatar: '/assets/a6.jpg',
    category: 'landscape',
    rating: 5,
    date: 'Visited last week',
    verified: true,
    quote: 'Huge nursery with thousands of varieties. The staff is polite, patient and knowledgeable. Bought fruit trees, outdoor palms, and flowering pots. Highest quality plants in the region!'
  },
  {
    id: 6,
    name: 'Lakshmi Prasanna',
    role: 'Balcony Gardener',
    location: 'Guntur',
    avatar: '/assets/a5.jpg',
    category: 'home',
    rating: 5,
    date: '1 month ago',
    verified: true,
    quote: 'The Snake plants and Aglaonemas I purchased are flourishing with almost zero maintenance. Outstanding plant health, healthy potting media, and honest guidance by the nursery team.'
  }
]

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [userRating, setUserRating] = useState(5)
  const [submitted, setSubmitted] = useState(false)

  const filteredReviews = activeTab === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.category === activeTab)

  // Auto-scroll every 5 seconds if not paused
  useEffect(() => {
    if (isPaused || filteredReviews.length <= 3) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused, filteredReviews.length])

  // Reset index when tab changes
  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length)
  }

  // Determine items to display in grid (3 items rolling window or paginated)
  const getVisibleReviews = () => {
    if (filteredReviews.length <= 3) return filteredReviews
    const items = []
    for (let i = 0; i < 3; i++) {
      items.push(filteredReviews[(currentIndex + i) % filteredReviews.length])
    }
    return items
  }

  const visibleReviews = getVisibleReviews()

  return (
    <section className="ts" id="landscaping">
      <img className="dec" src="/assets/l_gl.png" style={{ left: 0, bottom: 0, width: 70 }} alt="" />
      <img className="dec" src="/assets/l_gr.png" style={{ right: 0, top: 0, width: 60 }} alt="" />

      <div className="w">
        {/* Section Header */}
        <div className="ts-header">
          <span className="sc" style={{ color: 'var(--g)', fontSize: 18 }}>Client Stories</span>
          <h2 style={{ fontSize: 26, margin: '4px 0 6px', color: 'var(--gd)' }}>
            🌿 Kind words, good things take root here
          </h2>
          <div className="sub" style={{ fontSize: 13, color: 'var(--mu)', marginBottom: 12 }}>
            Real people. Real experiences across Andhra Pradesh & Telangana.
          </div>

          {/* Trust Rating Bar */}
          <div className="ts-trust-badge">
            <span className="stars">★★★★★</span>
            <b>4.9 / 5 Rating</b>
            <span className="dot-sep">•</span>
            <span>2,400+ Happy Gardeners</span>
            <span className="dot-sep">•</span>
            <span>Since 1953 in Kadiyam</span>
          </div>

          {/* Category Filter Pills */}
          <div className="ts-filter-pills">
            <button
              className={`ts-pill ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Reviews ({REVIEWS_DATA.length})
            </button>
            <button
              className={`ts-pill ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveTab('home')}
            >
              🪴 Home & Balcony
            </button>
            <button
              className={`ts-pill ${activeTab === 'farm' ? 'active' : ''}`}
              onClick={() => setActiveTab('farm')}
            >
              🥭 Orchards & Farms
            </button>
            <button
              className={`ts-pill ${activeTab === 'landscape' ? 'active' : ''}`}
              onClick={() => setActiveTab('landscape')}
            >
              🌳 Landscaping & Villas
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="ts-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="ts-nav-btn prev" onClick={handlePrev} aria-label="Previous review">
            ‹
          </button>

          <div className="tg">
            {visibleReviews.map((r) => (
              <blockquote key={r.id} className="ts-card">
                <div className="ts-card-top">
                  <img src={r.avatar} alt={r.name} className="ts-avatar" />
                  <div className="ts-user-info">
                    <b>{r.name}</b>
                    <span className="ts-role">{r.role}</span>
                    <span className="ts-loc">📍 {r.location}</span>
                  </div>
                  {r.verified && (
                    <span className="ts-verified-badge" title="Verified Customer">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <div className="ts-rating-row">
                  <span className="s">{'★'.repeat(r.rating)}</span>
                  <span className="ts-date">{r.date}</span>
                </div>

                <p className="ts-quote-text">“{r.quote}”</p>
              </blockquote>
            ))}
          </div>

          <button className="ts-nav-btn next" onClick={handleNext} aria-label="Next review">
            ›
          </button>
        </div>

        {/* Interactive Dots Pagination */}
        {filteredReviews.length > 3 && (
          <div className="dots ts-interactive-dots">
            {filteredReviews.map((r, idx) => (
              <i
                key={r.id}
                className={idx === currentIndex ? 'active-dot' : ''}
                onClick={() => setCurrentIndex(idx)}
                style={{ cursor: 'pointer' }}
                title={`Go to review by ${r.name}`}
              />
            ))}
          </div>
        )}

        {/* Actions Row */}
        <div className="ts-action-row">
          <button
            className="btn s"
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer', background: '#fff' }}
          >
            ✍️ Share Your Feedback
          </button>
          <a
            className="btn"
            href={`https://wa.me/${SITE.tel}?text=${encodeURIComponent('Hello Sri Satyanarayana Nursery, I want to inquire about plant varieties and services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, padding: '8px 20px' }}
          >
            💬 Contact Nursery
          </a>
        </div>
      </div>

      {/* Review Modal */}
      {showModal && (
        <div className="gl-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="plant-modal-card" style={{ maxWidth: 480, padding: 24 }} onClick={(e) => e.stopPropagation()}>
            <button className="gl-modal-close" onClick={() => setShowModal(false)}>✕</button>

            <h3 style={{ color: 'var(--gd)', margin: '0 0 6px', fontSize: 20 }}>
              🌿 Share Your Experience
            </h3>
            <p style={{ color: 'var(--mu)', fontSize: 12, marginBottom: 16 }}>
              We value your feedback on our plants, service and garden guidance at {SITE.name}.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <span style={{ fontSize: 44 }}>🎉</span>
                <h4 style={{ color: 'var(--gd)', margin: '12px 0 6px' }}>Thank You for Your Review!</h4>
                <p style={{ color: 'var(--mu)', fontSize: 13 }}>Your kind words help fellow gardeners grow with us.</p>
                <button className="btn" onClick={() => { setShowModal(false); setSubmitted(false); }} style={{ marginTop: 14 }}>
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="plant-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Your City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Kadiyam, Vizag"
                    className="plant-input"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Rating</label>
                  <div style={{ fontSize: 22, color: 'var(--gold)', cursor: 'pointer' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} onClick={() => setUserRating(star)}>
                        {star <= userRating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 11, fontWeight: 600, marginBottom: 4 }}>Your Review / Experience</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us about the plants you bought or your visit..."
                    className="plant-input"
                    style={{ width: '100%', borderRadius: 12, boxSizing: 'border-box', resize: 'vertical' }}
                  />
                </div>

                <button type="submit" className="btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

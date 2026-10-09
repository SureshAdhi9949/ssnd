import { useState, useEffect, useRef } from 'react'
import { SITE, NAV } from '../data'
import { LogoIcon } from './Leaf'
import { PLANT_ITEMS } from '../plantsData'

export default function Header() {
  const [activeSection, setActiveSection] = useState('#home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const searchInputRef = useRef(null)

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'plants', 'services', 'gallery', 'landscaping', 'visit']

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i])
        if (el) {
          const top = el.offsetTop
          if (scrollPos >= top) {
            setActiveSection(`#${sectionIds[i]}`)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Focus search input on open
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 80)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isSearchOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Filter plants for search
  const searchResults = searchQuery.trim()
    ? PLANT_ITEMS.filter((p) => {
        const q = searchQuery.toLowerCase().trim()
        return (
          p.name.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        )
      }).slice(0, 8)
    : []

  const handleSelectPlant = (plantName) => {
    setIsSearchOpen(false)
    window.dispatchEvent(
      new CustomEvent('filter-plants', { detail: { query: plantName } })
    )
    const el = document.getElementById('plants')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetEl = document.getElementById(targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(href)
    }
  }

  return (
    <>
      <header>
        <div className="w nav">
          {/* Logo */}
          <a className="logo" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <LogoIcon />
            <span>
              <b>Sri Satyanarayana</b>
              <small>Nursery Gardens</small>
            </span>
          </a>

          {/* Navigation Links */}
          <nav>
            {NAV.map(([n, h]) => (
              <a
                key={n}
                className={activeSection === h ? 'on' : ''}
                href={h}
                onClick={(e) => handleNavClick(e, h)}
              >
                {n}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hdr-actions">
            {/* Search Icon Button */}
            <button
              type="button"
              className="srch"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search plants"
              title="Search plants..."
            >
              🔍
            </button>

            {/* Call Button */}
            <a className="btn" href={`tel:${SITE.tel}`}>
              📞 <span>{SITE.phone}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className={`mob-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="mob-menu">
            <div className="mob-menu-inner">
              {NAV.map(([n, h]) => (
                <a
                  key={n}
                  className={`mob-link ${activeSection === h ? 'on' : ''}`}
                  href={h}
                  onClick={(e) => handleNavClick(e, h)}
                >
                  {n}
                </a>
              ))}
              <div className="mob-menu-actions">
                <button
                  type="button"
                  className="mob-srch-btn"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsSearchOpen(true)
                  }}
                >
                  🔍 Search Plants
                </button>
                <a className="btn" href={`tel:${SITE.tel}`} style={{ justifyContent: 'center' }}>
                  📞 Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="srch-modal" onClick={() => setIsSearchOpen(false)}>
          <div className="srch-box" onClick={(e) => e.stopPropagation()}>
            <div className="srch-top">
              <span style={{ fontSize: 18 }}>🔍</span>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search plants (e.g. Mango, Guava, Bonsai, Rose)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="srch-clr"
                  onClick={() => setSearchQuery('')}
                >
                  ✕
                </button>
              )}
              <button
                type="button"
                className="srch-close"
                onClick={() => setIsSearchOpen(false)}
              >
                Close
              </button>
            </div>

            <div className="srch-body">
              {searchQuery.trim() === '' ? (
                <div className="srch-tags">
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--mu)', marginBottom: 8 }}>
                    Popular Categories:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {['Mango', 'Taiwan Guava', 'Bonsai', 'Roses', 'Lemon', 'Bamboo', 'Sapota', 'Adenium'].map(tag => (
                      <button
                        key={tag}
                        type="button"
                        className="srch-tag-btn"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="srch-list">
                  {searchResults.map((plant) => (
                    <div
                      key={plant.id}
                      className="srch-item"
                      onClick={() => handleSelectPlant(plant.name)}
                    >
                      <img src={plant.image} alt={plant.name} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 11, color: 'var(--g)', fontWeight: 700, textTransform: 'uppercase' }}>
                          {plant.categoryName}
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--gd)' }}>
                          {plant.name}
                        </div>
                        <div style={{ fontSize: 11, color: 'var(--mu)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {plant.description}
                        </div>
                      </div>
                      <span className="srch-item-btn">View ➜</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 10px', color: 'var(--mu)' }}>
                  <div style={{ fontSize: 32 }}>🌱</div>
                  <p style={{ marginTop: 8, fontSize: 14 }}>No plant found for "{searchQuery}"</p>
                  <small>Try searching for Mango, Guava, Bonsai, or Roses.</small>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

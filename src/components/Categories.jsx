import { useState, useRef, useEffect } from 'react'
import { CATS, SITE } from '../data'
import { PLANT_ITEMS } from '../plantsData'

export default function Categories() {
  const [selectedCat, setSelectedCat] = useState('c1') // default to first category or 'all'
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('all')
  const [selectedPlant, setSelectedPlant] = useState(null)
  const catalogRef = useRef(null)

  useEffect(() => {
    const handleExternalFilter = (e) => {
      if (e.detail?.query) {
        setSelectedCat('all')
        setSearch(e.detail.query)
        setActiveTag('all')
        setTimeout(() => {
          catalogRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 120)
      }
    }
    window.addEventListener('filter-plants', handleExternalFilter)
    return () => window.removeEventListener('filter-plants', handleExternalFilter)
  }, [])

  // Filter plants based on category, search text, and quick tag
  const filteredPlants = PLANT_ITEMS.filter((plant) => {
    const matchesCat = selectedCat === 'all' || plant.categoryId === selectedCat
    const matchesSearch = !search.trim() ||
      plant.name.toLowerCase().includes(search.toLowerCase()) ||
      plant.categoryName.toLowerCase().includes(search.toLowerCase()) ||
      plant.description.toLowerCase().includes(search.toLowerCase())

    const matchesTag = activeTag === 'all' ||
      (activeTag === 'sun' && plant.sunlight.toLowerCase().includes('sun')) ||
      (activeTag === 'low-water' && plant.water.toLowerCase().includes('low')) ||
      (activeTag === 'indoor' && (plant.categoryId === 'c4' || plant.description.toLowerCase().includes('indoor')))

    return matchesCat && matchesSearch && matchesTag
  })

  const handleCategoryClick = (catId) => {
    setSelectedCat(catId)
    setSearch('')
    setActiveTag('all')
    // Smooth scroll down to catalog if on mobile or needed
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const handleViewAll = () => {
    setSelectedCat('all')
    setSearch('')
    setActiveTag('all')
    if (catalogRef.current) {
      catalogRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  const currentCategoryData = CATS.find(([img]) => img === selectedCat)
  const activeCategoryTitle = selectedCat === 'all'
    ? 'All Plant Varieties'
    : currentCategoryData ? currentCategoryData[2] : 'Selected Plants'

  return (
    <section className="cs" id="plants">
      <img className="dec" src="/assets/l_cr.png" style={{ right: 0, top: -6, width: 70 }} alt="" />
      <div className="w">
        <div className="hd">
          <div>
            <span className="sc">Explore our</span>
            <h2>Plant Categories</h2>
            <p>Find the perfect plants for your home, garden or farm.</p>
          </div>
          <button
            className="btn s"
            onClick={handleViewAll}
            style={{ cursor: 'pointer' }}
          >
            {selectedCat === 'all' ? '🌿 Showing All Plants' : 'View All Plants →'}
          </button>
        </div>

        {/* Categories Grid */}
        <div className="cats">
          {CATS.map(([img, ic, name, sub, c, bg]) => {
            const isActive = selectedCat === img
            return (
              <button
                key={name}
                type="button"
                className={`cat ${isActive ? 'cat-active' : ''}`}
                onClick={() => handleCategoryClick(img)}
                style={{
                  '--c': c,
                  background: bg,
                  border: isActive ? `3px solid ${c}` : '2px solid transparent',
                  cursor: 'pointer',
                  transform: isActive ? 'scale(1.04)' : undefined,
                  boxShadow: isActive ? `0 8px 22px rgba(15, 74, 42, 0.22)` : undefined
                }}
              >
                <img src={`/assets/${img}.jpg`} alt={name} />
                <i>{ic}</i>
                <b>{name}</b>
                <span>{sub}</span>
                <u style={{ background: isActive ? 'var(--gd)' : undefined }}>
                  {isActive ? '✓' : '➜'}
                </u>
              </button>
            )
          })}
        </div>

        {/* Interactive Plant Catalog Container */}
        <div className="plant-catalog-wrapper" ref={catalogRef}>
          <div className="plant-catalog-header">
            <div className="plant-catalog-info">
              <h3>
                {activeCategoryTitle}
                <span className="plant-count">({filteredPlants.length} Varieties)</span>
              </h3>
              <p>Click any plant to view care tips or order directly via WhatsApp.</p>
            </div>

            {/* Search and Filters */}
            <div className="plant-search-bar">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search plants (e.g., Mango, Bonsai, Rose)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="plant-input"
              />
              {search && (
                <button className="clear-search" onClick={() => setSearch('')}>✕</button>
              )}
            </div>
          </div>

          {/* Quick Filter Tags */}
          <div className="plant-tag-filters">
            <button
              className={`ptag ${activeTag === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTag('all')}
            >
              All Types
            </button>
            <button
              className={`ptag ${activeTag === 'indoor' ? 'active' : ''}`}
              onClick={() => setActiveTag('indoor')}
            >
              🪴 Indoor & Low Light
            </button>
            <button
              className={`ptag ${activeTag === 'sun' ? 'active' : ''}`}
              onClick={() => setActiveTag('sun')}
            >
              ☀️ Full Sunlight
            </button>
            <button
              className={`ptag ${activeTag === 'low-water' ? 'active' : ''}`}
              onClick={() => setActiveTag('low-water')}
            >
              💧 Low Water / Easy Care
            </button>
          </div>

          {/* Plants Grid */}
          {filteredPlants.length > 0 ? (
            <div className="plant-items-grid">
              {filteredPlants.map((plant) => {
                const waMessage = encodeURIComponent(
                  `Hello ${SITE.name}, I am interested in ordering/inquiring about *${plant.name}* from your nursery catalog.`
                )
                return (
                  <div key={plant.id} className="plant-card">
                    <div className="plant-card-media" onClick={() => setSelectedPlant(plant)}>
                      <img src={plant.image} alt={plant.name} loading="lazy" />
                      <span className="plant-tag">{plant.tag}</span>
                      <button className="plant-quickview-btn" aria-label="Quick view">
                        🔍 Quick View
                      </button>
                    </div>

                    <div className="plant-card-content">
                      <div className="plant-card-category">{plant.categoryName}</div>
                      <h4 className="plant-card-title" onClick={() => setSelectedPlant(plant)}>
                        {plant.name}
                      </h4>
                      <p className="plant-card-desc">{plant.description}</p>

                      <div className="plant-specs">
                        <span title="Sunlight Requirement">☀️ {plant.sunlight}</span>
                        <span title="Watering Need">💧 {plant.water}</span>
                      </div>

                      <div className="plant-card-actions">
                        <button
                          className="btn-details"
                          onClick={() => setSelectedPlant(plant)}
                        >
                          Details
                        </button>
                        <a
                          className="btn-wa"
                          href={`${SITE.wa}?text=${waMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Inquire on WhatsApp"
                        >
                          <span>💬</span> Inquire
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="no-plants-found">
              <span style={{ fontSize: 36 }}>🌿</span>
              <h4>No plants found matching "{search}"</h4>
              <p>Try searching for a different plant name or reset filters.</p>
              <button
                className="btn s"
                onClick={() => { setSearch(''); setActiveTag('all'); setSelectedCat('all'); }}
                style={{ marginTop: 10, cursor: 'pointer' }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Plant Details Modal */}
        {selectedPlant && (
          <div className="gl-modal-backdrop" onClick={() => setSelectedPlant(null)}>
            <div className="plant-modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                className="gl-modal-close"
                onClick={() => setSelectedPlant(null)}
                aria-label="Close"
              >
                ✕
              </button>

              <div className="plant-modal-layout">
                <div className="plant-modal-image">
                  <img src={selectedPlant.image} alt={selectedPlant.name} />
                  <span className="plant-modal-badge">{selectedPlant.tag}</span>
                </div>

                <div className="plant-modal-info">
                  <span className="plant-modal-cat">{selectedPlant.categoryName}</span>
                  <h3>{selectedPlant.name}</h3>
                  <p className="plant-modal-desc">{selectedPlant.description}</p>

                  <div className="plant-care-grid">
                    <div className="care-item">
                      <b>☀️ Sunlight</b>
                      <span>{selectedPlant.sunlight}</span>
                    </div>
                    <div className="care-item">
                      <b>💧 Watering</b>
                      <span>{selectedPlant.water}</span>
                    </div>
                    <div className="care-item">
                      <b>📏 Plant Size</b>
                      <span>{selectedPlant.height}</span>
                    </div>
                    <div className="care-item">
                      <b>🌱 Cultivation</b>
                      <span>Grown at Kadiyam Gardens</span>
                    </div>
                  </div>

                  <div className="plant-modal-contact">
                    <p><b>Ready to purchase or need care advice?</b> Contact our horticulturists directly:</p>
                    <div className="plant-modal-btns">
                      <a
                        className="btn"
                        href={`${SITE.wa}?text=${encodeURIComponent(
                          `Hello ${SITE.name}, I want to order/inquire about *${selectedPlant.name}*. Please share pricing and availability.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: '#25D366', borderColor: '#25D366' }}
                      >
                        💬 Inquire on WhatsApp
                      </a>
                      <a className="btn o" href={`tel:${SITE.tel}`} style={{ color: 'var(--gd)', borderColor: 'var(--gd)' }}>
                        📞 Call Nursery
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

import { SITE } from '../data'

export default function Cta() {
  return (
    <section className="cta" id="visit">
      <div className="cta-overlay" />
      <div className="w cta-container">
        <div className="cta-content">
          <div className="cta-badge">
            <span className="cta-badge-dot"></span>
            Visit Us or Order Plants Online
          </div>
          <h2 className="cta-title">
            Turn Empty Spaces into <span className="cta-highlight">Living Landscapes</span>
          </h2>
          <p className="cta-desc">
            Experience Andhra Pradesh's premier 70+ year legacy nursery in Kadiyapulanka. Explore over 500+ premium plant varieties or have healthy, thriving plants delivered safely to your location anywhere across India.
          </p>

          <div className="cta-badges-grid">
            <div className="cta-info-card">
              <span className="cta-icon">🕗</span>
              <div>
                <strong>Open 7 Days a Week</strong>
                <p>8:00 AM – 6:00 PM</p>
              </div>
            </div>
            <div className="cta-info-card">
              <span className="cta-icon">📍</span>
              <div>
                <strong>Kadiyapulanka Nursery Gardens</strong>
                <p>Near Rajahmundry, AP</p>
              </div>
            </div>
            <div className="cta-info-card">
              <span className="cta-icon">📞</span>
              <div>
                <strong>Customer Helpline</strong>
                <p>{SITE.phone}</p>
              </div>
            </div>
            <div className="cta-info-card">
              <span className="cta-icon">🚚</span>
              <div>
                <strong>Safe All-India Delivery</strong>
                <p>Plants Packed With Care</p>
              </div>
            </div>
          </div>

          <div className="cta-buttons">
            <a 
              className="cta-btn cta-btn-wa" 
              href={`${SITE.wa}?text=Hello%20Sri%20Satyanarayana%20Nursery%2C%20I%20am%20interested%20in%20purchasing%20plants.`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.197 8.197 0 0 1-5.83 2.41c-1.47 0-2.91-.39-4.17-1.14l-.3-.18-3.1 1.01.83-3.02-.2-.31a8.204 8.204 0 0 1-1.25-4.6c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
              </svg>
              Chat on WhatsApp
            </a>

            <a 
              className="cta-btn cta-btn-map" 
              href={SITE.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
              </svg>
              Get Directions
            </a>

            <a 
              className="cta-btn cta-btn-call" 
              href={`tel:${SITE.tel}`}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

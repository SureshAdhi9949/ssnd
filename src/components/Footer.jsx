import { SITE, NAV } from '../data'
import { LogoIcon } from './Leaf'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const plantLinks = [
    { name: 'Fruit Plants (జామ, సపోటా, దానిమ్మ)', hash: '#plants' },
    { name: 'Avenue & Shade Trees (నీడ నిచ్చే చెట్లు)', hash: '#plants' },
    { name: 'Ornamental & Flowering (పూల మొక్కలు)', hash: '#plants' },
    { name: 'Indoor & Air Purifying (ఇండోర్ మొక్కలు)', hash: '#plants' },
    { name: 'Bamboo & Exotic Grasses (వెదురు రకాలు)', hash: '#plants' },
    { name: 'Adenium & Bonsai (బోన్సాయ్ కలెక్షన్)', hash: '#plants' },
  ]

  return (
    <>
      <footer className="site-footer">
        <div className="w">
          <div className="ft-grid">
            {/* Column 1: Brand & Legacy */}
            <div className="ft-col ft-col-brand">
              <a className="ft-brand" href="#home">
                <LogoIcon />
                <div>
                  <h3 className="ft-brand-title">{SITE.name}</h3>
                  <p className="ft-brand-tagline">{SITE.tagline}</p>
                </div>
              </a>
              <p className="ft-desc">
                Serving green lovers since 1953 in Kadiyapulanka. We cultivate and supply over 500+ authentic, disease-resistant plant varieties with nationwide transport and personalized landscaping consultancy.
              </p>
              <div className="ft-social-links">
                <a 
                  href={SITE.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ft-social-btn ft-social-fb" 
                  aria-label="Facebook"
                  title="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href={SITE.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ft-social-btn ft-social-yt" 
                  aria-label="YouTube"
                  title="Watch our Nursery videos on YouTube"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href={`${SITE.wa}?text=Hello%20Sri%20Satyanarayana%20Nursery%2C%20I%20am%20interested%20in%20plants.`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ft-social-btn ft-social-wa" 
                  aria-label="WhatsApp"
                  title="Chat with us on WhatsApp"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.197 8.197 0 0 1-5.83 2.41c-1.47 0-2.91-.39-4.17-1.14l-.3-.18-3.1 1.01.83-3.02-.2-.31a8.204 8.204 0 0 1-1.25-4.6c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.07-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                </a>
                <a 
                  href={SITE.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ft-social-btn ft-social-map" 
                  aria-label="Google Maps"
                  title="View nursery on Google Maps"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="ft-col">
              <h4 className="ft-heading">Explore Pages</h4>
              <ul className="ft-links">
                {NAV.map(([title, href]) => (
                  <li key={title}>
                    <a href={href} className="ft-link">
                      <span className="ft-link-arrow">›</span> {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Plant Specialties */}
            <div className="ft-col">
              <h4 className="ft-heading">Our Collections</h4>
              <ul className="ft-links">
                {plantLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.hash} className="ft-link">
                      <span className="ft-link-arrow">🌱</span> {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="ft-col ft-col-contact">
              <h4 className="ft-heading">Visit & Connect</h4>
              <div className="ft-contact-list">
                <a 
                  href={SITE.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ft-contact-item"
                >
                  <span className="ft-contact-icon">📍</span>
                  <span>{SITE.address}</span>
                </a>
                <a href={`tel:${SITE.tel}`} className="ft-contact-item">
                  <span className="ft-contact-icon">📞</span>
                  <span><strong>{SITE.phone}</strong> (Orders & Guidance)</span>
                </a>
                <a href={`mailto:${SITE.email}`} className="ft-contact-item">
                  <span className="ft-contact-icon">✉️</span>
                  <span>{SITE.email}</span>
                </a>
                <div className="ft-contact-item">
                  <span className="ft-contact-icon">🕗</span>
                  <span><strong>8:00 AM – 6:00 PM</strong> (Open 365 Days)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Top button */}
          <div className="ft-bottom">
            <p className="ft-copy">
              © {currentYear} <strong>{SITE.name}</strong>. All rights reserved.
            </p>
            <p className="ft-motto">
              <span>🌱 Growing Nature. Nurturing Life.</span>
            </p>
            <a href="#home" onClick={handleScrollTop} className="ft-back-top">
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Quick Action Widget */}
      <div className="fl" role="complementary" aria-label="Quick contact">
        <a 
          href={`${SITE.wa}?text=Hello%20Sri%20Satyanarayana%20Nursery%2C%20I%20am%20interested%20in%20plants.`}
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Chat on WhatsApp"
        >
          <i style={{ background: '#25d366' }}>💬</i>
          WhatsApp
        </a>
        <a href={`tel:${SITE.tel}`} aria-label="Call Nursery">
          <i style={{ background: '#0f766e' }}>📞</i>
          Call
        </a>
        <a 
          href={SITE.mapsUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="View Location Map"
        >
          <i style={{ background: '#ea580c' }}>📍</i>
          Location
        </a>
      </div>
    </>
  )
}

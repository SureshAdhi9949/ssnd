import { useState } from 'react'
import { SITE } from '../data'
export default function VideoSection() {
  const [play, setPlay] = useState(false)
  return (
    <section className="vd" id="video"><div className="w">
      <div className="hd"><div><span className="sc">Take a tour</span><h2>See our nursery from above</h2><p>Watch the plants, trees and garden paths of {SITE.name}.</p></div></div>
      <div className="vf">
        {!play && <button className="pb" aria-label="Play nursery video" onClick={() => setPlay(true)}>▶</button>}
        <div className="vc"><b>Our nursery, Rajahmundry</b><a href={`https://youtu.be/${SITE.video}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a></div>
        {play && <iframe title="Nursery video" src={`https://www.youtube-nocookie.com/embed/${SITE.video}?autoplay=1&rel=0`} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
      </div>
    </div></section>
  )
}

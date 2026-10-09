import { SITE, STRIP } from '../data'
export default function Hero() {
  return (<>
    <div className="hero">
      <svg className="dec" style={{ left: -18, top: -10 }} width="90" height="190"><use href="#lf" width="60" height="110" transform="rotate(-35 30 55)" /><use href="#lf" width="40" height="80" x="30" y="40" transform="rotate(30 50 80)" /></svg>
      <svg className="dec" style={{ left: -24, top: 230 }} width="90" height="150"><use href="#lf" width="55" height="100" y="10" transform="rotate(-60 30 60)" /></svg>
      <div className="w"><div className="in">
        <span className="tag">🌿 Since 1953</span>
        <h1><span className="a">Where every plant begins</span><span className="b">a new story.</span></h1>
        <h2>{SITE.name}</h2>
        <p>Discover beautiful plants, trees and garden essentials, carefully grown to bring lasting beauty and life to every space.</p>
        <div className="c"><a className="btn" href="#plants">🌿 Explore plants</a><a className="btn o" href="#visit">💬 Visit our nursery</a></div>
      </div></div>
    </div>
    <div className="strip"><div className="w">
      {STRIP.map(([i, t, s]) => <div key={t}><div className="ic">{i}</div><b>{t}</b><span>{s}</span></div>)}
    </div></div>
  </>)
}

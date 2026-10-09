import { SITE } from '../data'
const ST = [['🌱', 'Since 1953', 'Established'], ['🕗', '8 am to 6 pm', 'Monday to Sunday'], ['📍', 'Rajahmundry', 'Andhra Pradesh']]
export default function About() {
  return (
    <section className="ab" id="about">
      <div className="w"><img className="ph" src="/assets/about.jpg" alt="Plants in the nursery" />
        <div><span className="sc">About 🍃</span><h2>{SITE.name}</h2><h3>More than a nursery. A living world of green.</h3>
          <p>Step into a greener world filled with beautiful plants, fresh foliage and timeless trees. We carefully nurture every plant to help you create spaces that feel alive, peaceful and naturally beautiful. Grown with care. Chosen for your space.</p>
          <div className="st">{ST.map(([i, b, s]) => <div key={b}><span className="ic">{i}</span><span><b>{b}</b>{s}</span></div>)}</div>
          <a className="btn" href="#visit">Learn More →</a></div></div>
      <div className="hp sc">Healthy<br />Plants<br />Beautiful<br />Gardens</div>
      <img className="dec" src="/assets/l_ab.png" style={{ right: 0, bottom: 0, width: 190 }} alt="" />
    </section>
  )
}

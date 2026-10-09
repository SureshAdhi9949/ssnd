import { WHY } from '../data'
export default function Why() {
  return (
    <section className="why" id="services"><div className="w">
      <div><div className="sc">Why Choose Us?</div><p>More than a nursery, we are your gardening partners.</p></div>
      <div className="wg">{WHY.map(([i, t, s]) => <div key={t}><em>{i}</em><b>{t}</b>{s}</div>)}</div>
      <img className="hands" src="/assets/hands.jpg" alt="Hands nurturing a young plant sprout" />
    </div></section>
  )
}

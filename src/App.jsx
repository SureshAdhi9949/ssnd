import { LeafSprite } from './components/Leaf'
import Header from './components/Header'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Categories from './components/Categories'
import About from './components/About'
import Why from './components/Why'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import Footer from './components/Footer'
export default function App() {
  return (<>
    <LeafSprite /><Header />
    <main id="home"><Hero /><VideoSection /><Categories /><About /><Why /><Gallery /><Testimonials /><Cta /></main>
    <Footer />
  </>)
}

import './App.scss';

import Navbar from "../../components/Navbar/Navbar"
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
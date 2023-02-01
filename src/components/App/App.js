import './App.scss';
// import { Routes, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar"
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

export default function App() {
  return (
    <div className='App'>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}
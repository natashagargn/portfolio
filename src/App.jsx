import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Education from './components/Education'
// import Skills from './components/Skills'
// import Project from './components/Project'
// import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"
import { Outlet } from 'react-router-dom'

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
     <Navbar />
     <Outlet />
     {/* <Home />
     <Education />
     <Skills />
     <Project />
     <Contact /> */}
     <Footer />
    </>
  )
}

export default App

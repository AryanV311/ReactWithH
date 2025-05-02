import React from 'react'
import { Navbar } from './components/Navbar/Navbar'
import { Hero } from './components/Header/Hero';
import { About } from './components/About/About';
import { Skill } from './components/Skills/Skill';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import { Contact } from './components/contact/Contact';
 const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App;
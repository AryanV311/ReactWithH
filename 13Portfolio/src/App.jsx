
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

import {Contact} from './pages/Contact';
import { About } from './pages/About';


function App() {

  return (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={Contact} />
    </Routes>
    {/* <Footer /> */}
  </div>
  )
}

export default App

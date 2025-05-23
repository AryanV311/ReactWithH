
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { useState } from 'react'

function App() {
  const [globalSearch, setGlobalSearch] = useState("")
  const [selected, setSelected] = useState({
      material: [],
      brand: [],
      color: [],
      size: [],
    });

  return (
    <>
    <Navbar setGlobalSearch={setGlobalSearch} />
      <Routes>
        <Route path='/' element={<Home selected={selected} globalSearch={globalSearch} setSelected={setSelected} />} />
      </Routes>
    </>
  )
}

export default App

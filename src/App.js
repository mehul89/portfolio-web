
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Component/Layout'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contect'
import Skills from './Component/Skills'


function App() {
  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />



        </Route>

      </Routes>



    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Home'
import Sobre from './Sobre'
import Usuario from './Usuario'

function Rotas() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Sobre' element={<Sobre />} />
          <Route path='/Usuario' element={<Usuario />} />
        </Routes>
      </Router>
    )
  }

  export default Rotas;
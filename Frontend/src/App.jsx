import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import AddCourse from './components/AddCourse'
import EditCourse from './components/EditCourse'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/add" element={<AddCourse />} />

        <Route path="/edit/:id" element={<EditCourse />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App
import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route,Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Contact } from './Components/Contact'
import { PageNotFound } from './Components/PageNotFound'
import Forms from './Components/Forms'
export default function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Forms />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
